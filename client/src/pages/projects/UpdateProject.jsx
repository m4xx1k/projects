import React from 'react';
import {UITitle} from "../../shared/uikit/";
import ProjectForm from "../../components/projects/ProjectForm.jsx";
import {useParams} from "react-router-dom";
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import IsCreator from "../../components/user/IsCreator.jsx";

const UpdateProject = () => {
    const {id} = useParams()
    const {data} = useFindOneProjectQuery(id)

    return (
        <IsCreator project={id} goBack={true}>
            <UITitle size={'2xl'}>Редагування Проекту</UITitle>
            {
                data?.project && <ProjectForm type={'update'} project={data?.project}/>
            }

        </IsCreator>
    );
};

export default UpdateProject;
