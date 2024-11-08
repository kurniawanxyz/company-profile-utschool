import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useNews(){
    return useQuery({
        queryKey: ['news'],
        queryFn : async() => await fetchData('/news'),
    })
}

export function useDetailNews(id: string){
    return useQuery({
        queryKey: ['news',id],
        queryFn: async() => await fetchData('/news/'+id)
    })
}

export function useTopNews(){
    return useQuery({
        queryKey: ['news-top'],
        queryFn: async() => await fetchData('/top-news')
    })
}

export function useLatestNews(){
    return useQuery({
        queryKey: ['news-short'],
        queryFn : async() => await fetchData('/news/short'),
    })
}