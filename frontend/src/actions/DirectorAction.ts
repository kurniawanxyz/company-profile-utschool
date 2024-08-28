"use server"

import { handleFetch } from "@/utils"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export type storeDirectorType = {
    photo_profile: any | null,
    name: string | null,
    description: string | null,
    message: string | null
} 

export async function storeDirector(data:storeDirectorType){

    const option:RequestInit = {
        method: "POST",
        body: JSON.stringify(data)
    }
    const [status,msg,result] = await handleFetch('/admin/director',option,true)
    if(status){
        cookies().set("token",result.token)
        redirect('/admin/dashboard')
    }
    console.log(status,msg,result)
    return [status,msg,result]
}