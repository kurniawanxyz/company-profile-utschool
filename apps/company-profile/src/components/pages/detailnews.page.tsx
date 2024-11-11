"use client"

import { useDetailNews } from "@/hooks/useNews"
import { Img } from "../atoms"
import { FaCalendarWeek } from "react-icons/fa"
import { RandomNews } from "../organisms"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import dayjs from "dayjs"

export default function DetailNewsPage({id}:{id: string}) {
    const {isLoading, isError, isSuccess, data} = useDetailNews(id)

    const router = useRouter();

    if(isLoading){
        return (
            <p>Loading {id}</p>
        )
    }
    if(isError){
        return (
            <p>Loading</p>
        )
    }
    
    if(isSuccess){
        const news = data.data
     return (
        <article className="min-h-screen">
            <header className="min-h-[50dvh] w-full bg-cover bg-center relative">
                <Img src={process.env.NEXT_PUBLIC_BACKEND+news.thumbnail} alt={news.title} className="absolute w-full h-full object-cover object-center brightness-75"/>
                <div className="absolute brightness-125 bottom-10 left-10">
                    <h1 className="text-5xl font-bold text-primary w-3/4">{news.title}</h1>
                    <p className="w-2/3 text-slate-400 mt-3">{news.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-primary">
                        <FaCalendarWeek/> <p className="text-slate-400">{dayjs(news.created_at).format("D MMMM YYYY HH:MM")}</p>
                    </div>
                </div>
            </header>
            <div className="px-40 py-20" dangerouslySetInnerHTML={{__html: news.content}}/>
            <div className="p-20">
                <RandomNews/>
                <Button className="mt-10" onClick={()=>router.back()}>Kembali</Button>
            </div>
            
        </article>
      ) 
    }
}
