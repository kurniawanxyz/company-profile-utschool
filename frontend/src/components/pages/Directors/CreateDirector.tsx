"use client"
import { Input } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import dynamic from "next/dynamic";
import { useRichEditor } from "@/stores/useRichEditor";
const RichEditor = dynamic(()=>import("@/components/fragments/RichEditor"),{ssr:false})



type Props = {}

  

const CreateDirector = (props: Props) => {
    const {value} = useRichEditor()
    console.log(value)
return (
    <>
        <Banner
            title="Directors/Create"
            btnKembali={true}
            urlKembali="/admin/directors"
        />

        <div className="text-slate-900" dangerouslySetInnerHTML={{ __html: value }} />

        <Card className="mt-5">
            <form action="">
                <Input
                    label="Name"
                    name="name"
                />
                
                <RichEditor title="Message"/>
            </form>
        </Card>
        
    </>
  )
}

export default CreateDirector