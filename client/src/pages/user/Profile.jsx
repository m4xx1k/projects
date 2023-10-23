import React from 'react';
import {useDeleteUserMutation, useFindUserByIdQuery} from "../../redux/user/userApiSlice.js";
import UIValue from "../../shared/uikit/UIValue.jsx";
import UIButton from "../../shared/uikit/UIButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/user/userSlice.js";
import UserInfo from "../../components/user/UserInfo.jsx";
import UserProjectsTable from "../../components/user/UserProjectsTable/index.jsx";
import {useParams} from "react-router-dom";
import UserTasksTable from "../../components/user/UserTasksTable/index.jsx";
import {UILink, UILoader} from "../../shared/uikit/index.js";
import IsAuth from "../../components/user/IsAuth.jsx";

const Profile = () => {
    const {id} = useParams()
    const {data: user, isLoading} = useFindUserByIdQuery(id)
    const [deleteUser] = useDeleteUserMutation()
    const dispatch = useDispatch()
    const handleLogout = () => dispatch(logout())
    const handleDelete = async () => {
        await deleteUser(id)
        handleLogout()
    }
    if (!user || isLoading) return <UILoader/>
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
            <IsAuth id={id}>
                <div className={'flex self-end items-center gap-2'}>
                    <UILink to={ `/user/update/${id}`} bg={'orange'}>Редагувати Профіль</UILink>
                    <UIButton bg={'red'} onClick={handleDelete}>Видалити профіль</UIButton>
                    <UIButton onClick={handleLogout} bg={'red'}>Вийти</UIButton>

                </div>
            </IsAuth>
            <UserInfo user={user}/>
            <UserProjectsTable user={user}/>
            <UserTasksTable user={user}/>
        </div>

    );
};

export default Profile;
