import React from 'react';
import {UIButton, UITextField, UITitle} from "../../shared/uikit/index.js";
import UILink from "../../shared/uikit/UILink.jsx";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useSingUpMutation, useUpdateUserMutation} from "../../redux/user/userApiSlice.js";
import {auth} from "../../redux/user/userSlice.js";

const UserForm = ({type = 'registration', user}) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({defaultValues: type === 'update' && user ? {...user, password: ''} : {}});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [handleSignUp, {isLoading}] = useSingUpMutation()
    const [handleUpdate, {isLoading: isUpdating}] = useUpdateUserMutation()
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
    const update = async (formData) => {
        const {data} = await handleUpdate(formData)
        console.log(data)
        if (data?.token && data?.user) {
            dispatch(auth(data))
            navigate(`/user/${data.user._id}`)
        }
    }
    const submit = async data => {
        if (type === 'registration') {
            await signUp(data)
        }
        if (type === 'update') await update(data)
    }
    return (
        <form className={'max-w-sm mx-auto flex flex-col items-center w-80'} onSubmit={handleSubmit(submit)}>
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
                inputProps={{type: "text", ...register("faculty", {required: true, min: 1})}}
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
                label={`${type === 'update' ? 'Новий' : ''} Пароль`}
                inputProps={{type: "password", ...register("password", {required: true})}}
                error={errors.password}
            />
            {
                type==='update' &&
                <UITitle size={'xs'} className={'font-light underline italic'}>*залиште поле "Новий пароль" пустим, якщо не хочете
                    його міняти</UITitle>

            }


            <UIButton disabled={isLoading} bg={'blue'} className={'text-white px-4 py-1 rounded mx-auto mt-6'}
                      type="submit">{
                {
                    'registration': 'Зареєструватись',
                    'update': 'Зберегти'
                }[type]}
            </UIButton>
            {type === 'registration' && <UILink to={'/login'} underline>Вхід</UILink>}

        </form>

    );
};

export default UserForm;
