import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useNews(){
    return useQuery({
        queryKey: ['news'],
        queryFn : async() => await fetchData('/news'),
    })
}