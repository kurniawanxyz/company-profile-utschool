import React from 'react'
import { ListNews, TopNews } from '../organisms'

export default function NewsPage() {
  return (
    <div className='min-h-screen'>
        <header 
        style={{
            backgroundImage: "url('/images/assets/background.JPG')"
        }}
        className='min-h-[40vh] w-full bg-center bg-cover relative p-20'
        >
            <div className='bg-black/50 absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
            </div>
            <div className='bottom-20 absolute z-20'>
                <h1 className='text-4xl text-white font-bold'>Berita</h1>
                <p className='w-2/3 text-slate-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo numquam quod vero architecto, non ea fuga perferendis nam expedita!</p>
            </div>
        </header>
        <div className='p-20'>
            <TopNews/>
            <ListNews/>
        </div>
    </div>
  )
}
