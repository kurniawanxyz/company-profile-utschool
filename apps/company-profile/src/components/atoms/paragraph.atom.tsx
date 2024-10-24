import { cn } from '@/lib/utils'
import {HtmlHTMLAttributes, ReactNode} from 'react'

type Props = {
  className?: string,
  children?: ReactNode,
} & Omit<HtmlHTMLAttributes<HTMLHtmlElement>, "className">

export default function Paragraph({className, children = "Ini paragraph"}: Props) {
  return <p className={cn("text-black",className)}>{children}</p>
}