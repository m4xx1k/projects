import React from 'react';
import {UILoader, UITitle} from "../../shared/uikit/index.js";
import UserForm from "../../components/user/UserForm.jsx";
import {useFindUserByIdQuery} from "../../redux/user/userApiSlice.js";
import {useParams} from "react-router-dom";
import IsAuth from "../../components/user/IsAuth.jsx";

const EditProfile = () => {
    const {id} = useParams()
    const {data: user, isLoading} = useFindUserByIdQuery(id)
    if (isLoading) return <UILoader/>
    if (!user) return null
    return (
        <IsAuth goBack={true} id={id}>
            <div className={'flex flex-col items-center mx-auto gap-8'}>
                <UITitle>Редагувати профіль</UITitle>
                <UserForm type={'update'} user={user}/>
            </div>
        </IsAuth>

    );
};

export default EditProfile;
