import React from 'react';
import {UIButton, UITitle, UIValue} from "../../../shared/uikit/index.js";
import {TaskUrgency, TaskComplexity, TaskStatus} from "../../../shared/constants.js";
import {date} from "../../../shared/utils.js";
import IsAuth from "../../user/IsAuth.jsx";
import {
    useAssignTaskMutation,
    useDeclineTaskMutation,
    useDeleteTaskMutation
} from "../../../redux/task/taskApiSlice.js";
import ChangeStatus from "./ChangeStatus.jsx";

const ProjectTasksItem = ({task, user, usersTask, isParticipant, isCreator}) => {
    const isUsersTask = usersTask?._id === task?._id
    const canAssign = isParticipant && !usersTask && !task.assignedTo
    const canDecline = isParticipant && !isUsersTask
    // console.log(task.name, usersTask, task.assignedTo)
    const [deleteTask] = useDeleteTaskMutation()
    const [declineTask] = useDeclineTaskMutation()
    const [assignTask] = useAssignTaskMutation()
    const handleDelete = async () => await deleteTask(task._id)
    const handleAssign = async () => await assignTask({user, task: task._id})
    const handleDecline = async () => await declineTask({user, project: task.project, task: task._id})
    return (
        <li className={'p-4 flex flex-col bg-gray-50 rounded '}>
            <UITitle align={'start'} size={'lg'} className={'font-semibold'}>{task.name}</UITitle>
            <section className={'w-full flex justify-between mt-2 mb-4'}>
                <div className={'flex flex-col gap-2 w-1/3'}>
                    <UIValue valueWeight={'medium'} name={'Виконавець'}
                             value={task.assignedTo?.fullname || '-'}/>

                    <UIValue valueWeight={'medium'} name={'Статус'}
                             value={!isUsersTask ? TaskStatus.find(({value}) => value === task.status)?.label :
                                 <ChangeStatus className={'self-start'} id={task._id} label={'Змінити Статус'}
                                               initial={task.status}/>}/>

                    <UIValue valueWeight={'medium'} name={'Важливість'}
                             value={TaskUrgency.find(({value}) => value === task.urgency)?.label}/>

                    <UIValue valueWeight={'medium'} name={'Складність'}
                             value={TaskComplexity.find(({value}) => value === task.complexity)?.label}/>


                    <UIValue valueWeight={'medium'} name={'Дата Створення'}
                             value={date(task?.createdAt) || '-'}/>
                    <UIValue valueWeight={'medium'} name={'Дедлайн'} value={date(task.deadline) || '-'}/>
                </div>
                <p className={'w-2/3 text-sm'}>{task?.description}</p>
            </section>
            <IsAuth>

                <section className={'self-end flex gap-2'}>
                    {isCreator &&
                        <UIButton onClick={handleDelete} bg={'red'}>Видалити Завдання</UIButton>}
                    {canAssign &&
                        <UIButton onClick={handleAssign} bg={'blue'}>Обрати Завдання</UIButton>}
                    {canDecline &&
                        <UIButton onClick={handleDecline}
                                  bg={'orange'}>Відкласти
                            Завдання</UIButton>}

                </section>
            </IsAuth>
        </li>
    );
};

export default ProjectTasksItem;
