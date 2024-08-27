"use server"

import { handleFetch } from "@/utils"
import { cookies } from "next/headers"


export async function handleLogin(formData:FormData) {

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const option:RequestInit = {
        method: "POST",
        body: JSON.stringify(data)
    }
    const [status,msg,result] = await handleFetch('/admin/login',option)
    if(status){
        cookies().set("token",result.token)
    }
    return [status,msg,result]
}