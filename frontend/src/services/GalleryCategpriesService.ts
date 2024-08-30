"use client"
import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleStore(formdata: FormData){
    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/gallery-category',option,true,true)
    // console.log(status,msg,result)
    if(status){
        redirect("/admin/gallery-categories")  
    }
}