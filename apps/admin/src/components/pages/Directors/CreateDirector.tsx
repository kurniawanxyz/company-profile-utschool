/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Button, Input, TextArea } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import dynamic from "next/dynamic";
import { useRichEditor } from "@/stores/useRichEditor";
import { useAvatar } from "@/stores/useAvatar"
import Avatar from "@/components/fragments/Avatar"
import { handleCreateDirector } from "@/services/DirectorService";
import { useEffect } from "react";
const RichEditor = dynamic(()=>import("@/components/fragments/RichEditor"),{ssr:false})



type Props = {}

const CreateDirector = (props: Props) => {
    const {value} = useRichEditor()
    const {avatar,setAvatar} = useAvatar();

    useEffect(()=>{
        setAvatar(undefined);
    },[])

    const handleImageChange = (event:any) => {
        const file = event.target.files[0];
        console.log(event)
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatar(imageUrl);
        }
    };




return (
    <>
        <Banner
            title="Directors/Create"
            btnKembali={true}
            urlKembali="/admin/directors"
        />

        <Card className="mt-5">
            <form action={handleCreateDirector} className="flex flex-col gap-5">
                <div className="w-full flex justify-center">
                    <Avatar label="The Director foto" className="w-32 h-32 object-cover" size={150} name="photo_profile" img={avatar} setImg={(e)=>handleImageChange(e)}/>
                </div>
                <Input
                    label="Name"
                    name="name"
                />
                 <Input
                    label="Position"
                    name="position"
                />
                <TextArea label="Description" name="description"/>
                <input type="text" name="message" className="hidden" value={value} />
                <RichEditor title="Message"/>


            </form>
        </Card>
        
    </>
  )
}

export default CreateDirector