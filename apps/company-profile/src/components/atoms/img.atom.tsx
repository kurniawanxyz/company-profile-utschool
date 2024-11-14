/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ImgHTMLAttributes } from 'react'

type Props = {
    src: string,
    width?: number,
    height?: number,
    alt?: string,
    className?: string,
    quality?: number,
    external?: boolean,
    ref?: any
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height" | "alt" | "className">

export default function Img({src, width = 500, height = 500, alt = "UTS",className, quality = 75, ref ,...rest}: Props) {
    const defaultStyle = "object-cover"

      return <Image ref={ref} src={src} width={width} height={height} alt={alt} className={cn(defaultStyle,className)} quality={quality} {...rest}/>
}