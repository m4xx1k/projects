import React from 'react';
import UIValue from "../../shared/uikit/UIValue.jsx";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";
import {Link} from "react-router-dom";
import UILink from "../../shared/uikit/UILink.jsx";

const AllProjectsItem = ({project}) => {
    console.log(project)
    return (
        <div className={'flex flex-col gap-1 p-4 w-full rounded-md bg-gray-200'}>
            <UILink to={`/project/${project._id}`} underline>
                <h2 className={'font-bold text-lg'}>
                    {project?.name}
                </h2>
            </UILink>

            <p className={'my-4 text-sm'}>
                {project.description}
            </p>
            <div className={'w-full flex justify-between items-center'}>
                <UIValue name={'Статус'} value={ProjectStatus.find(({value}) => value === project.status).label}/>
                <UIValue name={'Складність'}
                         value={ProjectComplexity.find(({value}) => value === project.complexity).label}/>
            </div>
            <div className={'w-full flex justify-between items-center'}>
                <UIValue name={'К-сть учасників'}
                         value={project.participantsCount}/>
                <UIValue name={'Тривалість розробки'}
                         value={project.developmentTime}/>
            </div>

            <UIValue name={'Стек'}
                     value={project.stack}/>
            <Link className={'underline'} to={project.link} rel={'noreferrer'} target={'_blank'}>Посилання</Link>
        </div>
    );
};

export default AllProjectsItem;
