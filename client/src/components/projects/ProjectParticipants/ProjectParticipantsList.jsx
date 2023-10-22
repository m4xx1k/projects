import React from 'react';
import UITitle from "../../../shared/uikit/UITitle.jsx";
import ProjectParticipantsItem from "./ProjectParticipantsItem.jsx";

const ProjectParticipantsList = ({participants, project}) => {
    if (!Array.isArray(participants)) return null
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
                    participants.map(participant => <ProjectParticipantsItem participant={participant.userId}
                                                                             key={participant._id}/>)
                }
                </tbody>
            </table>
        </>
    );
};

export default ProjectParticipantsList;
