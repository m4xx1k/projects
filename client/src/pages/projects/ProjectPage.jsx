import React from 'react';
import {useParams} from "react-router-dom";
import {useDeleteProjectMutation, useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import {UITitle, UILink, UIButton, UIValue} from "../../shared/uikit/";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";
import IsCreator from "../../components/user/IsCreator.jsx";
import IsParticipant from "../../components/user/IsParticipant.jsx";
import ParticipantProjectRequestButton
    from "../../components/projects/ProjectRequests/ParticipantProjectRequestButton.jsx";
import ProjectParticipantsList from "../../components/projects/ProjectParticipants/ProjectParticipantsList.jsx";

const ProjectPage = () => {
    const {id} = useParams()
    const {data} = useFindOneProjectQuery(id)

    if (!data?.project) return null
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>

            <IsCreator id={data.project?.userId}>
                <ProjectControls project={data?.project}/>
            </IsCreator>

            <IsParticipant>
                <ParticipantProjectRequestButton id={id}/>
            </IsParticipant>

            <ProjectInfo project={data?.project}/>

            <ProjectParticipantsList id={id}/>
            <UILink to={`/project/participants/${id}`}>Всі Учасники</UILink>
            <UILink to={`/task/create/${id}`}>Створити Завдання</UILink>
        </div>
    );
};
const ProjectInfo = ({project}) => {
    if (!project) return null
    return (
        <>
            <UITitle size={'2xl'}>{project.name}</UITitle>
            <p className={'self-start'}>
                {project.description}
            </p>
            <div className={'flex flex-col w-full  gap-2'}>
                <div className={'w-full flex justify-between items-center'}>

                    <UIValue name={'К-сть учасників'}
                             value={project.participantsCount}/>
                    <UILink to={project.link} className={'font-bold'} underline>Посилання </UILink>
                </div>

                <UIValue name={'Тривалість розробки'}
                         value={project.developmentTime}/>
                <UIValue name={'Складність'}
                         value={ProjectComplexity.find(({value}) => value === project.complexity).label}/>
                <UIValue name={'Статус'}
                         value={ProjectStatus.find(({value}) => value === project.status).label}/>
                <UIValue name={'Стек'}
                         value={project.stack}/>
            </div>
        </>
    )
}
const ProjectControls = ({project}) => {
    const [deleteProject] = useDeleteProjectMutation()
    if (!project) return null
    return (
        <div className={'self-end flex items-center gap-4'}>
            <UILink to={`/project/update/${project._id}`} bg={'orange'} className={'px-1'}>Редагувати
            </UILink>
            <UIButton onClick={() => deleteProject(project._id)} bg={'red'} className={'px-1'}>
                Видалити
            </UIButton>
        </div>
    )
}
export default ProjectPage;
