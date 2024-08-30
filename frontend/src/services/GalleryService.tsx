"use client"

import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(formdata:FormData){
    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/gallery/',option,true,true)
    if(status){
        redirect("/admin/galleries")
    }
}