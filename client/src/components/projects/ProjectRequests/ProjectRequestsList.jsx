import React from 'react';
import {UITitle} from "../../../shared/uikit/";
import ProjectRequestsItem from "./ProjectRequestsItem.jsx";
import {useFindAllProjectRequestsQuery} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import IsCreator from "../../user/IsCreator.jsx";

const ProjectRequestsList = ({project}) => {
    const {data: requests} = useFindAllProjectRequestsQuery(project._id)
    if (!requests?.length) return null
    return (
        <IsCreator project={project._id}>
            <UITitle align={'start'}>Запити на участь у проекті</UITitle>
            <ul className={'list-none bg-gray-200 px-8 pt-8 pb-4 mt-2 rounded-md w-full'}>
                {
                    requests.filter(req => req.status === 'new').map(request => <ProjectRequestsItem key={request._id}
                                                                                                     request={request}
                                                                                                     project={project}/>)
                }
            </ul>
        </IsCreator>

    );
};

export default ProjectRequestsList;
