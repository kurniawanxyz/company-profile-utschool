"use client"
import { Img } from '../atoms'

export default function MottoUtSchool() {
  return (
    <div className='w-full h-[400px] relative mt-20 rounded-xl overflow-hidden'>
      <Img src='/images/assets/randoms/2.png' className='absolute w-full h-full opacity-15' />
      <div className='absolute w-full h-full p-20'>
        <h2 className='text-4xl font-bold text-black'>Motto UT School</h2>
        <p className='text-lg text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem excepturi, atque maxime maiores esse non cum dicta ea dolor perferendis velit, facere ex. Harum suscipit quo modi facere quod ipsum quam quisquam accusantium, doloribus, nulla numquam aut sed quae similique quis quibusdam? Laborum, nobis harum?</p>
        <span className='text-2xl font-bold mt-10'>{"(Integritas, Santun, Ahli, Berani)"}</span>
      </div>
    </div>
  )
}
