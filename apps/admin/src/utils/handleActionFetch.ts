import { redirect } from "next/navigation"
import { cookies } from "next/headers"

type metaType = {
    success: boolean,
    message: string,
    status: 403
}

export type responseType = {
    meta: metaType,
    data: any
}




export default async function handleActionFetch(url: string, option: RequestInit, isUploadFile: boolean = false, needToken: boolean = false) {


    const token = cookies().get("token")?.value;
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
        cache:"no-store"
    });

    const result: responseType = await response.json();

    if (result.meta.status === 403) {
        cookies().delete('token');
        redirect("/admin/login");
    }

    return [result.meta.success, result.meta.message, result.data];
}

