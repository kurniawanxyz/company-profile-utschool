import React, { HTMLAttributes } from 'react'
import NavLink from '../atoms/navlink.atom'
import { cn } from '@/lib/utils'
import { navItems } from '@/utils/navItem'

type Props = {
  className?: string
} & Omit<HTMLAttributes<HTMLUListElement>, 'className'>
export default function NavList(props : Props) {

  return (
    <ul className={cn("flex gap-5 text-sm",props.className)}>
       {
        navItems.map((item, index) => (
          <NavLink key={`navigation-${index}`} href={item.href} label={item.label} item={item.items} />
        ))
       }
    </ul>
  )
}
