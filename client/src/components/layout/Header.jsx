import React from 'react';
import {useSelector} from "react-redux";
import {User, LogIn} from 'react-feather';
import {UILink} from "../../shared/uikit/index.js";

const Header = () => {
    const {user} = useSelector(state => state.user)

    return (
        <div className={'w-full  bg-gray-100'}>
            <div className={'max-w-5xl flex items-center justify-between  py-4 px-2 mx-auto'}>
                <UILink to={'/'} align={'start'} className={'w-3/4 max-w-md font-normal underline'}
                        size={'md'}> Веб-платформа для
                    керування процесами розробки університетських проект</UILink>
                {
                    user ?
                        <UILink className={'w-10 h-10 flex items-center justify-center rounded-full'} bg={'blue'}
                                to={'user/profile'}> <User stroke={'white'}/></UILink>
                        :
                        <UILink className={'w-10 h-10 flex items-center justify-center rounded-full'} bg={'blue'}
                                to={'/login'}>
                            <LogIn stroke={'white'}/>
                        </UILink>
                }
            </div>

        </div>
    );
};

export default Header;
