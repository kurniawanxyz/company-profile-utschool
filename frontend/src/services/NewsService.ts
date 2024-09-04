import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(fd: FormData) {
  const option: RequestInit = {
    method: "POST",
    body: fd
  }
  const [status, msg, result] = await handleFetch('/admin/news', option, true, true)
  if (status) {
    redirect("/admin/news")
  }
}