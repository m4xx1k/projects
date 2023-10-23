import clsx from "clsx";
import {useId} from "react";

function UiSelect({
                      className,
                      error,
                      label,
                      inputProps,
                      options,
    width='full'

                  }) {
    const id = useId();

    return (
        <div className={clsx(`flex flex-col gap-1 w-${width}`,className)}>
            {label && (
                <label htmlFor={id} className="block text-sm font-bold">
                    {label}
                    {error ? <span
                        className="text-rose-400 text-sm font-light">{' '}Ви ввели некоректне значення</span> : <></>}

                </label>
            )}
            <select
                {...inputProps}
                id={id}
                className={clsx(
                    inputProps?.className,
                    "rounded border border-slate-300 focus:border-teal-600 px-1 text-sm h-7 outline-none bg-gray-100",
                )}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default UiSelect
