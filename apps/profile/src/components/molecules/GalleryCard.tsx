import { FaArrowUp } from "react-icons/fa"
import { Button, Img } from "../atoms"

type Props = {
    url: string,
    title: string,
    category: string,
    thumbnail: string
}

export default function GalleryCard({ }: Props) {
    return (
        <div className="card rounded-lg overflow-hidden border border-gray-700 relative hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="bg-black absolute inset-0 opacity-50"></div>
            <div className="relative z-10 p-4">
                <Img src="/images/students/1.jpg" className="rounded-lg md:h-40 lg:h-60 object-cover w-full" />
                <div className="py-4">
                    <span className="text-sm text-gray-400">Kategori</span>
                    <div className="flex items-start mt-2">
                        <h3 className="text-xl text-primary font-semibold flex-grow">Acara Wisuda Nasional UT School</h3>
                        <FaArrowUp className="text-primary rotate-45 text-xl" />
                    </div>
                    <Button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">Selengkapnya</Button>
                </div>
            </div>
        </div>
    )
}