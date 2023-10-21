import React from 'react';
import {clsx} from "clsx";

const UiTitle = ({children, size = 'lg', className, align = 'center'}) => {
    return (
        <h2 className={clsx(className,
            {
                'center': 'mx-auto',
                'start': 'self-start',
                'end': 'self-end',
            }[align],
            `font-bold w-fit text-${size}`)}>{children}</h2>

    );
};

export default UiTitle;
