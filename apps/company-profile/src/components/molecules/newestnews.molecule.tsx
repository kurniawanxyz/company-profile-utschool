"use client"
import { useLatestNews } from '@/hooks/useNews'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Img } from '../atoms'
import { News } from '@/types/news'
import { Button } from '../ui/button'

export default function NewestNewsSection() {

  const {isLoading, data} = useLatestNews() as { isLoading: boolean, data: { data: News[] } | null }

  if(isLoading){
    return (
      <article className="w-8/12 border bg-white/80 px-10 py-10">
        <h2 className="text-4xl font-bold text-slate-700 text-center">Berita Terbaru</h2>
        <div className="flex flex-col items-center justify-center h-96">
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
        </div>
      </article>
    )
  }

  return (
    <article className="w-8/12 border bg-white/80 px-20 py-10">
      <h2 className="text-4xl font-bold text-slate-700 text-center">Berita Terbaru</h2>
        <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          })
        ]}
        className='mt-5'>
          <CarouselNext/>
          <CarouselPrevious/>
          <CarouselContent>
            {
              data && data.data?.map((news: News, index:number) => (
                <CarouselItem className="basis-1/2" key={index}>
                  <div className='bg-white p-5 rounded h-80 shadow-md'>
                    <Img src={`${process.env.NEXT_PUBLIC_BACKEND}${news.thumbnail}`} alt={news.title} className="h-56 object-cover"/>
                    <h3 className='text-lg font-semibold '>{news.title}</h3>
                    <p className='text-slate-600'>{news.description.length > 200 ? `${news.description.substring(0, 200)}...` : news.description}</p>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>    
        </Carousel>
        <div className='flex justify-center mt-10'>
          <Button className='rounded-full'>Selengkapnya</Button>
        </div>
    </article>

)
}
