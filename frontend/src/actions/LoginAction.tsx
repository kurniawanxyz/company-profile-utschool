"use server"

import { useFetch } from "@/utils"

export async function handleLogin(formData:FormData) {

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const option:RequestInit = {
        method: "POST",
        body: JSON.stringify(data)
    }
    const response = await useFetch('/login',option)
    console.log(response)
}