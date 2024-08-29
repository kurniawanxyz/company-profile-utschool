import handleFetch from "@/utils/handleFetch";
import { handleUpdateToast } from "@/utils/handleUpdateToast";
import Cookie from "js-cookie"
import { redirect } from "next/navigation"
import { toast } from "react-toastify";

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
        Cookie.set("token",result.token)
        redirect('/admin/dashboard')
    }
}