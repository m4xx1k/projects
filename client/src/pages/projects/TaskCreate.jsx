import React from 'react';
import {useParams} from "react-router-dom";
import TaskForm from "../../components/projects/TaskForm.jsx";

const TaskCreate = () => {
    const {id} = useParams()
    return (
        <div>
            <TaskForm project={id} type={'create'} task={null}/>
        </div>
    );
};

export default TaskCreate;
