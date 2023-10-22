import React from 'react';
import {UITitle} from "../../../shared/uikit/";
import ProjectParticipantsItem from "./ProjectParticipantsItem.jsx";
import {useFindAllProjectParticipantsQuery} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";

const ProjectParticipantsList = ({id, slice}) => {
    const {data: participants} = useFindAllProjectParticipantsQuery(id)

    return (
        <>
            <UITitle align={'start'}>Учасники</UITitle>


            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ПІБ
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Курс
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Факультет
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Спеціальність
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Роль
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Поточне Завдання
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    Array.isArray(participants) && (participants?.slice(0, slice) ?? participants).map(participant =>
                        <ProjectParticipantsItem participant={participant.userId}
                                                 key={participant._id}/>)
                }
                </tbody>
            </table>
        </>
    );
};

export default ProjectParticipantsList;
