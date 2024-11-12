import React from 'react'
import { Devider } from '../atoms'
import DetailDirector from './detaildirector.organism'
import Instructor from './instructor.organism'

export default function Sambutan() {
  return (
    <article className='min-h-[100vh]'>
        <div className='flex flex-col justify-center items-center p-20'>
            <h2 className='text-2xl font-bold uppercase'>Sambutan</h2>
            <Devider width={200} className='border-primary'/>
        </div>
      <DetailDirector/>
      <Instructor/>
    </article>
  )
}
