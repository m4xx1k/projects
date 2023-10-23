import React from 'react';
import {useFindOneProjectTaskQuery} from "../../../redux/task/taskApiSlice.js";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProjectParticipantsRow = ({participant, project}) => {
    const {data: task} = useFindOneProjectTaskQuery({assignedTo: participant?._id, project: project?._id})
    return (
        <tr className="border-b ">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-48">
                <Link to={`/user/${participant._id}`}>

                    {participant.fullname}
                </Link>
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
                {project?.userId === participant?._id ? 'Творець' : 'Учасник'}

            </td>
            <td className="px-6 py-4 whitespace-nowrap w-48">
                {task ? task?.name : '-'}

            </td>
        </tr>

    );
};

export default ProjectParticipantsRow;
