import handleActionFetch from "@/utils/handleActionFetch"

export async function getDataAction(url:string){
    const option:RequestInit = {
        method: "GET",
    }
    const [status,msg,result] = await handleActionFetch(`${url}`,option,false,true)
    return [status,msg,result]
}