import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(fd: FormData) {
  const option: RequestInit = {
    method: "POST",
    body: fd
  }
  const [status,,] = await handleFetch('/admin/training-program', option, true, true)
  if (status) {
    redirect("/admin/training-program")
  }
}

export async function handleUpdate(fd: FormData) {
    const id = fd.get("id")
    const option: RequestInit = {
      method: "PUT",
      body: JSON.stringify({
        name: fd.get("name")
      })
    }
    const [status,,] = await handleFetch('/admin/training-program/' + id, option, false, true)
    if (status) {
      redirect("/admin/training-program")
    }
  }