"use client"

import { useGallery } from "@/hooks/useGallery"
import { useState } from "react"
import { FilterCategory, Paginate } from "../molecules";
import { Img } from "../atoms";
import { useGalleryCategory } from "@/hooks/useGalleryCategory";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { useCategoryId } from "@/stores/useCategoryId";

export default function ListGallery() {
    const [page, setPage] = useState(0);
    const { categoryId } = useCategoryId()
    const { isSuccess, data } = useGallery(page, categoryId)

    if (isSuccess) {
        const galleries = data.data
        return (
            <PhotoProvider>
                <div className="mt-5">
                    {/* filter */}
                    <FilterCategory/>
                    {/* galleries */}
                    <div>
                        <div className="grid grid-cols-3">
                            {
                                galleries.data.map((item) => (
                                    <PhotoView src={process.env.NEXT_PUBLIC_BACKEND + item.image_path} key={item.id}>
                                        <Img src={process.env.NEXT_PUBLIC_BACKEND + item.image_path} />
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
