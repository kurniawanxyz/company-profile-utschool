import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='bg-slate-100 h-screen w-full flex justify-center'>
        <h1 className='text-primary animate-spin'>Loading</h1>
    </div>
  )
}

export default loading