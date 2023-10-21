import React from 'react';
import {UiTextField} from "../../shared/uikit/UITextField/TextField.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSingUpMutation} from "../../redux/user/userApiSlice.js";
import UserSlice, {auth} from "../../redux/user/userSlice.js";
import {UiSelect} from "../../shared/uikit/UISelect.jsx";
import {ProjectStatus, UserRoles} from "../../shared/constants.js";
import IsCreator from "../../components/user/IsCreator.jsx";
import UILink from "../../shared/uikit/UILink.jsx";
import UiButton from "../../shared/uikit/UIButton.jsx";
import UITitle from "../../shared/uikit/UITitle.jsx";

const Registration = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [handleSignUp, {isLoading}] = useSingUpMutation()
    const signUp = async (formData) => {
        try {
            const {data} = await handleSignUp(formData)
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


            <UITitle>Реєстрація</UITitle>

        <form className={'max-w-sm mx-auto flex flex-col items-center w-80'} onSubmit={handleSubmit(signUp)}>
            <UiTextField
                label="ПІБ"
                inputProps={{type: "text", ...register("fullname", {required: true})}}
                error={errors.fullname}
            />

            <UiTextField
                label="Курс"
                inputProps={{type: "number", ...register("course", {required: true})}}
                error={errors.course}
            />

            <UiTextField
                label="Факультет"
                inputProps={{type: "text", ...register("faculty", {required: true})}}
                error={errors.faculty}
            />

            <UiTextField
                label="Спеціальність"
                inputProps={{type: "text", ...register("specialty", {required: true})}}
                error={errors.specialty}
            />

            <UiTextField
                label="Посилання"
                inputProps={{type: "text", ...register("link", {required: true})}}
                error={errors.link}
            />

            <UiTextField
                label="Про себе"
                inputProps={{type: "text", ...register("about", {required: true})}}
                error={errors.about}
            />

            {/*<UiTextField*/}
            {/*    label="Роль"*/}
            {/*    inputProps={{type: "text", ...register("role", {required: true})}}*/}
            {/*    error={errors.role}*/}
            {/*/>*/}

            <UiSelect label={'Роль'} options={UserRoles}
                      inputProps={{...register('role', {required: 'true'})}}/>


            <UiTextField
                label="Номер Телефону"
                inputProps={{type: "phone", ...register("phone", {required: true})}}
                error={errors.phone}
            />


            <UiTextField
                label="Пошта"
                inputProps={{type: "text", ...register("email", {required: true})}}
                error={errors.email}
            />
            <UiTextField
                label="Пароль"
                inputProps={{type: "password", ...register("password", {required: true})}}
                error={errors.password}
            />


            <button disabled={isLoading} className={'bg-blue-500 text-white px-4 py-1 rounded mx-auto mt-6'}
                    type="submit">Зареєструватись
            </button>
            {/*{errorMessage && <div className={'text-rose-500'}>{errorMessage}</div>}*/}
        </form>
        </div>
    );
};


export default Registration;
