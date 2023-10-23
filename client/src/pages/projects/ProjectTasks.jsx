import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {UILink, UISkeleton, UITitle} from "../../shared/uikit/index.js";
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import ProjectTasksList from "../../components/projects/ProjectTasksList/";
import TasksFilter from "../../components/projects/TasksFilter.jsx";
import {useForm} from "react-hook-form";
import IsCreator from "../../components/user/IsCreator.jsx";

const defaultValues = {assignedTo: '', urgency: '', complexity: '', status: ''}
const ProjectTasks = () => {
    const {id} = useParams()
    const [filter, setFilter] = useState({})
    const {data: project,isLoading} = useFindOneProjectQuery(id)
    const {register, handleSubmit} = useForm({defaultValues})
    const submit = data => {
        setFilter(data)
    }
    if (isLoading) return <UISkeleton/>

    if (!project?.project) return null
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
                <IsCreator  project={id}>
                    <UILink to={`/task/create/${id}`} bg={'green'} className={'self-end px-1'}>Добавити Завдання</UILink>

                </IsCreator>

            <UITitle size={'2xl'}>Завдання до Проекту "{project.project.name}"</UITitle>
            <TasksFilter id={id} register={register} onSubmit={handleSubmit(submit)}/>
            <ProjectTasksList filter={filter} creator={project.project.userId} id={id}/>
        </div>

    );
};

export default ProjectTasks;
