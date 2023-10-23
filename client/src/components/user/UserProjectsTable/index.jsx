import React from 'react';
import {
    useFindUserProjectsQuery
} from "../../../redux/user/userApiSlice.js";
import {UISkeleton, UITitle} from "../../../shared/uikit/index.js";
import {isArray} from "../../../shared/utils.js";
import UserProjectsRow from "./row.jsx";

const UserProjectsTable = ({user}) => {
    const {data: projects, isLoading} = useFindUserProjectsQuery(user?._id)
    if (isLoading) return <UISkeleton/>
    if (!isArray(projects)) return null
    return (
        <div className={'w-full'}>
            <UITitle align={'start'}>Участь у проектах</UITitle>

            <div className={'w-full mt-1 px-4 py-2  rounded-lg bg-gray-200'}>

                <table className="w-full text-sm text-left text-gray-500 bg-gray-50">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Роль у проекті
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Статус
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map(project =>
                            <UserProjectsRow project={project.projectId} user={user}
                                             key={project.projectId._id}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )
        ;
};

export default UserProjectsTable;

