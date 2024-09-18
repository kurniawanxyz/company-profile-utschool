"use client"
import { HTMLInputTypeAttribute, SelectHTMLAttributes } from 'react'
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
    defaultValue?: string
} & SelectHTMLAttributes<HTMLSelectElement>
const Select = (props: Props) => {
    const {
        name,
        ...rest
    } = props
    let defaultVal;
    if(props.list){
        if(props.defaultValue){
            defaultVal = props.defaultValue 
        }
        if( props.list.length <= 0 ){
            defaultVal = "not-found"
        }
    }

    const option = props.list.map((item)=>({
        value: item.id,
        label: item.text
    }))
  return (
    <div className={`flex ${props.isDirectionColoum ? 'flex-col': 'flex-row items-center gap-3'} `}>
        <label className='text-neutral-900' htmlFor={props.label}>{props.label}</label>
        <select
            className={`${twMerge('border-slate-300 focus:border-primary outline-none border rounded px-3 py-1 mt-1 text-neutral-600',props.className)}`}
            id={props.label}
            name={props.name}
            defaultValue={defaultVal}
            {...rest}
        >
            <option value="default" disabled  >Choose {props.label}</option>
            {
            (props.list && props.list.length > 0) &&
                props.list.map((item:optionSelect,index:number)=>(
                    <option className='text-black' key={`select-option-${index}`} value={item.id}>{item.text}</option>
            ))            
            }
            {
               (props.list &&  props.list.length <= 0 )&& <option value="not-found" disabled  >Data was not found</option> 
            }
        </select>
    </div>
  )
}

export default Select