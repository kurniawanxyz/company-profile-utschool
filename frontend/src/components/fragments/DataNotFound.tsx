import React from 'react'
import Card from '../elements/Card'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

type Props = {
    className?: string
}

const DataNotFound = (props: Props) => {
  return (
    <Card className={`${twMerge('w-full flex flex-col justify-center items-center',props.className)}`}>
        <Image src={'/images/illustration/404.png'} alt='Not Found' width={400} height={400}/>
        <h2 className='text-slate-900 text-2xl font-bold'>Data was not found</h2>
    </Card>
  )
}

export default DataNotFound