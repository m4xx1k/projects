import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const IsAuth = ({children, id, goBack = false}) => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.user)
    if (user && (id ? user?._id === id : true)) return <>
        {children}
    </>
    if (goBack) {
        navigate(-1)
        return null
    }
    return null

};

export default IsAuth;
