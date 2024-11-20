import React from 'react'
import { Img } from '../atoms'

export default function ProfileUtSchool() {
    return (
        <div className='mt-10 grid md:grid-cols-2 gap-5'>
            <Img src='/images/assets/randoms/1.png' className='rounded-xl shadow-md' />
            <div className='mt-5 md:mt-0'>
                <div className='w-fit bg-primary px-5 py-3'>
                    <h2 className='text-xl'>Tentang Kami</h2>
                </div>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex distinctio iure animi repudiandae rem explicabo voluptates, laboriosam, repellat dolore blanditiis quisquam dolorum error minima eveniet. Et iusto voluptas eos dolorum laudantium nobis quod quidem itaque quos, beatae optio impedit vero, adipisci similique cum soluta. Et natus laborum omnis sint.</p>
                <div className='grid grid-cols-3 mt-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-3xl text-slate-800 font-bold'>2008</p>
                        <h3 className='text-sm'>Founded</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-3xl text-slate-800 font-bold'>1000+</p>
                        <h3 className='text-sm'>Client</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-3xl text-slate-800 font-bold'>140+</p>
                        <h3 className='text-sm'>Project Done</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
