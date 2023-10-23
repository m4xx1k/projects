import React from 'react';
import {useController} from "react-hook-form";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {UIButton, UISelect, UITitle} from "../../shared/uikit/index.js";
import {clsx} from "clsx";
import {ProjectStatusWithAll} from "../../shared/constants.js";

const ProjectsFilter = ({onSubmit, control, register, isLoading}) => {

    return (
        <form onSubmit={onSubmit} className={'w-full flex gap-4 items-end'}>
            <div className={'w-60'}>
                <UITitle size={'sm'} align={'start'} className={'font-medium'}>К-сть учасників</UITitle>
                <RangeSliderWithController control={control} name={'participants'} min={0} max={100}/>
            </div>
            <div className={'w-60'}>
                <UITitle size={'sm'} align={'start'} className={'font-medium'}>Тривалість розробки:</UITitle>
                <RangeSliderWithController control={control} name={'developmentTime'} min={0} max={360}/>
            </div>
            <UISelect label={'Статус'} options={ProjectStatusWithAll} width={20}
                      inputProps={{...register('status', {required: 'true'})}}/>
            <UIButton disabled={isLoading} bg={'blue'} type={'submit'}>Знайти</UIButton>

        </form>
    );
};

const RangeSliderWithController = ({className, name, control, min, max, ...rest}) => {
    const {field} = useController({
        name,
        control,
    });

    const handleChange = (e, type) => {
        if (!type) {
            field.onChange(e);
        } else {

            const {value} = e.target

            const newValue = [...field.value]
            if (value >= min && value <= max) {
                if (type === 'min') {
                    newValue[0] = value
                    field.onChange(newValue)

                }
                if (type === 'max') {

                    newValue[1] = value
                    field.onChange(newValue)
                }
            }

        }
    };

    return (
        <div className={clsx(className, 'flex items-center gap-2 bg-gray-100 py-0.5 px-1 rounded')}>
            <div className={'flex items-center  gap-1 p-0.5'}>
                <input className={'text-sm w-9 py-0.5 px-1 outline-none rounded'} type="text" value={field.value[0]}
                       onChange={e => handleChange(e, 'min')}/>
                <span>-</span>
                <input className={'text-sm w-9 py-0.5 px-1 outline-none rounded'} type="text" value={field.value[1]}
                       onChange={e => handleChange(e, 'max')}/>
            </div>
            <RangeSlider
                {...field}
                value={field.value}
                onInput={handleChange}
                min={min} max={max}
                {...rest}

            />
        </div>

    );
};

export default ProjectsFilter;
