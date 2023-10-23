import React from 'react';
import {UITextField, UISelect} from "../../shared/uikit/";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";
import {useForm} from "react-hook-form";
import {useCreateProjectMutation, useUpdateProjectMutation} from "../../redux/project/projectApiSlice.js";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProjectForm = ({type = 'create', project}) => {
    const {user} = useSelector(state => state.user)
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: project});
    const [handleCreate, {isLoading: createLoading}] = useCreateProjectMutation()
    const [handleUpdate, {isLoading: updateLoading}] = useUpdateProjectMutation()
    const navigate = useNavigate()
    const create = async (formData) => {
        try {
            const {data} = await handleCreate({...formData, userId: user._id})
            if (data?.project) {
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
            const {data} = await handleUpdate({id: project._id, data: formData})
            if (data?.project) {
                if (type === 'create') navigate('/')
                if (type === 'update') navigate(`/project/${project._id}`)
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

            <UISelect label={'Складність'} options={ProjectComplexity}
                      inputProps={{...register('complexity', {required: 'true'})}}/>

            <UITextField
                label="Тривалість розробки ( 0-360 )"
                inputProps={{type: "number", ...register("developmentTime", {required: true, min: 0, max: 360})}}
                error={errors.developmentTime}

            />

            <UITextField
                label="Стек технологій"
                inputProps={{type: "text", ...register("stack", {required: true})}}
                error={errors.developmentTime}

            />

            <UITextField
                label="Предметна область"
                inputProps={{type: "text", ...register("subjectArea", {required: true})}}
                error={errors.subjectArea}

            />

            <UISelect label={'Статус'} options={ProjectStatus}
                      inputProps={{...register('status', {required: 'true'})}}/>

            <UITextField
                label="Посилання"
                inputProps={{type: "text", ...register("link", {required: true})}}
                error={errors.subjectArea}

            />

            <button disabled={updateLoading || createLoading}
                    className={'bg-blue-500 text-white px-4 py-1 rounded mx-auto mt-6'}
                    type="submit">
                {
                    {

                        'create': 'Створити',
                        'update': 'Оновити'
                    }[type]
                }
            </button>
        </form>

    );
};

export default ProjectForm;
