import React from 'react';
import UITitle from "../../shared/uikit/UITitle.jsx";
import {useSelector} from "react-redux";
import UILink from "../../shared/uikit/UILink.jsx";

const Header = () => {
    const {user} = useSelector(state => state.user)

    return (
        <div className={'w-full flex items-center justify-between  py-4 px-2 bg-gray-100'}>
            <UITitle align={'start'} className={'w-3/4'} size={'md'}> Веб-платформа для керування процесами розробки університетських проект</UITitle>
            {
                user ?
                    <UILink bg={'blue'} to={'user/profile'}> Профіль ({user.email})</UILink>
                :
                    <UILink bg={'blue'} to={'/login'}> Вхід</UILink>
            }
        </div>
    );
};

export default Header;
