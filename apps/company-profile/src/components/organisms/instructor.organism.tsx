"use client"
import { useInstructor } from "@/hooks/useInstructor"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Devider, Img } from "../atoms"
// import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { useState,  } from "react"

export default function Instructor() {
    const { isSuccess, data } = useInstructor()
    const [centerIndex, setCenterIndex] = useState(0)

    // useEffect(() => {
    //     const totalItems = data?.data?.length || 0
    //     setCenterIndex(Math.floor(totalItems / 2))
    // }, [data])

    if (isSuccess) {
        const instructors = data.data
        return (
            <div>
                <div className="mb-10">
                    <h2 className="text-center text-2xl font-bold">Instruktur</h2>
                    <Devider className="w-40 mx-auto border-primary" />
                </div>
                <Carousel
                    opts={{
                        // align: "center",
                        loop: true,
                        dragFree: false,
                    }}
                    // plugins={[Autoplay({ delay: 5000 })]}
                    className="w-[80%] mx-auto mb-10"
                >
                    <CarouselContent>
                        {instructors.map((item, index) => (
                            <CarouselItem key={item.id} className="md:basis-1/4 w-[200px] h-[300px]  ">
                                <div
                                    className={cn(
                                        "relative  w-full h-full rounded  overflow-hidden shadow-lg transition-transform duration-300",
                                        index === centerIndex ? "scale-100" : "scale-75"
                                    )}
                                >
                                    <Img
                                        src={process.env.NEXT_PUBLIC_BACKEND + item.photo}
                                        className="absolute w-full h-full brightness-75"
                                    />
                                    <div className="absolute z-10 bottom-10 w-full flex text-white flex-col justify-center p-3">
                                        <h3 className="line-clamp-1 font-bold text-lg">{item.name}</h3>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div
                        onClick={() => {
                            setCenterIndex((prevIndex) =>
                                prevIndex === 0 ? instructors.length - 1 : prevIndex - 1
                            )
                        }}

                    >
                        <CarouselPrevious
                        />

                    </div>
                    <div
     onClick={() => {
                        setCenterIndex((prevIndex) =>
                            prevIndex === instructors.length - 1 ? 0 : prevIndex + 1
                        )
                    }}
>
                    <CarouselNext
                   
                    />

                    </div>
                </Carousel>
            </div>
        )
    }

    return null
}
