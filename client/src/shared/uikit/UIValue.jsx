import React from 'react';
import {clsx} from "clsx";

const UiValue = ({name, value, className}) => {
    return (
        <div className={clsx(className, 'w-fit flex items-center gap-1')}>
            <span className={'text-sm'}>{name}:</span>
            <span className={'font-bold text-sm'}>{value}</span>
        </div>
    );
};

export default UiValue;
