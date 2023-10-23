import React from 'react';
import {Loader} from "react-feather";

const UILoader = () => {
    return (
        <Loader className={'animate-spin w-fit mx-auto'} size={128}/>
    );
};

export default UILoader;
