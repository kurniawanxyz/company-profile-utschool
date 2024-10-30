import React from 'react'
import { Logo } from '../atoms'
import { NavList, SearchInput } from '../molecules'
import { Button } from '../ui/button'


export default function Navbar() {
  return (
    <nav className='flex px-10 py-3 justify-between items-center'>
        <Logo className='w-52'/>
        <NavList/>
        <div className='flex gap-3'>
          <SearchInput/>
          <Button>Enrollment</Button>
        </div>
    </nav>
  )
}