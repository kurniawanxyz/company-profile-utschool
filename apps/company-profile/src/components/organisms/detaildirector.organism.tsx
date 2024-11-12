"use client"

import { useDirector } from "@/stores/useDirector"
import { Img } from "../atoms"
import Video from "../atoms/video.atom"

export default function DetailDirector() {
    const { isSuccess, data } = useDirector()


    console.log(data)
    if (isSuccess) {
        const director = data.data
        return (
            <div className="">
                <div className="grid grid-cols-2 px-28">
                <div className="">
                        <Img className="w-full object-cover h-[400px] " src={process.env.NEXT_PUBLIC_BACKEND + director.photo_profile}/>
                </div>
                <div className="p-5 bg-primary">
                        <h3 className="text-xl text-white font-bold">{director.name}</h3>
                        <p className="text-white">{director.position}</p>
                        <p className="text-white mt-5">{director.description}</p>
                </div>
                </div>
                <div className="grid grid-cols-2 min-h-[400px] px-28">
                    <div>
                        <Video playing={true} muted loop controls={false} url="/videos/1.mp4"/>
                    </div>
                    <div className="p-5">
                        <div dangerouslySetInnerHTML={{__html: director.message}} />
                    </div>
                </div>
            </div>
        )
    }
}
