import React from 'react';
import {useSelector} from "react-redux";

const IsParticipant = ({children, id}) => {
    const {user} = useSelector(state => state.user)
    if (user?.role !== 'participant' || (id && id !== user?._id)) return null
    return (
        <>
            {children}
        </>
    );
};

export default IsParticipant;
