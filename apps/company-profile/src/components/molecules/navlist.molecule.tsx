import React from 'react'
import NavLink from '../atoms/navlink.atom'

export default function NavList() {
  const navItems = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/about',
      label: 'About'
    },
    {
      href: '/services',
      label: 'Services'
    },
    {
      href: '/contact',
      label: 'Contact'
    }
  ]
  return (
    <ul className='flex gap-5'>
       {
        navItems.map((item, index) => (
          <NavLink key={`navigation-${index}`} href={item.href} label={item.label} />
        ))
       }
    </ul>
  )
}
