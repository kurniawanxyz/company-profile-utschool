"use client"
import dynamic from "next/dynamic";
import { Button, Input, TextArea } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import { handleCreate } from "@/services/NewsService";
import { useRichEditor } from "@/stores/useRichEditor";
import { useEffect } from "react";

const RichEditorNews = dynamic(()=>import("@/components/fragments/RichEditorNews"),{ssr:false})

type Props = {}

export default function CreateNewsPage({}: Props) {
    const {value,setValue} = useRichEditor()
    useEffect(()=>{
        setValue('')
    },[])
  return (
    <>
        <Banner
            title="News/Create"
            btnKembali
            urlKembali="/admin/news"
        />   

        <Card className="mt-5 ">
            <form action={handleCreate} className="flex flex-col gap-3">
                <Input
                    label="Thumbnail"
                    name="thumbnail"
                    type="file"
                />
                 <Input
                    label="Title"
                    name="title"
                    type="text"
                />
                <TextArea
                    label="Description"
                    name="description"
                />
                <input type="hidden" name="content" value={value} />

                <RichEditorNews
                    title="Content"
                    className=""
                    
                />

                <div className="flex justify-end w-full">
                    <Button type="submit" className="w-32">Submit</Button>
                </div>

            </form>
        </Card>
    </>
  )
}