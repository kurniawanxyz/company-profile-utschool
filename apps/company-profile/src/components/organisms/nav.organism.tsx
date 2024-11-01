"use client"
import { Logo } from '../atoms'
import { NavList, SearchInput } from '../molecules'
import { Button } from '../ui/button'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex flex-col md:flex-row px-4 py-3 justify-between items-center sticky top-0 gap-5 bg-white md:px-10 lg:px-20 z-50'>
      <div className='flex justify-between w-full md:w-auto items-center'>
        <Logo className='w-32 lg:w-40' />
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
          </button>
        </div>
      </div>
      <NavList className='hidden md:flex' />
      <div className={`flex-col md:flex-row  md:flex ${isOpen ? 'flex' : 'hidden'} md:items-center gap-5`}>
        <NavList className='md:hidden flex flex-col w-full border' />
        <div className='flex flex-col md:flex-row gap-3 mt-3 md:mt-0'>
          <SearchInput className='hidden lg:flex w-40' />
          <Button>Enrollment</Button>
        </div>
      </div>
    </nav>
  )
}
