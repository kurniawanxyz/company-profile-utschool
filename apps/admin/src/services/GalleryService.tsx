"use client"

import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(formdata:FormData){
    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/gallery/',option,true,true)
    if (status) {
        window.location.href = "/admin/galleries"; // Redirect client-side
    }
}

export async function handleUpdate(formdata:FormData){
    const id = formdata.get("id")
    formdata.append("_method","PUT")
    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/gallery/'+id,option,true,true)
    if (status) {
        window.location.href = "/admin/galleries"; // Redirect client-side
    }
}