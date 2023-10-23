import React from 'react';
import {clsx} from "clsx";

const UiValue = ({name, value, valueWeight = 'bold', className}) => {
    return (
        <div className={clsx(className, 'w-fit flex items-center gap-1')}>
            <span className={'text-sm w-40'}>{name}:</span>
            <span className={`font-${valueWeight} text-sm`}>{value}</span>
        </div>
    );
};

export default UiValue;
