import React from 'react';
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import {
    useFindAllProjectParticipantsQuery,
    useFindAllProjectRequestsQuery
} from "../../redux/projectParticipant/projectParticipantApiSlice.js";
import UITitle from "../../shared/uikit/UITitle.jsx";
import {useParams} from "react-router-dom";
import ProjectRequestsList from "../../components/projects/ProjectRequest/ProjectRequestsList.jsx";
import ProjectParticipantsList from "../../components/projects/ProjectParticipants/ProjectParticipantsList.jsx";
import IsCreator from "../../components/user/IsCreator.jsx";

const ProjectParticipants = () => {
    const {id} = useParams()
    const {data: project} = useFindOneProjectQuery(id)
    const {data: requests} = useFindAllProjectRequestsQuery(id)
    const {data: participants} = useFindAllProjectParticipantsQuery(id)
    console.log(project)
    if (!project || !requests || !participants) return 'wait'
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
            <UITitle size={'2xl'}>Учасники Проекту "{project?.project.name}"</UITitle>
            <IsCreator id={project.project.userId}>
                <ProjectRequestsList project={project.project} requests={requests.filter(req=>req.status==='new')}/>

            </IsCreator>
            <ProjectParticipantsList participants={participants} project={project}/>
        </div>
    );
};

export default ProjectParticipants;
