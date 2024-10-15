import Cookie from "js-cookie"
import { redirect, useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { handleUpdateToast } from "./handleUpdateToast"

type metaType = {
    success: boolean,
    message: string,
    status: 403
}

export type responseType = {
    meta: metaType,
    data: any
}




export default async function handleFetch(url: string, option: RequestInit, isUploadFile: boolean = false, needToken: boolean = false, activetoas: boolean = true) {
    let loading;
    if (activetoas) {
        if(option.method != "GET"){
            loading = toast.loading('Loading...');
        }
    }

    const token = Cookie.get('token');
    const headers = {
        ...option.headers,
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        ...(!isUploadFile && { "Content-Type": "application/json" }),
        ...(needToken && token ? { "Authorization": `Bearer ${token}` } : {}),
    };

    const api_url = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

    // Melakukan fetch request dengan headers yang sudah diperbarui
    const response = await fetch(api_url, {
        ...option,
        headers,
        mode: 'no-cors'
    });

    const result: responseType = await response.json();

    if (result.meta.status === 403) {
        Cookie.remove('token');
        window.location.href = '/admin/login'
    }
    

    if (activetoas) {
        if(option.method != "GET" || !result.meta.success){
            handleUpdateToast(loading, result.meta.success, result.meta.message, result.data);
        }
    }
    return [result.meta.success, result.meta.message, result.data];
}

