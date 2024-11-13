"use client"
import { useLatestNews } from '@/hooks/useNews'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Img } from '../atoms'
import { News } from '@/types/news'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function NewestNewsSection() {

  const { isLoading, data } = useLatestNews() as { isLoading: boolean, data: { data: News[] } | null }
  const router = useRouter()
  if (isLoading) {
    return (
      <article className="w-8/12  bg-white/80 px-10 py-10">
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
        <CarouselNext />
        <CarouselPrevious />
        <CarouselContent>
          {
            data && data.data?.map((news: News, index: number) => (
              <CarouselItem key={index} className='basis-1/2'>
                {/* <div className='bg-white p-5 rounded h-[500px] shadow-2xl flex flex-col justify-between'>
                  <div className='w-full'>
                    <Img src={`${process.env.NEXT_PUBLIC_BACKEND}${news.thumbnail}`} alt={news.title} className="h-[250px] w-full object-cover" />
                    <h3 className='text-xl font-semibold mt-3 line-clamp-2'>{news.title}</h3>
                    <span className='text-slate-600 w-full break-words whitespace-normal line-clamp-3'>{news.description}</span>
                  </div>
                  <div className='mt-5'>
                    <Button onClick={()=> router.push("/news/" + news.id)}>Detail</Button>
                  </div>
                </div> */}

                <div className='bg-white rounded h-[500px] shadow-2xl flex flex-col justify-between relative overflow-hidden'>
                  <Img src={`${process.env.NEXT_PUBLIC_BACKEND}${news.thumbnail}`} alt={news.title} className="absolute w-full h-full object-cover" />
                  <div className='w-full relative p-5 z-20'>
                    <h3 className='text-xl font-semibold mt-3 line-clamp-3'>{news.title}</h3>
                  </div>
                  <div className='mt-5 relative flex justify-center z-20 items-center bottom-10'>
                    <Button variant={"outline"} className='text-lg px-5 py-5  rounded-full'>Read More</Button>
                  </div>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
      <div className='flex justify-center mt-10'>
        <Button onClick={()=> router.push("/news")} className='rounded-full'>Selengkapnya</Button>
      </div>
    </article>

  )
}
