import React from 'react';
import {useFindOneTaskQuery} from "../../../redux/task/taskApiSlice.js";
import ProjectTasksItem from "./ProjectTasksItem.jsx";

const ProjectTaskList = ({id}) => {
    const {data} = useFindOneTaskQuery({_id: id})
    return (
        <div>
            {Array.isArray(data) && data.map(task => <ProjectTasksItem task={task}/>)}
        </div>
    );
};

export default ProjectTaskList;
