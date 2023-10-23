import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDeleteProjectMutation, useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import {UITitle, UILink, UIButton, UIValue, UISkeleton} from "../../shared/uikit/";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";
import IsCreator from "../../components/user/IsCreator.jsx";
import IsParticipant from "../../components/user/IsParticipant.jsx";
import ParticipantProjectRequestButton
    from "../../components/projects/ProjectRequests/ParticipantProjectRequestButton.jsx";
import ProjectParticipantsList from "../../components/projects/ProjectParticipantsTable/index.jsx";
import ProjectTaskList from "../../components/projects/ProjectTasksTable/index.jsx";
import {useSelector} from "react-redux";
import ProjectInfo from "../../components/projects/ProjectInfo.jsx";

const ProjectPage = () => {
    const {user} = useSelector(state => state.user)
    const {id} = useParams()
    const {data, isLoading} = useFindOneProjectQuery(id)
    if (isLoading) return <UISkeleton/>
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


const ProjectControls = ({project}) => {
    const navigate = useNavigate()
    const [deleteProject] = useDeleteProjectMutation()
    const handleDelete = async ()=>{
        await deleteProject(project._id)
        navigate('/')
    }
    if (!project) return null
    return (
        <div className={'self-end flex items-center gap-4'}>
            <UILink to={`/project/update/${project._id}`} bg={'orange'} className={'px-1'}>Редагувати
            </UILink>
            <UIButton onClick={handleDelete} bg={'red'} className={'px-1'}>
                Видалити
            </UIButton>
        </div>
    )
}

export default ProjectPage;
