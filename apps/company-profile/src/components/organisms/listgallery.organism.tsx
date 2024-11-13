"use client"

import { useGallery } from "@/hooks/useGallery"
import { useState } from "react"
import { Paginate } from "../molecules";
import { Img } from "../atoms";
import { useGalleryCategory } from "@/hooks/useGalleryCategory";

export default function ListGallery() {
    const [page, setPage] = useState(0);
    const [categoryId, setCategoryId] = useState("");
    const {isSuccess, data} = useGallery(page, categoryId)
    const {} = useGalleryCategory()

    if(isSuccess){
        const galleries = data.data
        return (
          <div>
            {/* filter */}
            <div>

            </div>
            {/* galleries */}
            <div>
                <div className="grid grid-cols-3">
                    {
                        galleries.data.map((item)=>(
                            <Img key={item.id} src={process.env.NEXT_PUBLIC_BACKEND + item.image_path}/>
                        ))
                    }
                </div>
                <Paginate data={galleries} setPage={setPage}/>
            </div>
          </div>
        )
    }
}
