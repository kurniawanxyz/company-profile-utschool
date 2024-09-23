import React from 'react'
import { Img } from '../atoms'
import { cn } from '@/utils'

type Props = {
    title: string
    showImage?: boolean
    className?: string
}

export default function SectionTitle({ title, showImage, className }: Props) {
    return (
        <div className={cn("flex items-center text-3xl justify-center gap-3 flex-col-reverse",className)}>
            <h2 className="text-center font-extrabold text-primary">{title}</h2>
            {
                showImage && <Img src="/images/logos/uts/1.png" className="w-40"/>
            }
        </div>
    )
}