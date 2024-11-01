import { cn } from "@/lib/utils"


type Props = {
    className?: string
} & Omit<React.HTMLProps<HTMLHRElement>, "className">

export default function Devider({className, ...rest}: Props) {
    const defaultStyle = "border-t-4 border-gray-300 "
  return <hr className={cn(defaultStyle, className)} {...rest}/>
}