import React from 'react';

import {UITitle} from "../../shared/uikit/";
import ProjectForm from "../../components/projects/ProjectForm.jsx";


const CreateProject = () => {
    return (
        <>
            <UITitle size={'2xl'}>Створити Проект</UITitle>
            <ProjectForm/>
        </>
    );
};

export default CreateProject;
