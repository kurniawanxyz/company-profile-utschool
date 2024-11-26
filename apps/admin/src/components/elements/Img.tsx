import { cn } from '@/utils'
import Image from 'next/image'
import React, { ImgHTMLAttributes } from 'react'

type Props = {
    className?: string
    alt?: string
    width?: number
    height?: number,
    src: string
} & Omit<ImgHTMLAttributes<HTMLImageElement>,"className" | "alt" | "weight" | "height" | "src">

export default function Img({className,width=500,height=500, src,alt = "Image",...rest}: Props) {
    const defaultStyle = ""
  return <Image src={src} className={cn(defaultStyle, className)} width={width} height={height} alt={alt} {...rest} />
}
