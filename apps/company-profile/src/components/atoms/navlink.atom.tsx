import Link from 'next/link'
import React from 'react'

type Props = {
    href: string,
    label: string
}

export default function NavLink({href, label}: Props) {
  return (
        <li className=''><Link href={href}>{label}</Link></li>
    )
}