import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(fd: FormData) {
    const option: RequestInit = {
        method: "POST",
        body: fd
      }
      const [status,,] = await handleFetch('/admin/users', option, true, true)
      if (status) {
        redirect("/admin/manage-admin")
      }
}

export async function handleUpdate(fd: FormData) {
    const option: RequestInit = {
        method: "PUT",
        body: JSON.stringify({
            name: fd.get("name"),
            email: fd.get("email"),
            password: fd.get("password"),
            role: fd.get("role")
        })
      }
      const id = fd.get("id")
      const [status,,] = await handleFetch('/admin/users/'+id, option, false, true)
      if (status) {
        redirect("/admin/manage-admin")
      }
}