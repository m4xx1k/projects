import React from 'react';
import {UITitle} from "../../../shared/uikit/";
import ProjectRequestsItem from "./ProjectRequestsItem.jsx";

const ProjectRequestsList = ({requests, project}) => {
    if(!requests?.length) return null
    return (
        <>
            <UITitle align={'start'}>Запити на участь у проекті</UITitle>
            <div className={'bg-gray-200 p-12 mt-2 rounded w-full'}>
                {
                    requests.map(request => <ProjectRequestsItem key={request._id} request={request}
                                                                 project={project}/>)
                }
            </div>
        </>

    );
};

export default ProjectRequestsList;
