/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import dynamic from "next/dynamic";
import { Button, Input, TextArea } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import { handleUpdate } from "@/services/NewsService";
import { useRichEditor } from "@/stores/useRichEditor";
import { useEffect } from "react";
import { NewsType } from "@/types/NewsType";

const RichEditorNews = dynamic(()=>import("@/components/fragments/RichEditorNews"),{ssr:false})

type Props = {
    data: NewsType
}

export default function EditNewsPage({data}: Props) {
    const {value,setValue} = useRichEditor()
    useEffect(()=>{
        if(data){
            setValue(data.content as string)
        }
    },[])
    console.log(data)
  return (
    <>
        <Banner
            title="News/Edit"
            btnKembali
            urlKembali="/admin/news"
        />   

        <Card className="mt-5 ">
            <form action={handleUpdate} className="flex flex-col gap-3">
                <input type="hidden" name="id" value={data.id} />
                <Input
                    label="Thumbnail"
                    name="thumbnail"
                    type="file"
                />
                 <Input
                    label="Title"
                    name="title"
                    type="text"
                    defaultValue={data.title}
                />
                <TextArea
                    label="Description"
                    name="description"
                    defaultValue={data.description}
                />

                <div className="flex flex-col text-black">
                    <span className="text-black">Visibility</span>
                    <div className="flex flex-row gap-3">
                        <label className="flex flex-row gap-1 items-center" htmlFor="public">
                            <input type="radio" name="visibility" id="public" defaultChecked={data.visibility == 1} value={1} />
                            <span>Public</span>
                        </label>
                        <label className="flex flex-row gap-1 items-center" htmlFor="private">
                            <input type="radio" name="visibility" id="private"  defaultChecked={data.visibility == 0} value={0} />
                            <span>Private</span>
                        </label>
                    </div>
                </div>

                <input type="hidden" name="content" value={value} />

               <RichEditorNews defaultValue={value}/>
                <div className="flex justify-end w-full">
                    <Button type="submit" className="w-32">Submit</Button>
                </div>
            </form>
        </Card>
    </>
  )
}