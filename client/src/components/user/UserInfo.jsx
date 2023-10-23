import React from 'react';
import {UILink, UITitle, UIValue} from "../../shared/uikit/index.js";

const UserInfo = ({user}) => {
    return (
        <>
            <UITitle size={'2xl'}>{user.fullname}</UITitle>
            <p className={'self-start'}>
                {user.about}
            </p>
            <div className={'flex flex-col w-full  gap-2'}>

                <UIValue name={'Курс'}
                         value={user.course}/>

                <UIValue name={'Факультет'}
                         value={user.faculty}/>
                <UIValue name={'Спеціальність'}
                         value={user.specialty}/>
                <UIValue name={'Посилання'}
                         value={
                             <UILink to={user.link} className={'pl-0 font-bold'} underline>Посилання</UILink>
                         }/>
                <UIValue name={'Номер телефону'}
                         value={user.phone}/>
                <UIValue name={'Пошта'}
                         value={user.email}/>
            </div>
        </>

    );
};

export default UserInfo;
