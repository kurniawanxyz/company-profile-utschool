import React from 'react'

type Props = {
    label: string,
    name: string,
    value? : string,
    defaultValue?: string
}

const TextArea = (props: Props) => {
  return (
    <div className='flex flex-col '>
        <label htmlFor={props.label} className='text-slate-900'>{props.label}</label>
        <textarea value={props.value} defaultValue={props.defaultValue} className='text-slate-800 outline-none border border-slate-300 focus:border-primary px-3 py-2 rounded' name={props.name} id={props.label}></textarea>
    </div>
  )
}

export default TextArea