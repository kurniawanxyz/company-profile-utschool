import React from 'react'
import Card from './card.molecules'
import { Button, Img, Paragraph } from '../atoms'

type Props = {}

export default function AcademicCard({}: Props) {
  return (
    <aside className=''>
        <div className="grid grid-cols-3 mt-8 w-full gap-24 ">
            <Card className='relative h-[400px] w-[300px] rounded-2xl'>
                <Img src='/images/students/1.jpg' className='absolute w-full h-full object-cover object-center top-0 left-0 right-0 bottom-0'/>
                <Button className='absolute bottom-10 left-1/2 -translate-x-1/2 text-xl px-10 py-2 rounded-full' variant="outline">Mechanic</Button>
            </Card>
            <Card className='relative h-[400px] w-[300px] rounded-2xl'>
                <Img src='/images/students/1.jpg' className='absolute w-full h-full object-cover object-center top-0 left-0 right-0 bottom-0'/>
                <Button className='absolute bottom-10 left-1/2 -translate-x-1/2 text-xl px-10 py-2 rounded-full' variant="outline">Operator</Button>
            </Card>
            <Card className='relative h-[400px] w-[300px] rounded-2xl'>
                <Img src='/images/students/1.jpg' className='absolute w-full h-full object-cover object-center top-0 left-0 right-0 bottom-0'/>
                <Button className='absolute bottom-10 left-1/2 -translate-x-1/2 text-xl px-10 py-2 rounded-full' variant="outline">Programmer</Button>
            </Card>
        </div>
            <Paragraph className='text-center mt-10 text-sm text-slate-600'>UT School memiliki 3 program akademik yaitu Mekanik Alat Berat, Operator Alat Berat, dan IT Programmer </Paragraph>
    </aside>
  )
}