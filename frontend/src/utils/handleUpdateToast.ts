"use client"
import { toast } from "react-toastify";

export function handleUpdateToast(id:any,status:boolean,message:string, result:any = null){
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


        if(result != null){
            for (const i in result) {
                if (Object.prototype.hasOwnProperty.call(result, i)) {
                    const msg = result[i][0];
                    toast.error(msg);
                }
            }
        }



    }


}