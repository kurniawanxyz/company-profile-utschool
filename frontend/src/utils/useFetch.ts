type metaType = {
    success: boolean,
    message: string,
    status: 403
}

export type responseType = {
    meta: metaType,
    data: any
}


export default async function useFetch(url:string, option:RequestInit) {
    const api_url = `${process.env.NEXT_PUBLIC_API_URL}${url}`
    const response= await fetch(api_url,option)
    return await response.json()
}