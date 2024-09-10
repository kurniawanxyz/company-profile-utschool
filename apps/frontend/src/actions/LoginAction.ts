"use server"

import handleActionFetch from "@/utils/handleActionFetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export async function handleLogin(formData:FormData) {

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const option:RequestInit = {
        method: "POST",
        body: JSON.stringify(data)
    }
    const [status,msg,result] = await handleActionFetch('/admin/login',option)
    if(status){
        cookies().set("token",result.token)
        redirect('/admin/dashboard')
    }
    return [status,msg,result]
}

