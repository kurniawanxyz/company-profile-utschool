import { Navbar } from "@/components"
import { ReactNode } from "react"


type Props = {
    children: ReactNode
}

export default function NewsLayout({children}: Props) {
  return (
    <div className="bg-gray-950 min-h-screen">
        <Navbar/>
        {children}
    </div>
  )
}