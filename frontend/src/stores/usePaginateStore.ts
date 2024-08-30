
import { getDirectors } from "@/actions/DirectorAction";
import handleFetch from "@/utils/handleFetch";
import { create } from "zustand";


export type linkPaginate = {
    url: string|null,
    label: string,
    active: boolean
}

export type PaginateData = {
    current_page: number,   
    data:any,
    first_page_url: string,
    last_page_url: string,
    links: linkPaginate[],
    next_page_url: string|null
    prev_page_url: string|null,
    path: string,
    total: number
}
export type usePaginateStoreType = {
    paginate: PaginateData
    fetchPaginateData: (url: string) => Promise<void>
    setPaginateData: (url: string|null) => void,  
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
        const [,,data] =  await handleFetch(url,{method:"GET"},false,true)
        set({paginate:data})
    },
    setPaginateData: async(url:string|null)=>{
        function getPathAfterApi(url: string) {
            const parts = url.split('/api/');
            if (parts.length > 1) {
              return parts[1]; // Mengembalikan bagian setelah 'api'
            }
            return null; // Jika 'api' tidak ditemukan
        }
        if(typeof url != null ){
            const newUrl = getPathAfterApi(url as string)
            const [,,data] =  await getDirectors({url:newUrl})
            set({paginate:data})
        }
    } 
}))