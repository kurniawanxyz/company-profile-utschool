import { defaultHeader } from "@/utils"
import axios from "axios"

const api = `${process.env.NEXT_PUBLIC_API_URL}`

export async function getNews(){
    const { data } = await axios.get(`${api}/news`,defaultHeader)
    return data
}