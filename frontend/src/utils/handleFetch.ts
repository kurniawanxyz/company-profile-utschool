type metaType = {
    success: boolean,
    message: string,
    status: 403
}

export type responseType = {
    meta: metaType,
    data: any
}




export default async function handleFetch(url: string, option: RequestInit) {
    // Menggabungkan headers yang sudah ada dengan header x-api-key
    const headers = {
        ...option.headers, // Ini akan mempertahankan header lain yang mungkin sudah ada
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        "Content-Type": "application/json"
    };
    
    console.log({
        ...option,
        headers, // Menggunakan headers yang telah diperbarui
    });
    // Membuat URL lengkap
    const api_url = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

    // Melakukan fetch request dengan headers yang sudah diperbarui
    const response:responseType = await fetch(api_url, {
        ...option,
        headers, // Menggunakan headers yang telah diperbarui
    }).then(async(res)=>{
        return await res.json()
    });

    return [response.meta.success,response.meta.message,response.data]
}
