"use client"

import { Button, Input } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import Select from "@/components/elements/Select"
import { handleCreate } from "@/services/GalleryService"
import { GalleryCategoriesType } from "@/types/GalleryCategoriesType"

type Props = {
    list: GalleryCategoriesType[]
}

const CreateGalleryPage = (props: Props) => {
  return (
    <>
        <Banner
            title="Galleries/Create"
            btnKembali
            urlKembali="/admin/galleries"
        />
        <Card className="mt-5">
            <form action={handleCreate} className="flex flex-col gap-3">
                <Select
                    label="Category"
                    name="gallery_category_id"
                    list={props.list}
                    isDirectionColoum
                />
                <Input
                    label="Image"
                    name="image"
                    type="file"
                />
                <div className="flex justify-end mt-5">
                    <Button className="w-32" type="submit">Submit</Button>
                </div>
            </form>
        </Card>
    </>
  )
}

export default CreateGalleryPage