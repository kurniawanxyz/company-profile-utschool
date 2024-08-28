import React, { HTMLInputTypeAttribute } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    label: string,
    name: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    isDirectionColoum?: boolean,
    className?: string
}

const Input = ({
    isDirectionColoum = true,
    label,
    name,
    placeholder,
    type = "text",
    className,
}:Props ) => {
  return (
    <div className={`flex ${isDirectionColoum ? 'flex-col': 'flex-row items-center gap-3'} `}>
        <label className='text-neutral-900' htmlFor={label}>{label}</label>
        <input
            className={`${twMerge('border-slate-300 focus:border-primary outline-none border rounded px-3 py-1 mt-1 text-neutral-600',className)}`}
            id={label}
            name={name}
            placeholder={placeholder}
            type={type}
        />
    </div>
  )
}

export default Input