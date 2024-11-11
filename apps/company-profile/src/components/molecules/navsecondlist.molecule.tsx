"use client"
import { useNavbarStore } from "@/stores"
import { navItems } from "@/utils/navItem"
import Link from "next/link"
export default function NavSecondList() {
    const {hoveredBar} = useNavbarStore()
    const navbar = navItems.find((item)=> item.label === hoveredBar)
  return (
    <ul className="flex text-white gap-5">
        {
            navbar?.items && navbar.items?.map((item,number)=>(
                <li key={`secondbar-${number}`}>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))
        }
    </ul>
  )
}
