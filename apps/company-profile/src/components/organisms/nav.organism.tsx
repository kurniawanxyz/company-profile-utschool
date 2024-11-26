/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Logo } from '../atoms'
import { NavList, NavSecondList } from '../molecules'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAnimate } from "framer-motion"
import { useNavbarStore } from '@/stores'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isHover, setHover } = useNavbarStore()
  const [scope, animate] = useAnimate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleHover = (data: boolean, hoveredBar: string | null) => {
    if (!data) {
      setTimeout(() => {
        setHover(data, hoveredBar)
      }, 500)
    } else {
      setHover(data, hoveredBar)
    }
  }

  useEffect(() => {
    if (scope && isHover && window.innerWidth >= 768) {
      animate(scope.current, { y: 0, opacity: 1 })
    } else if (scope && window.innerWidth >= 768) {
      animate(scope.current, { y: -150, opacity:0 })
    }
  }, [isHover, scope])

  return (
    <nav className='fixed top-0 z-50 w-full bg-white md:sticky'>
      {/* Navbar Main Content */}
      <div className='flex flex-col md:flex-row px-4 py-3 justify-between items-center gap-5 md:px-10 lg:px-20'>
        {/* Logo and Toggle Button */}
        <div className='flex justify-between w-full md:w-auto items-center'>
          <Logo className='w-32 lg:w-40' />
          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <NavList className='hidden md:flex' />
        <div
          className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:items-center gap-5 h-screen md:h-auto`}
        >
          {/* Additional Content for Mobile */}
          <NavList className='md:hidden flex flex-col w-full border' />
          <div className='flex flex-col md:flex-row gap-3 mt-3 md:mt-0'>
            <Button>Enrollment</Button>
          </div>
        </div>
      </div>

      {/* Dropdown Bar */}
      <div
        onMouseLeave={() => handleHover(false, null)}
        ref={scope}
        className='hidden md:flex w-full h-14 bg-black z-40 absolute opacity-0 justify-start items-center px-20 nav-animation'
      >
        <NavSecondList />
      </div>
    </nav>
  )
}
