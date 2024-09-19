import handleFetch from "@/utils/handleFetch"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"
import Cookie from "js-cookie"

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

export async function handleApproved(id: string, approval: "approved" | "rejected"){
    const option:RequestInit = {
        method: "PATCH",
        body: JSON.stringify({
            approval,
        })
    }
    const [,,,] = await handleFetch('/admin/registration/approval/'+id,option,false,true)
}

export async function handleAutoApproval(fd:FormData){
    fd.append("_method","PUT")
    const option:RequestInit = {
        method: "POST",
        body: fd
    }
    const [status,,,] = await handleFetch('/admin/registration/approval',option,true,true)
    if(status){
        redirect("/admin/enrollment-schedule/")
    }
}

export async function handleExport(id: string){

    if(!id){
        toast.warning("Id not found")
        return;
    }

    const option:RequestInit = {
        method: "GET",
    }
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/registration/export?query=${id}`,{
        method: "GET",
        headers:{
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
            "Authorization": `Bearer ${Cookie.get("token")}`
        }
    })

    if (!data.ok) {
        console.error(data)
        // throw new Error('Gagal mengambil file Excel');
      }

      // Mengubah data menjadi blob
      const blob = await data.blob();

      // Membuat URL sementara untuk blob file
      const downloadUrl = window.URL.createObjectURL(blob);

      // Membuat elemen link untuk mengunduh file
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `data-pendaftaran-${new Date().toISOString().slice(0, 7)}.xlsx`); // Sesuaikan nama file

      // Otomatis klik link untuk memulai unduhan
      document.body.appendChild(link);
      link.click();

      // Membersihkan link setelah selesai
      link.parentNode?.removeChild(link);

      // Revoke URL untuk menghindari memory leak
      window.URL.revokeObjectURL(downloadUrl);

}