import { cn } from "@/lib/utils"
import { ReactNode,HTMLAttributes } from "react"

type Props = {
    children?: ReactNode,
    className?: string
} & Omit<HTMLAttributes<HTMLDivElement>, "className">

export default function Card({children, className, ...rest}: Props) {

  return (
    <article className={cn("rounded-lg shadow overflow-clip",className)} {...rest}>
        {children}
    </article>
  )
}