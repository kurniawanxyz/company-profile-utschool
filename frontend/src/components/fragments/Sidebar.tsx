"use client"
import { useSidebarStore } from '@/stores/useSidebarStore'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import ToggleSidebar from '../elements/ToggleSidebar'
import { Button } from '../elements'

type Props = {}
type ListLink = {
    url: string,
    text: string
}

const Sidebar = (props: Props) => {
  const {isOpen,toggleSidebar} = useSidebarStore()
  const listLink: ListLink[] = [
    {
        url: '/admin/dashboard',
        text: 'Dashboard'
    },
    {
        url: '/admin/directors',
        text: 'Directors'
    },
    {
        url: '/admin/news',
        text: 'News'
    },
    {
        url: '/admin/galleries',
        text: 'Galleries'
    },
  ]
  const defaultStyle = 'hover:text-primary font-semibold px-3  hover:bg-slate-900 py-2 ease-in-out rounded transition-all delay-100 cursor-pointer border-slate-200'
  return (
    <>
        <div className={`w-80 h-screen bg-white shadow-sm flex flex-col ${!isOpen && 'hidden'} z-50 md:sticky fixed top-0 px-3 md:px-0 `}>
        <article className='bg-slate-900 p-6 mt-5 rounded-lg shadow'>
            <Image
                src={'/images/logo/uts/1.png'}
                alt='UT School'
                width={500}
                height={500}
            />
        </article>
        <ul className='flex flex-col text-slate-900 px-3 mt-5 gap-5'>
            {
                listLink && listLink.map((item:ListLink,index:number)=>(
                    <li key={`sidebar-${index}`} className={`${twMerge(defaultStyle,usePathname() == item.url && 'bg-slate-900 text-primary')}`}>
                        <Link href={item.url}>{item.text}</Link>
                    </li>
                ))
            }
        </ul>
        <Button onClick={toggleSidebar} variants='outline' className='mx-auto md:hidden block w-11/12 absolute bottom-10 left-1/2 -translate-x-1/2' >Close</Button>
    </div>
    <div className={`w-[100vw] h-[100vh] bg-black/40 absolute top-0 bottom-0 left-0 right-0 ${!isOpen && 'hidden'} md:hidden`}>

    </div>
    </>
  )
}


export default Sidebar