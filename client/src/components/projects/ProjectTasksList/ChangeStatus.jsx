import {useState} from "react";
import {TaskStatus} from "../../../shared/constants.js";
import {useUpdateTaskMutation} from "../../../redux/task/taskApiSlice.js";
import {clsx} from "clsx";

function ChangeStatus({id, initial,  className}) {
    const [selected, setSelected] = useState(initial)
    const [update] = useUpdateTaskMutation()
    const onChange = async e => {
        const {value:status} = e.target
        setSelected(status)
        await update({id, data:{status}})
    }
    return (
        <div className={clsx("flex flex-col gap-1 mb-1 w-fit", className)}>

            <select
                id={id}
                className={"rounded border border-slate-300 focus:border-teal-600 px-1 text-sm h-6 outline-none bg-gray-100"}
                value={selected}
                onChange={onChange}
            >
                {TaskStatus.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ChangeStatus

