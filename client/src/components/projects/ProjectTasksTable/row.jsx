import React from 'react';
import {TaskStatus, TaskUrgency} from "../../../shared/constants.js";

const ProjectTasksRow = ({task}) => {
    return (
        <tr className="border-b">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {task.name}
            </th>
            <td className="px-6 py-4 truncate w-40">
                {task.assignedTo?.fullname || '-'}

            </td>
            <td className="px-6 py-4">
                {TaskStatus.find(status => task.status === status.value)?.label || '-'}

            </td>
            <td className="px-6 py-4">
                {TaskUrgency.find(urgency => task.urgency === urgency.value)?.label || '-'}

            </td>

        </tr>

    );
};

export default ProjectTasksRow;
