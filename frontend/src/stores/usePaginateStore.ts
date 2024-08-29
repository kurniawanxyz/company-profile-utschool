
import handleFetch from "@/utils/handleFetch";
import { create } from "zustand";
type link = {
    url: string,
    label: string,
    active: boolean
}
type PaginateData = {
    current_page: number,   
    data:any,
    first_page_url: string,
    last_page_url: string,
    links: link[],
    next_page_url: string|null
    prev_page_url: string|null,
    path: string,
    total: number
}
export type usePaginateStoreType = {
    paginate: PaginateData
    fetchPaginateData: (url: string) => Promise<void>
    setPaginateData: (data: PaginateData) => void,  
}

export const usePaginateStore = create<usePaginateStoreType>((set)=>({
    paginate: {
        current_page: 1,
        data: [],
        first_page_url: '',
        links: [],
        path: '',
        total: 0,
        last_page_url: '',
        next_page_url: null,
        prev_page_url: null
    },
    fetchPaginateData: async(url:string)=>{
        const [,,data] =  await handleFetch(url,{method: "GET"},false,true)
        set({paginate:data})
    },
    setPaginateData: (data) => set({paginate:data})
}))