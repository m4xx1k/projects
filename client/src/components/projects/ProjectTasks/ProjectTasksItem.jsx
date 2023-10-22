import React from 'react';

const ProjectTasksItem = ({task}) => {
    return (
        <div>
            {task?.name}
        </div>
    );
};

export default ProjectTasksItem;
