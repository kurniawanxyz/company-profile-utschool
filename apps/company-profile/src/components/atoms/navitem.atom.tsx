import { cn } from "@/lib/utils"
import Link from "next/link"

type Props = {
    text: string,
    url: string,
    className?: string
}

export default function NavItem({text, url, className}: Props) {
  return (
    <li><Link href={url} className={cn("", className)}>{text}</Link></li>
  )
}