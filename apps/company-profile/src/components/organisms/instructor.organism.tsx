"use client"
import { useInstructor } from "@/hooks/useInstructor"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Devider, Img } from "../atoms"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState, } from "react"

export default function Instructor() {
    const { isSuccess, data } = useInstructor()
    const [centerIndex, setCenterIndex] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    const onSelect = useCallback(() => {
        if (!api) return
        const currentIndex = api.selectedScrollSnap()
        setCenterIndex(currentIndex)
    }, [api])

    useEffect(() => {
        if (!api) return
        api.on("select", onSelect) // Listen to the 'select' event
        onSelect() // Initialize centerIndex on mount
    }, [api, onSelect])


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
                        align: "center",

                    }}
                    setApi={setApi}
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

                    <CarouselPrevious
                    />


                    <CarouselNext

                    />

                </Carousel>
            </div>
        )
    }

    return null
}
