import React from 'react';
import {useFindUserByIdQuery} from "../../redux/user/userApiSlice.js";
import UIValue from "../../shared/uikit/UIValue.jsx";
import UIButton from "../../shared/uikit/UIButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/user/userSlice.js";
import UserInfo from "../../components/user/UserInfo.jsx";
import UserProjectsTable from "../../components/user/UserProjectsTable/index.jsx";
import {useParams} from "react-router-dom";
import UserTasksTable from "../../components/user/UserTasksTable/index.jsx";
import {UILoader} from "../../shared/uikit/index.js";

const Profile = () => {
    const {id} = useParams()
    const {data: user, isLoading} = useFindUserByIdQuery(id)
    const dispatch = useDispatch()
    const handleLogout = () => dispatch(logout())
    if (!user||isLoading) return <UILoader/>
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
            <UserInfo user={user}/>
            <UserProjectsTable user={user}/>
            <UserTasksTable user={user}/>
            <UIButton onClick={handleLogout} bg={'red'}>Вийти</UIButton>
        </div>

    );
};

export default Profile;
