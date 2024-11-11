"use client"

import { useRandomNews } from "@/hooks/useNews"
import { CardNews } from "../molecules"

export default function RandomNews() {
    const { data, isSuccess } = useRandomNews()
    if (isSuccess) {
        const news = data.data
        return (
            <div className="">
                <div className="flex items-center">
                    <h2 className="w-[15%] text-2xl font-bold">Berita Lainya </h2>
                    <hr  className="w-[85%]"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 gap-10 mt-10">
                    {
                        news.map((item, index)=>(
                            <CardNews news={item} key={`random-news-${index}`}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}
