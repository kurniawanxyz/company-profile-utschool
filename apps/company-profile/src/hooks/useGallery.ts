import { Gallery } from "@/types/gallery";
import { Paginate, ResponseJson } from "@/types/paginate";
import fetchData from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useGallery(page: number, category_id: string ){
    return useQuery({
        queryKey: ["gallery", page, category_id],
        queryFn: ()=>fetchData<ResponseJson<Paginate<Gallery[]>>>("/gallery?page="+page+"&query="+category_id)
    })
}