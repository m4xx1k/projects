import React from 'react';
import {useParams} from "react-router-dom";
import TaskForm from "../../components/projects/TaskForm.jsx";
import IsCreator from "../../components/user/IsCreator.jsx";

const TaskCreate = () => {
    const {id} = useParams()
    return (
        <IsCreator project={id} goBack={true}>
            <TaskForm project={id} type={'create'} task={null}/>
        </IsCreator>
    );
};

export default TaskCreate;
