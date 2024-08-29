"use client"

import { handleFetch } from "@/utils"
import { handleUpdateToast } from "@/utils/handleUpdateToast";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


export async function handleCreateDirector(formdata:FormData){
    const loading = toast.loading('Loading...');

    const option:RequestInit = {
        method: "POST",
        body: formdata
    }
    const [status,msg,result] = await handleFetch('/admin/director',option,true,true)
    // console.log(status,msg,result)
    handleUpdateToast(loading,status,msg)
    if(!status){
        for (const i in result) {
            if (Object.prototype.hasOwnProperty.call(result, i)) {
                const msg = result[i][0];
                toast.error(msg);
            }
        }
    }else{
        redirect("/admin/directors")
    }
    return
}