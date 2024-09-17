import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"


export async function handleCreate(fd: FormData) {
    const option: RequestInit = {
      method: "POST",
      body: fd
    }
    const [status,,] = await handleFetch('/admin/batch', option, true, true)
    if (status) {
      redirect("/admin/batch")
    }
}

export async function handleUpdate(fd: FormData) {
    const id = fd.get("id")
    const option: RequestInit = {
      method: "PUT",
      body: JSON.stringify({
        number: fd.get("number"),
        training_program_id: fd.get("training_program_id")
      })
    }
    const [status,,] = await handleFetch('/admin/batch/'+id, option, false, true)
    if (status) {
      redirect("/admin/batch")
    }
}