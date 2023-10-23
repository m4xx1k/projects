import React from 'react';
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import {
    useFindAllProjectParticipantsQuery,
    useFindAllProjectRequestsQuery
} from "../../redux/projectParticipant/projectParticipantApiSlice.js";
import {UITitle} from "../../shared/uikit/";
import {useParams} from "react-router-dom";
import ProjectRequestsList from "../../components/projects/ProjectRequests/ProjectRequestsList.jsx";
import ProjectParticipantsList from "../../components/projects/ProjectParticipantsTable/index.jsx";
import IsCreator from "../../components/user/IsCreator.jsx";

const ProjectParticipants = () => {
    const {id} = useParams()
    const {data: project} = useFindOneProjectQuery(id)

    if (!project) return 'wait'
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
            <UITitle size={'2xl'}>Учасники Проекту "{project?.project.name}"</UITitle>
            <IsCreator id={project.project.userId}>
                <ProjectRequestsList project={project.project}/>
            </IsCreator>
            <ProjectParticipantsList id={id}/>
        </div>
    );
};

export default ProjectParticipants;
