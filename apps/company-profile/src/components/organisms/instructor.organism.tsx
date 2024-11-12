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
import Autoplay from "embla-carousel-autoplay"


export default function Instructor() {
    const { isSuccess, data } = useInstructor()

    if (isSuccess) {
        const instructors = data.data
        return (
            <div className="">
                <div className="mb-10">
                    <h2 className="text-center text-2xl font-bold">Instruktur</h2>
                    <Devider className="w-40 mx-auto border-primary"/>
                </div>
                <Carousel
                    opts={{
                        align: "center"
                    }}
                    plugins={[
                        Autoplay({
                          delay: 5000,
                        })
                      ]}
                    className="w-[80%] mx-auto mb-10"
                >
                    <CarouselContent>
                        {instructors.map((item) => (
                            <CarouselItem key={item.id} className="md:basis-1/4">
                                <div className="relative w-[250px] h-[400px] rounded overflow-hidden shadow-lg">
                                    <Img src={process.env.NEXT_PUBLIC_BACKEND + item.photo} className="absolute w-full h-full brightness-75"/>
                                    <div className="absolute z-10 bottom-10 w-full flex text-white flex-col justify-center p-3">
                                        <h3 className="line-clamp-1 font-bold text-xl ">{item.name}</h3>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        )
    }

}
