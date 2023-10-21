import React from 'react';
import {useSelector} from "react-redux";

const IsAuth = ({children}) => {
    const {user} = useSelector(state => state.user)
    if (!user) return null
    return (
        <>
            {children}
        </>
    );
};

export default IsAuth;
