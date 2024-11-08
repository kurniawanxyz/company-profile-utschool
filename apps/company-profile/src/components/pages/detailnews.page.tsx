"use client"

import { useDetailNews } from "@/hooks/useNews"

export default function DetailNewsPage({id}:{id: string}) {
    const {isLoading, isError, isSuccess, data} = useDetailNews(id)

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
     return (
        <article className="min-h-screen">
            <h1>{data.title}{id}</h1>
        </article>
      ) 
    }
}
