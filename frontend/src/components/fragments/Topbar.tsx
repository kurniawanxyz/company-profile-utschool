import React from 'react'
import ToggleSidebar from '../elements/ToggleSidebar'
import { Button } from '../elements'

type Props = {}

const Topbar = (props: Props) => {
  return (
    <div className='bg-white w-full px-3 py-2 rounded shadow flex justify-between items-center'>
        <ToggleSidebar/>
        {/* <Button variants='outline' className='w-20 border-red-600 hover:bg-red-600 text-red-600'>Logout</Button> */}
        <Button variants='outline' className='w-20'>Logout</Button>

    </div>
  )
}

export default Topbar