import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(fd:FormData) {
    const option:RequestInit = {
        method: "POST",
        body: fd
    }
    const [status,,] = await handleFetch('/admin/sobat-school/',option,true,true)
    if(status){
        redirect("/admin/sobat")
    }
}

export async function handleUpdate(fd:FormData) {
    const option:RequestInit = {
        method: "PUT",
        body: JSON.stringify({
            name: fd.get("name"),
            location: fd.get("location"),
        })
    }
    const id = fd.get("id") 
    const [status,,] = await handleFetch('/admin/sobat-school/'+id,option,false,true)
    if(status){
        redirect("/admin/sobat")
    }
}