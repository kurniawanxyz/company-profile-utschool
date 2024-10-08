"use client"
const DeleteModal = dynamic(()=>import('@/components/fragments/DeleteModal'))
import Sidebar from '@/components/fragments/Sidebar'
import Topbar from '@/components/fragments/Topbar'
import dynamic from 'next/dynamic'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <div className='bg-slate-200 min-h-screen w-full flex'>
        <Sidebar/>
        <div className='flex flex-col px-5 py-2 w-full overflow-auto'>
            <Topbar/>
            <div className='mt-5'>
                {props.children}
            </div>
        </div>
        <DeleteModal />
    </div>
  )
}

export default layout