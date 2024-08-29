"use server"

import handleActionFetch from "@/utils/handleActionFetch"
import { revalidatePath } from "next/cache"

export type storeDirectorType = {
    photo_profile: any | null,
    name: string | null,
    description: string | null,
    message: string | null
} 
export type getDirectorsType ={
    url?: string|null
}
export async function getDirectors(props: getDirectorsType){

    const option:RequestInit = {
        method: "GET",
    }
    const [status,msg,result] = await handleActionFetch(`/${props.url||'admin/director'}`,option,false,true)
    return [status,msg,result]
}

export async function deleteDirectors(url:string){
    const [status,msg,result] = await handleActionFetch(url,{method: "DELETE"},false,true)
    revalidatePath("/admin/directors")
    return [status,msg,result]    
}