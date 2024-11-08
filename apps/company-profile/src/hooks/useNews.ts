import { News } from "@/types/news";
import { Paginate } from "@/types/paginate";
import fetchData from "@/utils/fetch";
import { keepPreviousData, useQuery } from "@tanstack/react-query";



export function useNews(page: number){
    return useQuery({
        queryKey: ['news',page],
        queryFn : async() =>{
            const response = await fetchData('/news/?page='+page)
            return response as Paginate<News[]>
        },
        placeholderData: keepPreviousData,
        retry: 2
    })
}

export function useDetailNews(id: string){
    return useQuery({
        queryKey: ['news',id],
        queryFn: () => fetchData('/news/'+id),
        
    })
}

export function useTopNews(){
    return useQuery({
        queryKey: ['news-top'],
        queryFn: () => fetchData('/top-news'),
    })
}

export function useLatestNews(){
    return useQuery({
        queryKey: ['news-short'],
        queryFn : () => fetchData('/news/short'),
    })
}