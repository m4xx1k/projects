import React from 'react';
import UiTitle from "../../shared/uikit/UITitle.jsx";
import ProjectFrom from "../../components/projects/ProjectFrom.jsx";
import {useParams} from "react-router-dom";
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";

const UpdateProject = () => {
    const {id} = useParams()
    const {data} = useFindOneProjectQuery(id)

    return (
        <>
            <UiTitle size={'2xl'}>Редагування Проекту</UiTitle>
            {
                data?.project && <ProjectFrom type={'update'} project={data?.project}/>
            }

        </>
    );
};

export default UpdateProject;
