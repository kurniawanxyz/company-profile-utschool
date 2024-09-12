import cn from '@/lib/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
    children: ReactNode,
    variants?: "default" | "outline"
    className?: string  
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({className,children, variants = "default", ...rest}:Props) {
    const styleVarian = {
        "default" : `bg-primary text-black px-3 py-2 rounded font-semibold hover:bg-primary/80 hover:shadow`,
        "outline" : `bg-transparent text-primary px-3 py-2 rounded font-semibold border border-primary hover:bg-primary hover:shadow hover:text-black`
    }
    const classNames = cn(styleVarian[variants],className)
  return (
    <button className={classNames} {...rest}>{children}</button>
  )
}