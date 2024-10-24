import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = {
    variant?: "default" | "outline",
    children?: ReactNode,
    className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">

export default function Button({variant = "default",children = "Click Me", className, ...rest}: Props) {

    const variants = {
        default: "px-3 py-2 bg-primary opacity-90 hover:opacity-100",
        outline: "px-3 py-2 bg-primary",
    }

  return (
    <button className={cn(variants[variant] ,className)} {...rest}>{children}</button>
  )
}