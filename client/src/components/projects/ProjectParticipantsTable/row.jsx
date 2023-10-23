import React from 'react';
import {UserRoles} from "../../../shared/constants.js";
import {useFindOneProjectTaskQuery} from "../../../redux/task/taskApiSlice.js";

const ProjectParticipantsRow = ({participant, project}) => {
    const {data: task} = useFindOneProjectTaskQuery({assignedTo: participant?._id, project})

    return (
        <tr className="border-b ">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-48">
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
            <td className="px-6 py-4 whitespace-nowrap w-48">
                {task ? task?.name : '-'}

            </td>
        </tr>

    );
};

export default ProjectParticipantsRow;
