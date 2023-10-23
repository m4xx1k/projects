import React from 'react';
import {useFindFilteredTaskQuery} from "../../../redux/task/taskApiSlice.js";
import ProjectTasksRow from "./row.jsx";
import {UITitle} from "../../../shared/uikit/index.js";
import {isArray} from "../../../shared/utils.js";

const ProjectTaskList = ({id, slice}) => {
    const {data: tasks} = useFindFilteredTaskQuery({project: id})
    if (!isArray(tasks)) return null
    return (
        // <div>
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
                            Виконавець
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
                        isArray(tasks) && (tasks?.slice(0, slice) ?? tasks).map(task =>
                            <ProjectTasksRow task={task}
                                             key={task._id}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )
        ;
};

export default ProjectTaskList;
