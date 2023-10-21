import React from 'react';
import {useParams} from "react-router-dom";
import {useDeleteProjectMutation, useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import UITitle from "../../shared/uikit/UITitle.jsx";
import UILink from "../../shared/uikit/UILink.jsx";
import IsCreator from "../../components/user/IsCreator.jsx";
import UiButton from "../../shared/uikit/UIButton.jsx";
import UIValue from "../../shared/uikit/UIValue.jsx";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";

const ProjectPage = () => {
    const {id} = useParams()
    const {data} = useFindOneProjectQuery(id)
    const [deleteProject] = useDeleteProjectMutation()
    return (
        <>{data?.project ?
            <div className={'flex flex-col items-center mx-auto gap-8'}>

                <IsCreator id={data.project?.userId}>
                    <div className={'self-end flex items-center gap-4'}>
                        <UILink to={`/project/update/${data.project._id}`} bg={'orange'} className={'px-1'}>Редагувати
                        </UILink>
                        <UiButton onClick={() => deleteProject(data.project._id)} bg={'red'} className={'px-1'}>
                            Видалити
                        </UiButton>
                    </div>
                </IsCreator>

                <UITitle size={'2xl'}>{data?.project.name}</UITitle>

                <p className={'self-start'}>
                    {data.project.description}
                </p>
                <div className={'flex flex-col w-full  gap-2'}>
                    <div className={'w-full flex justify-between items-center'}>

                        <UIValue name={'К-сть учасників'}
                                 value={data.project.participantsCount}/>
                        <UILink to={data.project.link} className={'font-bold'} underline>Посилання </UILink>
                    </div>

                    <UIValue name={'Тривалість розробки'}
                             value={data.project.developmentTime}/>
                    <UIValue name={'Складність'}
                             value={ProjectComplexity.find(({value}) => value === data.project.complexity).label}/>
                    <UIValue name={'Статус'}
                             value={ProjectStatus.find(({value}) => value === data.project.status).label}/>
                    <UIValue name={'Стек'}
                             value={data.project.stack}/>
                </div>


            </div>
            : null
        }</>
    );
};

export default ProjectPage;
