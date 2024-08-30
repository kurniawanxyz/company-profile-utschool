"use client"
import { Button, Input, TextArea } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import { handleStore } from "@/services/GalleryCategpriesService"

type Props = {}

const CreateGalleryCategories = (props: Props) => {
  return (
    <>
        <Banner
            title="Gallery Categories/Create"
            btnKembali
            urlKembali="/admin/gallery-categories"
        />
        <Card className="mt-5">
            <form action={handleStore} className="flex flex-col gap-3">
                <Input 
                    label="Category"
                    name="text"
                />
                <TextArea
                    label="Description"
                    name="description"
                />
                <div className="flex justify-end">
                    <Button type="submit" className="w-32">Submit</Button>
                </div>
            </form>
        </Card>
    </>
  )
}

export default CreateGalleryCategories