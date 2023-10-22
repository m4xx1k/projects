import React from 'react';
import {
    useAllowParticipantRequestMutation,
    useForbidParticipantRequestMutation
} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import {UIButton, UITitle} from "../../../shared/uikit/";

const ProjectRequestsItem = ({request, project}) => {
    const [allow] = useAllowParticipantRequestMutation()
    const [forbid] = useForbidParticipantRequestMutation()
    const handleAllow = async ()=>await allow(request._id)
    const handleForbid = async ()=>await forbid(request._id)
    return (
        <div className={'flex flex-col gap-2 rounded-md bg-white w-full py-2 px-4'}>
            <UITitle align={'start'} size={'sm'}>{request.userId.fullname} хоче приєднатись до проекту "{project.name}"</UITitle>
            <div className={'flex items-center gap-4 self-start'}>
                <UIButton bg={'green'} onClick={handleAllow}>Додати до проекту</UIButton>
                <UIButton bg={'red'} onClick={handleForbid}>Відхилити запит</UIButton>
            </div>
        </div>
    );
};

export default ProjectRequestsItem;
