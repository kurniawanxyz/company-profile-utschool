"use client"
import { toast } from "react-toastify";

export function handleUpdateToast(id:any,status:boolean,message:string){
    if(status){
        toast.update(id, {
            render: message,
            type: 'success',
            isLoading: false,
            autoClose: 5000
        });
    }else{
        toast.update(id, {
            render: `${message}`,
            type: 'error',
            isLoading: false,
            autoClose: 5000
        });
    }
}