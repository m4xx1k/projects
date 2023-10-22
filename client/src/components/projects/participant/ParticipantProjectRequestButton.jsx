import React from 'react';
import {useRequestParticipantRequestMutation} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import {useSelector} from "react-redux";
import UIButton from "../../../shared/uikit/UIButton";

const ParticipantProjectRequestButton = ({id, requests}) => {
    const {user} = useSelector(state => state.user)
    const [request] = useRequestParticipantRequestMutation()
    console.log(requests?.some(request=>request.userId===user._id),11)
    const handleRequest = async () => await request({projectId: id, userId: user._id})
    if(!Array.isArray(requests)) return null
    return (
        <>
            {
                !requests.some(request=>request.userId._id===user._id) ?
                    <UIButton className={'self-end'} onClick={handleRequest} bg={'green'}>
                        Приєднатись до проекту
                    </UIButton> :null
            }
        </>

    );
};

export default ParticipantProjectRequestButton;
