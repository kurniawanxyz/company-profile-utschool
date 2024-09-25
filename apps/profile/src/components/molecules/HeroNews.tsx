"use client";

import { NewsFetcher } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../atoms";

type Props = {}

export default function HeroNews({ }: Props) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: NewsFetcher.getTopNews
    });
    if (isLoading) {
        return (
            <div className="min-h-screen w-full py-32 px-24">
                <div className="w-full h-[60vh] rounded skeleton">
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-500 text-lg">Error loading news</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full py-32 px-4 md:px-24">
            <h1 className="text-3xl font-bold">Berita Terbaru</h1>
            <div className="w-full h-[60vh] border border-slate-400 rounded relative overflow-hidden mt-5">
            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data[0].thumbnail}`} alt={data[0].title} width={2000} height={2000} className="object-cover object-center w-full h-full brightness-75" />
            <div className="absolute top-0 left-0 right-0 p-4 md:p-10">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-md">{data[0].title}</h2>
                <p className="text-white text-base md:text-lg mt-2 drop-shadow-md">{data[0].description}</p>
                <p className="text-white text-sm mt-4 drop-shadow-md">{new Date(data[0].created_at).toLocaleDateString()}</p>
            </div>
            <Button variants="default" className="absolute bottom-4 left-4 md:bottom-10 md:left-10">Baca berita</Button>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full h-[40vh] border border-slate-400 rounded relative overflow-hidden mt-5">
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data[1].thumbnail}`} alt={data[1].title} width={2000} height={2000} className="object-cover object-center w-full h-full brightness-75" />
                <div className="absolute top-0 left-0 right-0 p-4 md:p-10">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-md">{data[1].title}</h2>
                <p className="text-white text-base md:text-lg mt-2 drop-shadow-md">{data[1].description}</p>
                <p className="text-white text-sm mt-4 drop-shadow-md">{new Date(data[1].created_at).toLocaleDateString()}</p>
                </div>
                <Button variants="default" className="absolute bottom-4 left-4 md:bottom-10 md:left-10">Baca berita</Button>
            </div>
            <div className="w-full h-[40vh] border border-slate-400 rounded relative overflow-hidden mt-5">
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data[2].thumbnail}`} alt={data[2].title} width={2000} height={2000} className="object-cover object-center w-full h-full brightness-75" />
                <div className="absolute top-0 left-0 right-0 p-4 md:p-10">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-md">{data[2].title}</h2>
                <p className="text-white text-base md:text-lg mt-2 drop-shadow-md">{data[2].description}</p>
                <p className="text-white text-sm mt-4 drop-shadow-md">{new Date(data[2].created_at).toLocaleDateString()}</p>
                </div>
                <Button variants="default" className="absolute bottom-4 left-4 md:bottom-10 md:left-10">Baca berita</Button>
            </div>
            </div>
        </div>
    )
}