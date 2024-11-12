import { Alumni } from "@/types/alumni";
import { ResponseJson } from "@/types/paginate";
import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useAlumni()
{
    return useQuery({
        queryKey: ["alumni"],
        queryFn: ()=> fetchData<ResponseJson<Alumni[]>>("/alumni")
    })
}