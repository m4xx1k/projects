import React from 'react';
import {UITextField, UISelect, UIButton, UIDatePicker} from "../../shared/uikit/";
import {TaskComplexity, TaskStatus, TaskUrgency} from "../../shared/constants.js";
import {useForm} from "react-hook-form";
import {useCreateTaskMutation, useUpdateTaskMutation} from "../../redux/task/taskApiSlice.js";
import {useNavigate} from "react-router-dom";
import {useFindAllProjectParticipantsQuery} from "../../redux/projectParticipant/projectParticipantApiSlice.js";

const TaskForm = ({type = 'create', task, project}) => {
    const navigate = useNavigate()
    const {data: users, isSuccess: isSuccessUsers} = useFindAllProjectParticipantsQuery(project)
    const usersToSelect = isSuccessUsers && Array.isArray(users) ? [{
        value: null,
        label: '-'
    }, ...users.map(({userId: user}) => ({value: user._id, label: user.email}))] : [{value: null, label: '-'}]
    console.log(users, usersToSelect)

    const {register, handleSubmit, formState: {errors}, control} = useForm({defaultValues: task});
    const [handleCreate, {isLoading: createLoading}] = useCreateTaskMutation()
    const [handleUpdate, {isLoading: updateLoading}] = useUpdateTaskMutation()

    const create = async (formData) => {
        try {
            const {data} = await handleCreate({...formData, project})
            if (data?.task) {
                navigate('/')
            }
            console.log(formData)
        } catch (e) {
            console.log(e)
            alert("error:/")
        }
    }
    const update = async (formData) => {
        try {
            const {data} = await handleUpdate({id: task._id, data: formData})
            if (data?.task) {
                if (type === 'create') navigate('/')
                if (type === 'update') navigate(`/task/${task._id}`)
            }
        } catch (e) {
            console.log(e)
            alert("error:/")
        }
    }
    const submit = async data => {
        if (type === 'create') {
            await create(data)
        }
        if (type === 'update') {
            await update(data)
        }
        console.log(data)
    }
    return (
        <form className={'max-w-sm mx-auto mt-10'} onSubmit={handleSubmit(submit)}>
            <UITextField
                label="Назва"
                inputProps={{type: "text", ...register("name", {required: true})}}
                error={errors.name}
            />

            <UITextField
                label="Опис"
                inputProps={{type: "text", ...register("description", {required: true})}}
                error={errors.description}

            />

            <UISelect label={'Складність'} options={TaskComplexity}
                      inputProps={{...register('complexity', {required: 'true'})}}/>

            <UISelect label={'Терміновість'} options={TaskUrgency}
                      inputProps={{...register('urgency', {required: 'true'})}}/>
            <UISelect label={'Виконавець'} options={usersToSelect}
                      inputProps={{...register('assignedTo')}}/>

            <UISelect label={'Статус'} options={TaskStatus}
                      inputProps={{...register('status', {required: 'true'})}}/>

            <UIDatePicker control={control} name={'deadline'} label={'Дедлайн'}
                          inputProps={{...register('deadline', {required: true})}}
                          error={errors.deadline}/>
            <UIButton disabled={updateLoading || createLoading}
                      bg={'blue'} className={'px-4 py-1 mx-auto mt-6'}
                      type="submit">
                {
                    {
                        'create': 'Створити',
                        'update': 'Оновити'
                    }[type]
                }
            </UIButton>
        </form>

    );
};

export default TaskForm;
