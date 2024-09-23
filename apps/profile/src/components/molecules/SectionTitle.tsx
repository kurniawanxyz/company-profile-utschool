import React from 'react'
import { Img } from '../atoms'
import { cn } from '@/utils'

type Props = {
    title: string
    showImage?: boolean
    className?: string
    description?: string
}

export default function SectionTitle({ title, showImage, className, description }: Props) {
    return (
        <>
            <div className={cn("flex items-center text-3xl justify-center gap-3 flex-col-reverse",className)}>
                <h2 className="text-center font-extrabold text-primary">{title}</h2>
                {
                    showImage && <Img src="/images/logos/uts/1.png" className="w-40"/>
                }
            </div>
            <p className='text-center md:w-2/3 mx-auto mt-3'>{description??"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}</p>
        </>
    )
}