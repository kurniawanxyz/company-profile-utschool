"use server"

import handleActionFetch from "@/utils/handleActionFetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export type storeDirectorType = {
    photo_profile: any | null,
    name: string | null,
    description: string | null,
    message: string | null
} 

export async function getDirectors(){

    const option:RequestInit = {
        method: "GET",
    }
    const [status,msg,result] = await handleActionFetch('/admin/director',option,false,true)
    console.log(status,msg,result)
    return [status,msg,result]
}