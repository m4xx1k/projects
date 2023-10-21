import React from 'react';

import UiTitle from "../../shared/uikit/UITitle.jsx";
import ProjectFrom from "../../components/projects/ProjectFrom.jsx";


const CreateProject = () => {


    return (
        <>
            <UiTitle size={'2xl'}>Створити Проект</UiTitle>
            <ProjectFrom/>
        </>
    );
};

export default CreateProject;
