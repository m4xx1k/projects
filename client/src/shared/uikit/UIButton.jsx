import React from 'react';
import {clsx} from "clsx";

const UiButton = ({
                      onClick = () => {
                      }, children, bg = '', className = '',py=1,px=3, ...rest
                  }) => {
    return (
        <button onClick={onClick} className={clsx(bg && {
            'green': 'bg-green-400',
            'red': 'bg-rose-500',
            'orange': 'bg-orange-400',
            'blue': 'bg-blue-500',
        }[bg], `px-${px} font-bold py-${py} rounded text-sm border-none outline-none`, className)}
                {...rest}>
            {children}
        </button>
    );
};

export default UiButton;
