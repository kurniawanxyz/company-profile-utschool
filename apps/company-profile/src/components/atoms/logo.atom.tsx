"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { HTMLAttributes } from "react"

type Props = {
    width?: number,
    height?: number,
    mode?: 'light' | 'dark',
    className?: string
} & Omit<HTMLAttributes<HTMLImageElement>, "width" | "height" | "className" | "src" | "alt">

export default function Logo({ width = 160, height = 160, mode = "dark", className = "" }: Props) {
    // const [loading, setLoading] = useState(true);
    const image = mode === "light" ? "/images/logos/2.png" : "/images/logos/1.png"
    const defaultStyle = "w-40 object-contain sticky z-50 top-0"
    return <Image className={cn(defaultStyle, className)} src={image} priority alt={"UT School"} width={width} height={height} />
}