/* eslint-disable react-hooks/rules-of-hooks */
import { DirectorType } from "@/types/DirectorType"
import handleAxiosFetch from "@/utils/handleAxiosFetch"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetDirector = () =>{
    return useQuery({
        queryKey: ["director"],
        queryFn: ()=> handleAxiosFetch<DirectorType>("/director",{method:"GET"}) 
    })
} 

export const useUpdateDirector = (id: string) => {
    return useMutation({
        mutationKey: ["director"],
        mutationFn: ({data}:{data: DirectorType}) => handleAxiosFetch<null>("/admin/director/"+id,{ method: "PUT", data: data })
    })
}