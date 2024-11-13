"use client"

import { useGalleryCategory } from "@/hooks/useGalleryCategory"
import { useCategoryId } from "@/stores/useCategoryId"

export default function FilterCategory() {

    const { setCategoryId } = useCategoryId()
    const { isSuccess, data } = useGalleryCategory()
    if (isSuccess) {
        const categories = data.data
        console.log(categories)
        return (
            <div>
                <select name="" id="" onChange={(e)=>setCategoryId(e.currentTarget.value)}>
                    {/* {
                        categories.map((item)=>(
                            <option key={item.id} value={item.id}>{item.text}</option>
                        ))
                    } */}
                </select>
            </div>
        )
    }
}
