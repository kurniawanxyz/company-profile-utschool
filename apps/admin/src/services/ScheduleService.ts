import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleUpdate(fd:FormData){
    const option:RequestInit = {
        method: "PUT",
        body:JSON.stringify({
            training_program_id: fd.get("training_program_id"),
            sobat_school: fd.getAll("sobat_school[]"),
            learning_point_id: fd.get("learning_point_id"),
            start: fd.get("start"),
            end: fd.get("end"),
        })
    }
    const id = fd.get("id") 
    const [status,,] = await handleFetch('/admin/registration/schedule/'+id,option,false,true)
    if(status){
        redirect("/admin/enrollment-schedule")
    }
}

export async function handleCreate(fd:FormData){
    const option:RequestInit = {
        method: "POST",
        body: JSON.stringify({
            training_program_id: fd.get("training_program_id"),
            sobat_school: fd.getAll("sobat_school[]"),
            learning_point_id: fd.get("learning_point_id"),
            start: fd.get("start"),
            end: fd.get("end"),

        })
    }
    const [status,,] = await handleFetch('/admin/registration/schedule',option,false,true)
    if(status){
        redirect("/admin/enrollment-schedule")
    }
}