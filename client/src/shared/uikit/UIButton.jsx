import React from 'react';
import {clsx} from "clsx";

const UiButton = ({
                      onClick = () => {
                      }, children, bg = '', className = '', ...rest
                  }) => {
    return (
        <button onClick={onClick} className={clsx(bg && {
            'green': 'bg-green-400',
            'red': 'bg-rose-500',
            'orange': 'bg-orange-400',
        }[bg], 'px-3 font-bold py-1 rounded text-sm border-none outline-none', className)}
                {...rest}>
            {children}
        </button>
    );
};

export default UiButton;
