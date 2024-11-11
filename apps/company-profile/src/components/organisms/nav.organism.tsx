"use client"
import { Logo } from '../atoms'
import { NavList, NavSecondList, SearchInput } from '../molecules'
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

  const handleHover = (data: boolean, hoveredBar: string|null) => {
    console.log(isHover)
    if (!data) {
      setTimeout(() => {
        setHover(data, hoveredBar)
      }, 500)
    } else {
      setHover(data, hoveredBar)
    }
  }


  useEffect(() => {
    if (scope && isHover) {
      animate(scope.current, {
        y: 0
      })
    } else {
      animate(scope.current, {
        y: -100
      })
    }
  }, [isHover, scope])


  return (
    <nav className='sticky top-0 z-50'>
      <div className='flex flex-col md:flex-row px-4 py-3 justify-between items-center gap-5 bg-white md:px-10 lg:px-20 relative z-[60]'>
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
      </div>
      <div onMouseLeave={() => handleHover(false, null)} ref={scope} className='w-full h-14 bg-black z-50 absolute flex justify-start items-center px-20'>
          <NavSecondList/>
      </div>
    </nav>
  )
}
