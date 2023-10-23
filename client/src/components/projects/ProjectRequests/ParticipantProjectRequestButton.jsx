import React from 'react';
import {
    useFindAllProjectRequestsQuery,
    useRequestParticipantRequestMutation
} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import {useSelector} from "react-redux";
import {UIButton} from "../../../shared/uikit/index.js";
import { isArray} from "../../../shared/utils.js";

const ParticipantProjectRequestButton = ({id}) => {
    const {data: requests} = useFindAllProjectRequestsQuery(id)
    const {user} = useSelector(state => state.user)
    const [request] = useRequestParticipantRequestMutation()
    const handleRequest = async () => await request({projectId: id, userId: user._id})
    if(!isArray(requests)) return null
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
