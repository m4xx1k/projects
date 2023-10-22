import React from 'react';
import {UITitle} from "../../shared/uikit/";
import ProjectForm from "../../components/projects/ProjectForm.jsx";
import {useParams} from "react-router-dom";
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";

const UpdateProject = () => {
    const {id} = useParams()
    const {data} = useFindOneProjectQuery(id)

    return (
        <>
            <UITitle size={'2xl'}>Редагування Проекту</UITitle>
            {
                data?.project && <ProjectForm type={'update'} project={data?.project}/>
            }

        </>
    );
};

export default UpdateProject;
