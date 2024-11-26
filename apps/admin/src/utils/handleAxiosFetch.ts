import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from "js-cookie";


type metaType = {
    success: boolean,
    message: string,
    status: 403
}

export type ResponseType<T> = {
    meta: metaType,
    data: T
}


const handleAxiosFetch = async <T>(url: string, config?: AxiosRequestConfig, isSendFile: boolean = false): Promise<ResponseType<T>> => {
    try {
        const full_url = process.env.NEXT_PUBLIC_API_URL + url;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
        const token = Cookie.get('access_token') as string;
        

        const response = await axios.get(full_url, {
            ...config,
            headers: {
                ...config?.headers,
                'x-api-key': apiKey,
                'Authorization': `Bearer ${token}`,
                'Content-Type': isSendFile ? 'multipart/form-data' : 'application/json',
            }
        });
        return response.data as ResponseType<T>;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};

export default handleAxiosFetch;