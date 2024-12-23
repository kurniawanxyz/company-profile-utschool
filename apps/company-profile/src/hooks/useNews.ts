import { News } from "@/types/news";
import { Paginate, ResponseJson } from "@/types/paginate";
import fetchData from "@/utils/fetch";
import { keepPreviousData, useQuery } from "@tanstack/react-query";



export function useNews(page: number){
    return useQuery({
        queryKey: ['news',page],
        queryFn : () => fetchData<ResponseJson<Paginate<News[]>>>('/news/?page='+page),
        placeholderData: keepPreviousData,
        retry: 2
    })
}

export function useDetailNews(id: string){
    return useQuery({
        queryKey: ['news',id],
        queryFn: () => fetchData<ResponseJson<News>>('/news/'+id),
        
    })
}

export function useRandomNews(){
    return useQuery({
        queryKey: ['random-news'],
        queryFn: () => fetchData<ResponseJson<News[]>>('/news/random')
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