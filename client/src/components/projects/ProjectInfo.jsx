import {UILink, UITitle, UIValue} from "../../shared/uikit/index.js";
import {ProjectComplexity, ProjectStatus} from "../../shared/constants.js";
import IsParticipant from "../user/IsParticipant.jsx";

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
export default ProjectInfo
