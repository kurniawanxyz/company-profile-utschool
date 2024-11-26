"use client";
import { useLatestNews } from "@/hooks/useNews";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Img } from "../atoms";
import { News } from "@/types/news";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function NewestNewsSection() {
  const { isLoading, data } = useLatestNews() as {
    isLoading: boolean;
    data: { data: News[] } | null;
  };
  const router = useRouter();

  if (isLoading) {
    return (
      <article className="w-full lg:w-8/12 bg-white/80 px-6 sm:px-10 py-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-700 text-center">
          Berita Terbaru
        </h2>
        <div className="flex flex-col items-center justify-center h-60 sm:h-96 gap-4 ">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse w-3/4 sm:w-4/12 h-8 sm:h-12 bg-gray-200 rounded-full"
            ></div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="w-full lg:w-8/12 border bg-white/80 px-10 md:px-20 py-10">
      <h2 className="text-2xl sm:text-4xl font-bold text-slate-700 text-center">
        Berita Terbaru
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="mt-5 w-full"
      >
        <CarouselNext />
        <CarouselPrevious />
        <CarouselContent>
          {data &&
            data.data?.map((news: News, index: number) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 p-2"
              >
                <div className="bg-white rounded h-48 sm:h-60 lg:h-[500px] shadow-2xl flex flex-col justify-between relative overflow-hidden">
                  <Img
                    src={`${process.env.NEXT_PUBLIC_BACKEND}${news.thumbnail}`}
                    alt={news.title}
                    className="absolute w-full h-full object-cover"
                  />
                  <div className="w-full relative p-5 z-20 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold mt-3 line-clamp-2 sm:line-clamp-3 text-white">
                      {news.title}
                    </h3>
                  </div>
                  <div className="mt-5 relative flex justify-center z-20 items-center bottom-4 sm:bottom-8">
                    <Button
                      variant={"outline"}
                      className="text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                      onClick={() => router.push("/news/" + news.id)}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-10">
        <Button
          onClick={() => router.push("/news")}
          className="text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full"
        >
          Selengkapnya
        </Button>
      </div>
    </article>
  );
}
