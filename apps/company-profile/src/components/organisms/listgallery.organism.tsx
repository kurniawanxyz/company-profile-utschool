"use client"

import { useGallery } from "@/hooks/useGallery"
import { useEffect, useState } from "react"
import { FilterCategory, Paginate } from "../molecules";
import { Img } from "../atoms";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { useCategoryId } from "@/stores/useCategoryId";

export default function ListGallery() {
    const [page, setPage] = useState(0);
    const { categoryId } = useCategoryId()
    const { isSuccess, data } = useGallery(page, categoryId)

    useEffect(()=>{
        setPage(0)
    },[categoryId])

    if (isSuccess) {
        const galleries = data.data
        return (
            <PhotoProvider>
                <div className="mt-5">
                    {/* filter */}
                    <div className="w-1/3">
                        <FilterCategory/>
                    </div>
                    {/* galleries */}
                    <div>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                galleries.data.map((item) => (
                                    <PhotoView src={process.env.NEXT_PUBLIC_BACKEND + item.image_path} key={item.id}>
                                        <Img src={process.env.NEXT_PUBLIC_BACKEND + item.image_path} className="rounded shadow-md"/>
                                    </PhotoView>
                                ))
                            }
                        </div>
                        <Paginate data={galleries} setPage={setPage} />
                    </div>
                </div>
            </PhotoProvider>
        )
    }
}
