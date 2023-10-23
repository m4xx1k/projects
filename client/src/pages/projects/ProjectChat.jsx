import React from 'react';
import {useParams} from "react-router-dom";
import {
    useSendMessageMutation,
    useFindMessagesQuery, useFindOneProjectQuery,
} from '../../redux/project/projectApiSlice'
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {Send, User} from "react-feather";
import {UIButton, UITextField, UITitle} from "../../shared/uikit/index.js";
import {clsx} from "clsx";
import {date, isArray} from "../../shared/utils.js";
import IsParticipant from "../../components/user/IsParticipant.jsx";

const Message = ({message, user}) => {
    const isUserMessage = message.user._id === user._id
    console.log({message, user})
    const bg = isUserMessage ? 'bg-blue-200' : 'bg-gray-200'
    return <li className={clsx('px-4 py-1 rounded min-w-[240px] max-w-2xl w-fit', isUserMessage && 'self-end')}>
        <div className={clsx("flex items-center gap-2", isUserMessage && 'flex-row-reverse')}>
            <User size={36} className={clsx('p-1 rounded-full', bg)}/>
            <UITitle className={clsx('flex grow', isUserMessage ? 'justify-end ' : 'justify-start')}
                     size={'md'}>{isUserMessage ? 'Ви' : message.user.fullname}</UITitle>

        </div>
        <p className={clsx('text-sm py-1 px-2 rounded-lg mt-1', bg)}>{message.text}</p>
        {/*<div className={'underline text-sm'}>{date(message.createdAt)}</div>*/}
    </li>
}
const ProjectChat = () => {
    const {id} = useParams()
    const {data:project} = useFindOneProjectQuery(id)
    const {user} = useSelector(state => state.user)
    const {data: messages} = useFindMessagesQuery(id, {pollingInterval: 2000})
    const [sendMessage] = useSendMessageMutation()
    const {register, handleSubmit, reset} = useForm()
    const handleSend = async data => {
        await sendMessage({user: user?._id, project: id, text: data.text})
        reset()
    }
    return (
        <IsParticipant project={id} goBack={true}>
            <UITitle>Чат {project?.project.name}</UITitle>
            <div className={'bg-gray-200 p-7 rounded-lg'}>
                <ul className={'flex flex-col w-full gap-1 bg-white p-4 rounded-md  max-h-[calc(100vh-320px)] overflow-y-scroll'}>
                    {isArray(messages) && messages.map((message, i) => <Message message={message} user={user} key={i}/>
                    )}
                </ul>
                <form className={'flex items-center gap-2 mt-6'} onSubmit={handleSubmit(handleSend)}>
                    <UITextField
                        inputProps={{
                            ...register('text', {required: true}),
                            className: 'bg-gray-50 pt-7 pb-6 pl-4 text-xl rounded-xl',
                            placeholder:'Введіть ваше повідомлення'
                        }}/>
                    <UIButton bg={'green'} px={8} py={4} className={'flex items-center gap-2 rounded-xl'}>Відправити <Send/></UIButton>
                </form>
            </div>

        </IsParticipant>
    );
};

export default ProjectChat;
