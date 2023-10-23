import React from 'react';
import {useSelector} from "react-redux";
import {useCheckParticipationQuery} from "../../redux/projectParticipant/projectParticipantApiSlice.js";
import {useNavigate} from "react-router-dom";

const IsParticipant = ({children, project, extra = true, goBack = false}) => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.user)
    const {data, isUninitialized, isSuccess} = useCheckParticipationQuery({projectId: project, userId: user?._id})
    if (data?.isParticipant && extra) return <>
        {children}
    </>
    if (!data?.isParticipant && !isUninitialized && isSuccess && goBack) {
        navigate(-1)
        return null
    }
    return null;
};

export default IsParticipant;
