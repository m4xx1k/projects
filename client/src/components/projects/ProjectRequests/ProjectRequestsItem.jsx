import React from 'react';
import {
    useAllowParticipantRequestMutation,
    useForbidParticipantRequestMutation
} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import {UIButton, UITitle, UIValue} from "../../../shared/uikit/";
import {Link} from "react-router-dom";

const ProjectRequestsItem = ({request, project}) => {
    const [allow] = useAllowParticipantRequestMutation()
    const [forbid] = useForbidParticipantRequestMutation()
    const {userId: user} = request
    const handleAllow = async () => await allow(request._id)
    const handleForbid = async () => await forbid(request._id)
    return (
        <li className={'flex flex-col gap-2 rounded-md bg-white w-full py-2 px-4'}>

            <UITitle align={'start'} size={'sm'}>
                <Link to={`/user/${user._id}`}>{user.fullname} </Link>
                хоче приєднатись до проекту
                <Link to={`/project/${project._id}`}>"{project.name}"</Link>
            </UITitle>
            <section className={'flex justify-between gap-2 w-full flex-wrap'}>
                <div className={'w-3/7 flex flex-col gap-1'}>
                    <UIValue name={'Курс'} value={`${user.course} курс`} valueWeight={'medium'}/>
                    <UIValue name={'Спеціальність'} value={user.specialty} valueWeight={'medium'}/>
                    <UIValue name={'Факультет'} value={user.faculty} valueWeight={'medium'}/>
                    <UIValue name={'Пошта'} value={user.email} valueWeight={'medium'}/>
                    <UIValue name={'Телефон'} value={user.phone} valueWeight={'medium'}/>
                </div>
                <p className={'w-3/7 text-sm'}>
                    {user.about}
                </p>
            </section>
            <div className={'flex items-center gap-4 self-start'}>
                <UIButton bg={'green'} onClick={handleAllow}>Додати до проекту</UIButton>
                <UIButton bg={'red'} onClick={handleForbid}>Відхилити запит</UIButton>
            </div>
        </li>
    );
};

export default ProjectRequestsItem;
