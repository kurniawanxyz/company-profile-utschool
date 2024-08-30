"use client"
import { Button, Input, TextArea } from '@/components/elements'
import Banner from '@/components/elements/Banner'
import Card from '@/components/elements/Card'
import { handleUpdate } from '@/services/GalleryCategpriesService'
import { GalleryCategoriesType } from '@/types/GalleryCategoriesType'
import React from 'react'

type Props = {
    data: GalleryCategoriesType
}

const EditGalleryCategories = (props: Props) => {
    console.log(props.data)
  return (
    <>
        <Banner
            title='Gallery Categories/Edit'
            btnKembali
            urlKembali='/admin/gallery-categories'
        /> 

        <Card className="mt-5">
            <form action={handleUpdate} className="flex flex-col gap-3">
                <input type="hidden" name="id" value={props.data.id} />
                <Input 
                    label="Category"
                    name="text"
                    defaultValue={props.data.text}
                />
                <TextArea
                    label="Description"
                    name="description"
                    defaultValue={props.data.description}
                />
                <div className="flex justify-end">
                    <Button type="submit" className="w-32">Submit</Button>
                </div>
            </form>
        </Card>
    </>
  )
}

export default EditGalleryCategories