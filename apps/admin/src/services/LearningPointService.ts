import handleFetch from "@/utils/handleFetch"
import { redirect } from "next/navigation"

export async function handleCreate(fd: FormData) {
  const option: RequestInit = {
    method: "POST",
    body: fd
  }
  const [status,,] = await handleFetch('/admin/learning-point', option, true, true)
  if (status) {
    redirect("/admin/learning-point")
  }
}