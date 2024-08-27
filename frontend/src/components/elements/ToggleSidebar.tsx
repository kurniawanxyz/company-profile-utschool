"use client"
import { useSidebarStore } from '@/stores/useSidebarStore';
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


type Props = {}

const ToggleSidebar = (props: Props) => {
  const {isOpen,toggleSidebar} = useSidebarStore()
  return (
    <button onClick={toggleSidebar} className='text-xl text-slate-900 cursor-pointer'> 
        {
            !isOpen ? (<GiHamburgerMenu />) : (<RxCross1 />)
        }
    </button>
  )
}

export default ToggleSidebar