import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = {
    variant?: "default" | "outline",
    children?: ReactNode,
    className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">

export default function Button({variant = "default",children = "Click Me", className, ...rest}: Props) {

    const variants = {
        default: "px-3 py-2 bg-primary opacity-90 hover:opacity-100 shadow",
        outline: "px-3 py-2 border border-primary rounded text-primary hover:bg-primary hover:text-black transition-all duration-75",
    }

  return (
    <button className={cn(variants[variant] ,className)} {...rest}>{children}</button>
  )
}