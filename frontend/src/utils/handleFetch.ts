import Cookie from "js-cookie"
import { redirect } from "next/navigation"

type metaType = {
    success: boolean,
    message: string,
    status: 403
}

export type responseType = {
    meta: metaType,
    data: any
}




export default async function handleFetch(url: string, option: RequestInit, isUploadFile: boolean =false, needToken:boolean = false) {
    // Menggabungkan headers yang sudah ada dengan header x-api-key
    const token = Cookie.get('token')
    console.log(token)
    const headers = {
        ...option.headers, // Ini akan mempertahankan header lain yang mungkin sudah ada
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        // "Content-Type": isUploadFile ? "multipart/form-data" : "application/json",
        ...(!isUploadFile && {"Content-Type": "application/json"} ),
        ...(needToken && token ? { "Authorization": `Bearer ${token}` } : {}),
    };

    console.log(headers)

    
    // Membuat URL lengkap
    const api_url = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

    // Melakukan fetch request dengan headers yang sudah diperbarui
    const response:responseType = await fetch(api_url, {
        ...option,
        headers, // Menggunakan headers yang telah diperbarui
    }).then(async(res)=>{
        return await res.json()
    });

    console.log(response.meta.status)
    if(response.meta.status == 403){
        Cookie.remove('token')
        redirect("/admin/login")
    }

    return [response.meta.success,response.meta.message,response.data]
}
