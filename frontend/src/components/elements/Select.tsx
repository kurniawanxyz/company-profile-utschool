import { HTMLInputTypeAttribute } from 'react'
import { twMerge } from 'tailwind-merge'

export type optionSelect = {
    id: string,
    text: string
}

type Props = {
    label: string,
    name: string,
    list: optionSelect[]
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    isDirectionColoum?: boolean,
    className?: string,
    value?: string,
    defaultValue?: string
}
const Select = (props: Props) => {
  return (
<div className={`flex ${props.isDirectionColoum ? 'flex-col': 'flex-row items-center gap-3'} `}>
        <label className='text-neutral-900' htmlFor={props.label}>{props.label}</label>
        <select
            className={`${twMerge('border-slate-300 focus:border-primary outline-none border rounded px-3 py-1 mt-1 text-neutral-600',props.className)}`}
            id={props.label}
            name={props.name}
            value={props.value}
            defaultValue={props.defaultValue}
        >
            <option value="default" disabled selected >Choose {props.label}</option>
            {
            (props.list && props.list.length > 0) ? 
                props.list.map((item:optionSelect,index:number)=>(
                    <option key={`select-option-${index}`} value={item.id}>{item.text}</option>
            ))
            :
            (
                <option value="" disabled selected >Data was not found</option>
            )
            }
        </select>
    </div>
  )
}

export default Select