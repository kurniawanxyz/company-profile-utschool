import React from 'react'
import { Img } from '../atoms'

export default function Footer() {
  return (
    <footer className='min-h-[40vh] bg-center bg-contain flex justify-between flex-col bg-slate-800/60 p-8 text-white' style={{ backgroundImage: "url('/images/assets/bg-footer.png')" }}>
      <div className='flex justify-between'>
        <div className='mb-8 w-1/2'>
          <h2 className='text-2xl font-bold mb-4'>Hubungi Kami</h2>
          <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt ab consequuntur in, maiores alias corrupti minima accusantium quae aspernatur!</p>
        </div>
        <div className='w-1/2 flex justify-between px-10'>
          <div className='mb-8'>
            <h3 className='text-lg font-bold mb-4'>Sosial Media</h3>
          </div>
          <div className='mb-8'>
            <h3 className='text-lg font-bold mb-4'>LMS Online</h3>
          </div>
          <div className='mb-8'>
            <h3 className='text-lg font-bold mb-4'>Our Partner</h3>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <Img src='/images/logos/2.png' alt='Logo' className='w-32' />
      </div>
    </footer>
  )
}
