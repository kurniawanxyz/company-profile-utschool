import { ResponseJson } from "@/types/paginate";
import { Sosmed } from "@/types/sosmed";
import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useSosmed()
{
    return useQuery({
        queryKey: ["sosmed"],
        queryFn: ()=>fetchData<ResponseJson<Sosmed[]>>("/sosmed")
    })
}