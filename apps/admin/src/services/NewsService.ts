import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(fd: FormData) {
  const option: RequestInit = {
    method: "POST",
    body: fd
  }
  const [status,,] = await handleFetch('/admin/news', option, true, true)
  if (status) {
    redirect("/admin/news")
  }
}

export async function handleUpdate(fd: FormData) {
  fd.append("_method","PUT")
  const option: RequestInit = {
    method: "POST",
    body: fd
  }
  const id = fd.get("id")
  const [status,,] = await handleFetch('/admin/news/'+id, option, true, true)
  if (status) {
    redirect("/admin/news")
  }
}

