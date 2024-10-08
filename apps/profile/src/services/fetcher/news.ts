import { defaultHeader } from "@/utils"
import axios from "axios"

const api = `${process.env.NEXT_PUBLIC_API_URL}`

export async function getNews(){
    const { data } = await axios.get(`${api}/news/short`,defaultHeader)
    return data.data
}

export async function getTopNews(){
    const { data } = await axios.get(`${api}/top-news`,defaultHeader)
    return data.data
}

export async function getAllNews(page:number){
    const { data } = await axios.get(`${api}/news?page=${page}`,defaultHeader)
    return data
}

export async function getDetailNews(id:string){
    const { data } = await axios.get(`${api}/news/${id}`,defaultHeader)
    return data.data
}

export async function getRandomNews(){
    const { data } = await axios.get(`${api}/news/random`,defaultHeader)
    return data.data
}