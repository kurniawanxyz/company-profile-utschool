/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Img } from '../atoms'

export default function Fasilitas() {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])


    return (
        <article
            className='px-5 md:px-10 p-5 w-full'
        >
            <h2 className='text-2xl font-bold'>Fasilitas</h2>
            <p>Fasilitas unggulan yang digunakan untuk proses ajar mengajar yang dimiliki UT School</p>

            <Carousel 
            className='mt-8 flex items-center justify-center '
                opts={{
                    align: "center"
                }}
            setApi={setApi}>
                <CarouselContent className=''>
                    {
                        listFeatures.map((item, index)=>(
                        <CarouselItem
                            className='  md:basis-1/2 w-40'
                            key={`fitur-${index}`}
                        >
                            <div className='w-full h-40 lg:h-full relative rounded-md overflow-hidden shadow-md'>
                                <Img className='w-full absolute h-full object-cover top-0 left-0 right-0 bottom-0 z-10' src={item.image}/>
                                <h3 className='z-20 absolute bottom-8 lg:bottom-12 left-6 lg:left-8 text-lg md:text-2xl font-bold text-white'>{item.text}</h3>
                            </div>
                        </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </article>
    )
}

type Feature = {
    image: string,
    text: string
} 

const listFeatures: Feature[] = [
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
    {
        image: '/images/assets/perpustakaan.png',
        text: "Perpustakaan"
    },
]

