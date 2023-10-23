import React from 'react';
import {UITextField, UITitle, UIButton, UISelect} from "../../shared/uikit/";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSingUpMutation} from "../../redux/user/userApiSlice.js";
import  {auth} from "../../redux/user/userSlice.js";
import {UserRoles} from "../../shared/constants.js";
import UILink from "../../shared/uikit/UILink.jsx";
import UserForm from "../../components/user/UserForm.jsx";

const Registration = () => {


    return (

        <div className={'flex flex-col items-center mx-auto gap-8'}>


            <UITitle>Реєстрація</UITitle>
            <UserForm type={'registration'}/>
        </div>
    );
};


export default Registration;
