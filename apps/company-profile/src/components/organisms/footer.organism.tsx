import React from 'react'
import { Img } from '../atoms'

export default function Footer() {
  return (
    <footer className='min-h-[40vh] bg-center bg-contain flex justify-between flex-col bg-slate-800/60 text-white' 
            style={{ backgroundImage: "url('/images/assets/bg-footer.png')" }}>
      {/* Main Content Container */}
      <div className='flex flex-col md:flex-row justify-between p-10'>
        {/* Contact Section */}
        <div className='mb-8 w-full md:w-1/2'>
          <h2 className='text-xl md:text-2xl font-bold mb-4'>Hubungi Kami</h2>
          <p className='w-full md:w-2/3 text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt ab consequuntur in, maiores alias corrupti minima accusantium quae aspernatur!
          </p>
        </div>

        {/* Links Section */}
        <div className='w-full md:w-1/2'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 md:px-10'>
            {/* Social Media */}
            <div className='mb-6 md:mb-8'>
              <h3 className='text-base md:text-lg font-bold mb-2 md:mb-4'>Sosial Media</h3>
            </div>
            
            {/* LMS Online */}
            <div className='mb-6 md:mb-8'>
              <h3 className='text-base md:text-lg font-bold mb-2 md:mb-4'>LMS Online</h3>
            </div>
            
            {/* Partner */}
            <div className='mb-6 md:mb-8'>
              <h3 className='text-base md:text-lg font-bold mb-2 md:mb-4'>Our Partner</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Container */}
      <div className='w-full flex justify-center mt-4 md:mt-0 bg-black/90 p-2'>
        <Img src='/images/logos/2.png' alt='Logo' className='w-14 md:w-32 object-cover' />
      </div>
    </footer>
  )
}