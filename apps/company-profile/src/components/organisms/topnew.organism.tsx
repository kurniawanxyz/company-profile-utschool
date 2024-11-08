"use client"
import { useTopNews } from '@/hooks/useNews'
import { News } from '@/types/news'
import React from 'react'
import { Img } from '../atoms'
import { FaCalendar } from 'react-icons/fa'

export default function TopNews() {
    const {isLoading, data, isError, isSuccess} = useTopNews() as { isLoading: boolean, data: { data: News } | null, isError: boolean, isSuccess: boolean }
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
          <article className='flex shadow-md rounded'>
            <div className='w-1/3'>
                <Img className='w-full h-[60vh]' src={news?.thumbnail as string}/>
            </div>
            <div className='w-2/3 p-5 flex flex-col justify-between'>
                <div className='bg-primary w-fit px-3 py-1 rounded'>
                    <h2 className=''>Berita Terbaru</h2>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>{news?.title}</h3>
                    <p className='text-slate-600'>{news?.description}</p>
                </div>
                <div className='flex items-center gap-3 '>
                    <FaCalendar/> <p className='text-slate-600'>{news?.created_at}</p>
                </div>
            </div>
          </article>
        )
    }
}
