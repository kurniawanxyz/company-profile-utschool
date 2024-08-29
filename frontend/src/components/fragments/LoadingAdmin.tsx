import React from 'react'

type Props = {}

const LoadingAdmin = (props: Props) => {
  return (
    <>
        <div className="shadow bg-slate-300 w-40 h-10 rounded-lg animate-pulse"></div>
        <div className="shadow bg-slate-300 w-1/2 mt-2 h-10 rounded-lg animate-pulse"></div>
        <div className='grid grid-cols-3 border gap-5 mt-5'>
            <div className="shadow bg-slate-300 h-40 rounded-lg animate-pulse"></div>
            <div className="shadow bg-slate-300 h-40 rounded-lg animate-pulse"></div>
            <div className="shadow bg-slate-300 h-40 rounded-lg animate-pulse"></div>
        </div>
        <div className="shadow bg-slate-300 w-full h-10 rounded-lg animate-pulse mt-5"></div>
        <div className="shadow bg-slate-300 w-full h-10 rounded-lg animate-pulse mt-5"></div>
        <div className="shadow bg-slate-300 w-full h-32 rounded-lg animate-pulse mt-5"></div>

    </>
  )
}

export default LoadingAdmin