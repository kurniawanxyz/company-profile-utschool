"use client"

import { useState } from "react"
import axios from "axios"
import { Button, Input } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import Select from "@/components/elements/Select"
import { GalleryCategoriesType } from "@/types/GalleryCategoriesType"

type Props = {
    list: GalleryCategoriesType[]
}

const CreateGalleryPage = (props: Props) => {
    const [formData, setFormData] = useState({
        gallery_category_id: "",
        image: null
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement | HTMLSelectElement
        const files = (e.target as HTMLInputElement).files
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = new FormData()
        data.append("gallery_category_id", formData.gallery_category_id)
        if (formData.image) {
            data.append("image", formData.image)
        }

        try {
            const response = await axios.post("/api/gallery/create", data)
            console.log("Success:", response.data)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <>
            <Banner
                title="Galleries/Create"
                btnKembali
                urlKembali="/admin/galleries"
            />
            <Card className="mt-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <Select
                        label="Category"
                        name="gallery_category_id"
                        list={props.list}
                        isDirectionColoum
                        onChange={handleChange}
                    />
                    <Input
                        label="Image"
                        name="image"
                        type="file"
                        onChange={handleChange}
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