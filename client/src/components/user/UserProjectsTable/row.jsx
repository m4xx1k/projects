import React from 'react';
import {ProjectStatus} from "../../../shared/constants.js";
import {Link} from "react-router-dom";

const UserProjectsRow = ({project, user}) => {
    return (
        <tr className="border-b ">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-48">
                <Link to={`/project/${project._id}`}>
                    {project.name}
                </Link>

            </th>

            <td className="px-6 py-4">
                {project?.userId === user._id ? 'Творець' : 'Учасник'}

            </td>
            <td className="px-6 py-4">
                {ProjectStatus.find(status => project.status === status.value)?.label || '-'}


            </td>

        </tr>

    );
};

export default UserProjectsRow;

