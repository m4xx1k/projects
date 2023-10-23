import React from 'react';
import {UIButton, UISelect} from "../../shared/uikit/index.js";
import {TaskComplexity, TaskStatus, TaskUrgency} from "../../shared/constants.js";
import {withAll} from "../../shared/utils.js";
import {useFindFullProjectTasksQuery} from "../../redux/task/taskApiSlice.js";
import {useSelector} from "react-redux";

const TasksFilter = ({id, onSubmit, register}) => {
    const {user} = useSelector(state => state.user)
    const {data, isSuccess, isLoading} = useFindFullProjectTasksQuery({user: user?._id, project: id})
    const participants = data && isSuccess ? data.participants.map(p => ({
        value: p.userId._id,
        label: p.userId.fullname
    })) : []
    return (
        <form onSubmit={onSubmit} className={'w-full flex gap-4 items-end'}>

            <UISelect label={'Статус'} options={withAll(TaskStatus)} width={20}
                      inputProps={{...register('status')}}/>
            <UISelect label={'Складність'} options={withAll(TaskComplexity)} width={20}
                      inputProps={{...register('complexity')}}/>
            <UISelect label={'Важливість'} options={withAll(TaskUrgency)} width={20}
                      inputProps={{...register('urgency')}}/>

            <UISelect label={'Виконавець'} options={withAll(participants)} width={20}
                      inputProps={{...register('assignedTo')}}/>

            <UIButton disabled={isLoading} bg={'blue'} type={'submit'}>Знайти</UIButton>

        </form>
    );
};


export default TasksFilter;
