"use client"
import { Button, Input, TextArea } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import dynamic from "next/dynamic";
import { useRichEditor } from "@/stores/useRichEditor";
import { useAvatar } from "@/stores/useAvatar"
import Avatar from "@/components/fragments/Avatar"
import { handleUpdateDirector } from "@/services/DirectorService";
import { DirectorType } from "@/types/DirectorType";
import { useEffect } from "react";
const RichEditor = dynamic(()=>import("@/components/fragments/RichEditor"),{ssr:false})




type Props = {
    directorId: string,
    data: DirectorType
}

const EditDirector = (props: Props) => {
    const {value,setValue} = useRichEditor()
    const {avatar,setAvatar} = useAvatar();

    useEffect(()=>{
        console.log(props.data) 
        setValue(props.data.message)
        setAvatar(`${process.env.NEXT_PUBLIC_BACKEND_URL + props.data.photo_profile}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            title="Directors/Edit"
            btnKembali={true}
            urlKembali="/admin/directors"
        />

        <Card className="mt-5">
            <form action={handleUpdateDirector} className="flex flex-col gap-5">
                <div className="w-full flex justify-center">
                    <Avatar label="The Director foto" className="w-32 h-32 object-cover" size={150} name="photo_profile" img={avatar} setImg={(e)=>handleImageChange(e)}/>
                </div>
                <input type="hidden" name="id" value={props.directorId} />
                <Input
                    label="Name"
                    name="name"
                    defaultValue={props.data.name}
                />
                 <Input
                    label="Position"
                    name="position"
                    defaultValue={props.data.position}
                />
                <TextArea label="Description" name="description" value={props.data.description}/>
                <input type="text" name="message" className="hidden" value={value} />
                <RichEditor title="Message"/>
                <div className="flex justify-end mt-10">
                    <Button className="w-32" type="submit">Submit</Button>
                </div>

            </form>
        </Card>
        
    </>
  )
}

export default EditDirector