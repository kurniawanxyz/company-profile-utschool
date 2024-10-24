import type { NavItem as NavItemType } from '@/types'
import React from 'react'
import { NavItem } from '../atoms'
import { cn } from '@/lib/utils'

type Props = {
    className?: string,
    navItem: NavItemType[]
}

export default function NavList({className,navItem}: Props) {
  return (
    <ul className={cn("flex gap-5", className)}>
        {
            navItem && navItem.map((item: NavItemType, index: number)=>(
                <NavItem text={item.text} url={item.url} key={`navigation-${item.url}-${index}`}/>
            ))
        }
    </ul>
  )
}