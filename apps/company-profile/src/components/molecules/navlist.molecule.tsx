import React, { HTMLAttributes } from 'react'
import NavLink from '../atoms/navlink.atom'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
} & Omit<HTMLAttributes<HTMLUListElement>, 'className'>
export default function NavList(props : Props) {
  const navItems = [
    {
      href: '/',
      label: 'Beranda'
    },
    {
      href: '/program',
      label: 'Program'
    },
    {
      href: '/gallery',
      label: 'Galeri'
    },
    {
      href: '/about',
      label: 'Tentang Kami'
    },
    {
      href: '/contact',
      label: 'Hubungi Kami'
    }
  ]
  return (
    <ul className={cn("flex gap-5",props.className)}>
       {
        navItems.map((item, index) => (
          <NavLink key={`navigation-${index}`} href={item.href} label={item.label} />
        ))
       }
    </ul>
  )
}
