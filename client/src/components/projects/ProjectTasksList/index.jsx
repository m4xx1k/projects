import React from 'react';
import {
    useFindFullProjectTasksQuery
} from "../../../redux/task/taskApiSlice.js";
import {UISkeleton, UITitle} from "../../../shared/uikit/index.js";
import Item from "./item";
import {useSelector} from "react-redux";
import {Loader} from "react-feather";

const ProjectTasksList = ({id, creator, filter}) => {
    const {user} = useSelector(state => state.user)
    const {data, isSuccess, isLoading} = useFindFullProjectTasksQuery({user: user?._id, project: id, creator, filter})
    if (isLoading) return <UISkeleton/>

    return (
        <>
            {
                isSuccess && data && (
                    <>
                        <UITitle align={'start'} size={'2xl'}>Завдання</UITitle>
                        <ul className="flex flex-col w-full list-none gap-4 p-8 bg-gray-300 rounded-lg">
                            {data.tasks[data.isParticipant ? 'notDeclined' : 'all'].map(task => <Item key={task._id}
                                                                                                      user={user?._id}
                                                                                                      task={task}
                                                                                                      isCreator={data.isCreator}
                                                                                                      isParticipant={data.isParticipant}
                                                                                                      usersTask={data.usersTask}/>)}
                        </ul>
                        <div className={'flex items-center self-start gap-1'}>
                            <UITitle align={'start'}>Відкладені: </UITitle>
                            <span>{data.tasks.declined.map(({task}) => task.name).join(', ')}</span>
                        </div>
                    </>
                )
            }
            {isLoading && <Loader className={'animate-spin'}/>}

        </>
    );
};

export default ProjectTasksList;
