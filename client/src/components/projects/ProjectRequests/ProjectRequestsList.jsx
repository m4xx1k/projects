import React from 'react';
import {UISkeleton, UITitle} from "../../../shared/uikit/";
import ProjectRequestsItem from "./ProjectRequestsItem.jsx";
import {useFindAllProjectRequestsQuery} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import IsCreator from "../../user/IsCreator.jsx";
import {isArray} from "../../../shared/utils.js";

const ProjectRequestsList = ({project}) => {
    const {data: requests, isLoading} = useFindAllProjectRequestsQuery(project._id)
    if (!isArray(requests)) return null
    if (isLoading) return <UISkeleton/>
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
