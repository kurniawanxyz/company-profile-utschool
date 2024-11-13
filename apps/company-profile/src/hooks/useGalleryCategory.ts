import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useGalleryCategory(){
    return useQuery({
        queryKey: ["gallery-category"],
        queryFn : () => fetchData("/gallery-category")
    })
}