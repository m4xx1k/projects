import React from 'react';
import {UITextField, UITitle, UIButton, UISelect} from "../../shared/uikit/";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSingUpMutation} from "../../redux/user/userApiSlice.js";
import  {auth} from "../../redux/user/userSlice.js";
import {UserRoles} from "../../shared/constants.js";
import UILink from "../../shared/uikit/UILink.jsx";

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
                <UITextField
                    label="ПІБ"
                    inputProps={{type: "text", ...register("fullname", {required: true})}}
                    error={errors.fullname}
                />

                <UITextField
                    label="Курс"
                    inputProps={{type: "number", ...register("course", {required: true})}}
                    error={errors.course}
                />

                <UITextField
                    label="Факультет"
                    inputProps={{type: "text", ...register("faculty", {required: true})}}
                    error={errors.faculty}
                />

                <UITextField
                    label="Спеціальність"
                    inputProps={{type: "text", ...register("specialty", {required: true})}}
                    error={errors.specialty}
                />

                <UITextField
                    label="Посилання"
                    inputProps={{type: "text", ...register("link", {required: true})}}
                    error={errors.link}
                />

                <UITextField
                    label="Про себе"
                    inputProps={{type: "text", ...register("about", {required: true})}}
                    error={errors.about}
                />

                {/*<UITextField*/}
                {/*    label="Роль"*/}
                {/*    inputProps={{type: "text", ...register("role", {required: true})}}*/}
                {/*    error={errors.role}*/}
                {/*/>*/}

                <UISelect label={'Роль'} options={UserRoles}
                          inputProps={{...register('role', {required: 'true'})}}/>


                <UITextField
                    label="Номер Телефону"
                    inputProps={{type: "phone", ...register("phone", {required: true})}}
                    error={errors.phone}
                />


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


                <UIButton disabled={isLoading} bg={'blue'}  className={'text-white px-4 py-1 rounded mx-auto mt-6'}
                        type="submit">Зареєструватись
                </UIButton>
                <UILink to={'/login'} underline>Вхід</UILink>
            </form>
        </div>
    );
};


export default Registration;
