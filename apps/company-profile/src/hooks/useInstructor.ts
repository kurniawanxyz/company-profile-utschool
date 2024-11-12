import { Instructor } from "@/types/instructor";
import { ResponseJson } from "@/types/paginate";
import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useInstructor()
{
    return useQuery({
        queryKey: ["instructor"],
        queryFn: ()=> fetchData<ResponseJson<Instructor[]>>("/instructor")
    })
}