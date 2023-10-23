import React from 'react';
import {useFindUserTasksQuery} from "../../../redux/user/userApiSlice.js";
import {UISkeleton, UITitle} from "../../../shared/uikit/index.js";
import UserTasksRow from "./row";
import {isArray} from "../../../shared/utils";

const UserTasksTable = ({user}) => {
    const {data: tasks, isLoading} = useFindUserTasksQuery(user._id)
    if (isLoading) return <UISkeleton/>
    return (
        <div className={'w-full'}>
            <UITitle align={'start'}>Завдання</UITitle>

            <div className={'w-full mt-1 px-4 py-2  rounded-lg bg-gray-200'}>

                <table className="w-full text-sm text-left text-gray-500 bg-gray-50">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Статус
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Важливість
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        isArray(tasks) && tasks.map(task =>
                            <UserTasksRow task={task} user={user}
                                          key={task._id}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default UserTasksTable;
