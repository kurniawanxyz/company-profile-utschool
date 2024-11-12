"use client"

import { useAlumni } from "@/hooks/useAlumni"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { } from "../ui/card"
import { Img } from "../atoms"

export default function AlumniSection() {
  const { data, isSuccess } = useAlumni()

  if (isSuccess) {
    const alumni = data.data
    return (
      <div>
        <Carousel className="w-full max-w-sm ">
          <CarouselContent>
            {alumni.map((item) => (
              <CarouselItem className="basis-1/2" key={item.id}>
                <div>
                  <div className="px-1">
                    <Img src="/images/assets/alumni.png" className="" />

                  </div>
                  <div className="bg-primary rounded px-2 py-2 border border-black mb-2">
                    <h3 className="text-sm text-center font-semibold">{item.name}</h3>
                    <p className="text-xs line-clamp-1 text-center">{item.placement}</p>
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