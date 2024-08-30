"use client"

import handleFetch from "@/utils/handleFetch";
import { handleUpdateToast } from "@/utils/handleUpdateToast";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


export async function handleCreateDirector(formdata:FormData){

    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/director',option,true,true)
    // console.log(status,msg,result)
    if(status){
        redirect("/admin/directors")
    }
    return
}

export async function handleUpdateDirector(formdata:FormData){

    const id = formdata.get("id")
    formdata.append("_method","PUT")
    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/director/'+id,option,true,true)
    // console.log(status,msg,result)
    if(status){
        redirect("/admin/directors")
    }
    
}