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
    type,
    className,
}:Props ) => {
  return (
    <label className={`flex ${isDirectionColoum ? 'flex-col': 'flex-row items-center gap-3'} `} htmlFor={label}>
        <span className='text-neutral-900'>{label}</span>
        <input
            className={`${twMerge('border-primary outline-none border rounded px-3 py-1 mt-1 text-neutral-600',className)}`}
            id={label}
            name={name}
            placeholder={placeholder}
            type={type??"text"}
        />
    </label>
  )
}

export default Input