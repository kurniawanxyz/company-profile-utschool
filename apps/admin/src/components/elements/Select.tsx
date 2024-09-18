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
        list,
        defaultValue,
        isDirectionColoum,
        className,
        label,
        ...rest
    } = props

    // Inisialisasi defaultVal
    let defaultVal = defaultValue || "default"; // Set ke "default" jika defaultValue tidak ada
    
    if (list && list.length <= 0) {
        defaultVal = "not-found"; // Atur ke "not-found" jika daftar kosong
    }

    return (
        <div className={`flex ${isDirectionColoum ? 'flex-col': 'flex-row items-center gap-3'}`}>
            <label className='text-neutral-900' htmlFor={label}>{label}</label>
            <select
                className={twMerge('border-slate-300 focus:border-primary outline-none border rounded px-3 py-1 mt-1 text-neutral-600', className)}
                id={label}
                name={name}
                defaultValue={defaultVal}
                {...rest} // Spread operator harus tetap, tapi hati-hati dengan konflik properti
            >
                {/* Opsi default */}
                <option value="default" disabled>Choose {label}</option>

                {/* Render opsi dari list */}
                {list && list.length > 0 && list.map((item: optionSelect) => (
                    <option className='text-black' key={item.id} value={item.id}>{item.text}</option>
                ))}

                {/* Opsi "not found" jika list kosong */}
                {list && list.length <= 0 && <option value="not-found" disabled>Data was not found</option>}
            </select>
        </div>
    )
}

export default Select
