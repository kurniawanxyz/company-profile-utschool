"use client"
import { Button, Input } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import Select from "@/components/elements/Select"
import { handleUpdate } from "@/services/GalleryService"
import { GalleriesType } from "@/types/GalleriesType"
import { GalleryCategoriesType } from "@/types/GalleryCategoriesType"
import Image from "next/image"
import { useEffect, useState } from "react"

type Props = {
    data: GalleriesType,
    list: GalleryCategoriesType[]
}

const EditGalleryPage = (props: Props) => {
    console.log(props.list)
    const[image,setImage] = useState<string>('/images/illustration/default-gallery.jpg')
    const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const handleImageChange = (event:any) => {
        const file = event.target.files[0];
        console.log(event)
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    useEffect(()=>{
        setImage(`${backendurl + props.data.image_path}`)
        return()=>{
            setImage('/images/illustration/default-gallery.jpg')
        }
    },[])

  return (
    <>
         <Banner
            title="Galleries/Edit"
            btnKembali
            urlKembali="/admin/galleries"
        />
        <Card className="mt-5">
            <form action={handleUpdate} className="flex flex-col gap-3">
                <input type="hidden" name="id" value={props.data.id} />
                <Select
                    label="Category"
                    name="gallery_category_id"
                    list={props.list}
                    isDirectionColoum
                    defaultValue={props.data.gallery_category.id}
                />
                <div>
                    <span className="text-slate-900">Image Priview</span>
                <Image
                    className='w-80 object-cover  '
                    src={image}
                    alt={`${props.data.gallery_category?.text}`}
                    width={400}
                    height={400}
                  />
                </div>
                
                <Input
                    onChange={(e)=>handleImageChange(e)}
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

export default EditGalleryPage