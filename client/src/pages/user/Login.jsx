import React from 'react';
import {useForm} from "react-hook-form";
import {UITextField} from "../../shared/uikit/";
import {useSingInMutation} from "../../redux/user/userApiSlice.js";
import {auth} from "../../redux/user/userSlice.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import UITitle from "../../shared/uikit/UITitle.jsx";
import UILink from "../../shared/uikit/UILink.jsx";

const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [handleSignIn, {isLoading} ] = useSingInMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signIn = async (formData) => {
        try {
            const {data} = await handleSignIn(formData)
            if (data?.token && data?.user) {
                dispatch(auth(data))
                navigate('/')
            }
        } catch (e) {
            console.log(e)
            alert("error:/")
        }
    }

    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>


            <UITitle>Вхід</UITitle>

            <form className={'max-w-sm mx-auto flex flex-col items-center w-80'} onSubmit={handleSubmit(signIn)}>
            <UITextField
                label="Пошта"
                inputProps={{type: "text", ...register("email", {required: true})}}
                error={errors.email}
            />

            <UITextField
                label="Пароль"
                inputProps={{type: "password", ...register("password", {required: true})}}
                error={errors.password}

            />
            <button disabled={isLoading} className={'bg-blue-500 text-white px-4 py-1 rounded mx-auto mt-6'} type="submit">Ввійти</button>
            <UILink to={'/registration'} underline>Реєстрація</UILink>
            </form>
        </div>
    );
};

export default Login;
