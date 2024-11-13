import { GalleryCategory } from "./galleryCategory"

export interface Gallery {
    id: string
    gallery_category_id: string
    image_path: string
    created_at: string
    updated_at: string
    gallery_category: GalleryCategory
}


