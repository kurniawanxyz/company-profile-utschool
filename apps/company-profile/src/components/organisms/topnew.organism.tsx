"use client"
import { useTopNews } from '@/hooks/useNews'
import { News } from '@/types/news'
import React from 'react'
import { Img } from '../atoms'
import { FaCalendar } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

export default function TopNews() {
    const {isLoading, data, isError, isSuccess} = useTopNews() as { isLoading: boolean, data: { data: News } | null, isError: boolean, isSuccess: boolean }
    const router = useRouter();

    if(isLoading){
        return (
            <article>
                loading
            </article>
        )
    }

    if(isError){
        return(
            <article>

            </article>
        )
    }
    if (isSuccess){
        const news = data?.data
        return (
          <article onClick={()=>router.push('/news/' + news?.id)} className='flex shadow-md rounded cursor-pointer flex-col md:flex-row'>
            <div className='w-full md:w-1/3'>
            <Img src={`${process.env.NEXT_PUBLIC_BACKEND}${news?.thumbnail}`} alt={news?.title} className="h-[200px] md:h-[400px] w-full object-cover" />
            </div>
            <div className='w-full md:w-2/3 p-5 flex flex-col justify-between'>
                <div className='bg-primary w-fit px-3 py-1 rounded'>
                    <h2 className=''>Berita Terbaru</h2>
                </div>
                <div>
                    <h3 className='text-lg md:text-3xl font-bold mt-3'>{news?.title}</h3>
                    <p className='text-slate-600 mt-3'>{news?.description}</p>
                </div>
                <div className='flex items-center gap-3 mt-3 text-sm'>
                    <FaCalendar/> <p className='text-slate-600'>{dayjs(news?.created_at).format("D MMMM YYYY HH:MM")}</p>
                </div>
            </div>
          </article>
        )
    }
}
