import React from 'react';
import {useParams} from "react-router-dom";
import {useDeleteProjectMutation, useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import {UITitle, UILink, UIButton, UIValue} from "../../shared/uikit/";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";
import IsCreator from "../../components/user/IsCreator.jsx";
import IsParticipant from "../../components/user/IsParticipant.jsx";
import ParticipantProjectRequestButton
    from "../../components/projects/ProjectRequests/ParticipantProjectRequestButton.jsx";
import ProjectParticipantsList from "../../components/projects/ProjectParticipantsTable/index.jsx";
import ProjectTaskList from "../../components/projects/ProjectTasksTable/index.jsx";
import {useSelector} from "react-redux";

const ProjectPage = () => {
    const {user} = useSelector(state => state.user)
    const {id} = useParams()
    const {data} = useFindOneProjectQuery(id)

    if (!data?.project) return null
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>

            <IsCreator project={data.project._id}>
                <ProjectControls project={data?.project}/>
            </IsCreator>

            {data.project.userId !== user?._id && user &&
                < ParticipantProjectRequestButton id={id}/>
            }
            <ProjectInfo project={data?.project}/>

            <section className={'flex flex-col gap-1 w-full items-center'}>
                <ProjectParticipantsList id={id} slice={3}/>
                <UILink underline className={'text-lg'} to={`/project/participants/${id}`}>Подивитися всіх
                    учасників</UILink>
            </section>

            <section className={'flex flex-col gap-1 w-full items-center'}>

                <ProjectTaskList id={id} slice={3}/>
                <UILink underline className={'text-lg'} to={`/project/${id}/tasks`}>Подивитися всі завдання</UILink>
            </section>
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
                <IsParticipant project={project._id}>
                    <UILink to={`/chat/${project._id}`} bg={'green'} className={'w-36 font-bold text-center'}>Чат
                        Проекту</UILink>

                </IsParticipant>
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
