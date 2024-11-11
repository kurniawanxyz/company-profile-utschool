"use client"
import { News } from '@/types/news'
import React from 'react'
import { Img } from '../atoms'
import { FaCalendarWeek } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

type Props = {
    className?: string
    news: News 
}
export default function CardNews({news}: Props) {

  const router = useRouter()
  return (
    <article onClick={()=>router.push("/news/"+news.id)} className='shadow-md rounded h-[450px] cursor-pointer overflow-hidden'>
        <Img src={`${process.env.NEXT_PUBLIC_BACKEND}${news.thumbnail}`} alt={news.title} className="h-[250px] w-full object-cover" />
        <div className='p-5 flex flex-col justify-between'>
            <h3 className='text-xl font-bold line-clamp-1'>{news.title}</h3>
            <p className='text-slate-600 line-clamp-2 mt-2 '>{news.description}</p>
            <div className='flex items-center gap-2 mt-3'>
                <FaCalendarWeek/> <p className='text-slate-600'>{dayjs(news.created_at).format("D MMMM YYYY HH:MM")}</p>
            </div>
        </div>
    </article>
  )
}