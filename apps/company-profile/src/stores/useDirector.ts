import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useDirector()
{
    return useQuery({
        queryKey: ["director"],
        queryFn: ()=> fetchData("/director")
    })
}