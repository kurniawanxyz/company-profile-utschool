import { cn } from "@/lib/utils"
import { ReactNode, HtmlHTMLAttributes } from "react"

type Props = {
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    children?: ReactNode,
    className?: string
} & HtmlHTMLAttributes<HTMLHeadingElement>

export default function Heading({type = "h1", children = "Ini heading", className, ...rest }: Props) {
  
    const style = "text-2xl text-white font-bold"

    if (type === "h1"){
        return <h1 className={cn(style, className)} {...rest}>{children}</h1>
    }

    if (type === "h2"){
        return <h2 className={cn(style, className)} {...rest}>{children}</h2>
    }

    if (type === "h3"){
        return <h3 className={cn(style, className)} {...rest}>{children}</h3>
    }

    if (type === "h4"){
        return <h4 className={cn(style, className)} {...rest}>{children}</h4>
    }

    if (type === "h5"){
        return <h5 className={cn(style, className)} {...rest}>{children}</h5>
    }

    if (type === "h6"){
        return <h6 className={cn(style, className)} {...rest}>{children}</h6>
    }

}