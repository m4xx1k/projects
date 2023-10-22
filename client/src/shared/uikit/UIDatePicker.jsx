import React, {useState, useEffect} from "react";
import {useController} from "react-hook-form";
import DateTimePicker from "react-date-picker";
import clsx from "clsx";
import {useId} from "react";
import {Calendar} from 'react-feather'

const UIDatePicker = ({
                          className,
                          error,
                          label,
                          name, control, required
                      }) => {
    const id = useId();
    const {
        field,
        // fieldState: {invalid, isTouched, isDirty},
        // formState: {touchedFields, dirtyFields}
    } = useController({
        name,
        control,
        rules: {required}
    });

    return (
        <div className={clsx(className, "flex flex-col gap-1 mb-1 w-full")}>
            {label && (
                <label htmlFor={id} className="block text-sm font-bold">
                    {label}
                    {error ? <span
                        className="text-rose-400 text-sm font-light">{' '}Ви ввели некоректне значення</span> : <></>}

                </label>
            )}
            <DateTimePicker
                value={field.value}
                onChange={field.onChange}
                name={field.name}
                style={{
                    background:' rgb(243, 244, 246)',
                    border:'none',
                    borderRadius:4
                }}
                className={'border-none outline-none rounded bg-gray-100'}
                calendarIcon={<Calendar/>}

                minDate={new Date()}
            />
        </div>
    );
};

export default UIDatePicker;
