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


export async function handleUpdate(formdata: FormData){
    const id = formdata.get("id")
    const option:RequestInit = {
        method: "PUT",
        body: JSON.stringify({
            text: formdata.get("text"),
            description: formdata.get("description"),
        })
    }
    const [status,msg,result] = await handleFetch('/admin/gallery-category/'+id,option,false,true)
    // console.log(status,msg,result)
    if(status){
        redirect("/admin/gallery-categories")  
    }
}

