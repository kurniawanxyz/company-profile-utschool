"use client"
import React from 'react'
import ToggleSidebar from '../elements/ToggleSidebar'
import { Button } from '../elements'
import handleFetch from '@/utils/handleFetch'
import Cookie from "js-cookie"
import { useRouter } from 'next/navigation'

type Props = {}

const Topbar = (props: Props) => {
  const router = useRouter()

 async function handleLogout(){
    const [status,msg,result] = await handleFetch('/admin/logout',{method:"POST"},false,true,true)
    if(status){
        Cookie.remove("token")
        router.push("/admin/login")
    }
 }

  return (
    <div className='bg-white w-full px-3 py-2 rounded shadow flex justify-between items-center'>
        <ToggleSidebar/>
        {/* <Button variants='outline' className='w-20 border-red-600 hover:bg-red-600 text-red-600'>Logout</Button> */}
        <Button onClick={handleLogout} variants='outline' className='w-20'>Logout</Button>

    </div>
  )
}

export default Topbar