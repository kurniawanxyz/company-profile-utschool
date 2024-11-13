"use client"

import { useGalleryCategory } from "@/hooks/useGalleryCategory"
import { useCategoryId } from "@/stores/useCategoryId"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function FilterCategory() {

    const { setCategoryId, categoryId } = useCategoryId()
    const { isSuccess, data } = useGalleryCategory()

    function handleSelect(value: string){
        if(value === "ALL"){
            setCategoryId("")
        }else{
            setCategoryId(value)
        }
    }

    if (isSuccess) {
        const categories = data.data
        console.log(categoryId)
        return (
            <div className="my-2">
                <Select defaultValue={(categoryId === "" ? "" : categoryId )} onValueChange={(e)=> handleSelect(e)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Filter gallery"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={"ALL"} >ALL</SelectItem>
                        {
                            categories.map((item)=>(
                                <SelectItem key={item.id} value={item.id}>{item.text}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
        )
    }
}
