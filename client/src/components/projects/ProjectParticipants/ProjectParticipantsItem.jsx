import React from 'react';
import {UserRoles} from "../../../shared/constants.js";

const ProjectParticipantsItem = ({participant}) => {
    return (
        <tr className="bg-white border-b ">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {participant.fullname}
            </th>
            <td className="px-6 py-4">
                {participant.course}

            </td>
            <td className="px-6 py-4">
                {participant.faculty}

            </td>
            <td className="px-6 py-4">
                {participant.specialty}

            </td>
            <td className="px-6 py-4">
                {UserRoles.find(role => role.value === participant.role)?.label}

            </td>
            <td className="px-6 py-4">
                -

            </td>
        </tr>

    );
};

export default ProjectParticipantsItem;
