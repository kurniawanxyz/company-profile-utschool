import { AxiosRequestConfig } from "axios";

export const defaultHeader: AxiosRequestConfig =  {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
    }
}
