import React from 'react';
import {UISkeleton, UITitle} from "../../../shared/uikit/";
import ProjectParticipantsRow from "./row.jsx";
import {useFindAllProjectParticipantsQuery} from "../../../redux/projectParticipant/projectParticipantApiSlice.js";
import {useFindOneProjectQuery} from "../../../redux/project/projectApiSlice.js";

const ProjectParticipantsList = ({id, slice}) => {
    const {data: participants, isLoading: isLoadingParticipants} = useFindAllProjectParticipantsQuery(id)
    const {data: project, isLoading: isLoadingProject} = useFindOneProjectQuery(id)
    if (isLoadingProject || isLoadingParticipants) return <UISkeleton/>
    return (
        <>
            <UITitle align={'start'}>Учасники</UITitle>

            <div className={'w-full p-4 rounded-lg bg-gray-200'}>
                <table className="w-full text-sm text-left text-gray-500  bg-gray-50">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
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
                            <ProjectParticipantsRow project={project?.project} participant={participant.userId}
                                                    key={participant._id}/>)
                    }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ProjectParticipantsList;
