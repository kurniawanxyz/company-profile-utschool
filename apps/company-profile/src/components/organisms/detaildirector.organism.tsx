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
            <div className="min-h-screen">
                {/* Bagian Profil */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-6 sm:px-16 lg:px-28">
                    {/* Gambar */}
                    <div className="">
                        <Img
                            className="w-full object-cover h-[300px] sm:h-[400px]"
                            src={process.env.NEXT_PUBLIC_BACKEND + director.photo_profile}
                        />
                    </div>
                    {/* Informasi */}
                    <div className="p-5 bg-primary">
                        <h3 className="text-xl sm:text-2xl text-white font-bold">
                            {director.name}
                        </h3>
                        <p className="text-white">{director.position}</p>
                        <p className="text-white mt-5 text-sm sm:text-base">
                            {director.description}
                        </p>
                    </div>
                </div>

                {/* Bagian Video dan Pesan */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mt-8 lg:mt-0 px-6 sm:px-16 lg:px-28">
                    {/* Video */}
                    <div className="w-full">
                        <Video
                            playing={true}
                            muted
                            loop
                            controls={false}
                            url="/videos/1.mp4"
                        />
                    </div>
                    {/* Pesan */}
                    <div className="p-5">
                        <div
                            className="text-sm sm:text-base"
                            dangerouslySetInnerHTML={{ __html: director.message }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
