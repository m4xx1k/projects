import React from 'react';
import {Link} from "react-router-dom";
import {clsx} from "clsx";

const UiLink = ({to = '#', children, bg = '', underline, className = ''}) => {
    return (
        <Link to={to} className={clsx(
            bg && {
                'green': 'bg-green-400',
                'red': 'bg-rose-500',
                'orange': 'bg-orange-400',
                'blue': 'bg-blue-500',
            }[bg],

            {underline} , className,'px-3 py-1 rounded text-sm')}>
            {children}
        </Link>
    );
};

export default UiLink;
