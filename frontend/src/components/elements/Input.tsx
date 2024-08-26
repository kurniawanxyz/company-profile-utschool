import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
    label: string,
    name: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    isDirectionColoum?: boolean,
    onChange?: (e:React.ChangeEvent) => void
}

const Input = ({
    isDirectionColoum = true,
    label,
    name,
    placeholder,
    type,
    onChange
}:Props ) => {
 const isChange:boolean = onChange != null
 function handleOnchange(e: React.ChangeEvent){
   
 }
  return (
    <label className={`flex ${isDirectionColoum ? 'flex-col': 'flex-row items-center gap-3'} `} htmlFor={label}>
        <span className='text-neutral-900'>{label}</span>
        <input
            
            className='border-primary outline-none border rounded px-3 py-1 mt-1 text-neutral-600'
            id={label}
            name={name}
            placeholder={placeholder}
            type={type??"text"}
        />
    </label>
  )
}

export default Input