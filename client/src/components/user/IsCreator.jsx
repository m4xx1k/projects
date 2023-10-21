import React from 'react';
import {useSelector} from "react-redux";

const IsCreator = ({children, id}) => {
    const {user} = useSelector(state => state.user)
    if (user?.role !== 'creator' || (id && id !== user?._id)) return null
    return (
        <>
            {children}
        </>
    );
};

export default IsCreator;
