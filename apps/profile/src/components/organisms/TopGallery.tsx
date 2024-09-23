import { FaArrowUp } from "react-icons/fa";
import { Button, Img } from "../atoms";
import { GalleryCard } from "../molecules";

type Props = {};

export default function TopGallery({}: Props) {
  return (
    <article className="w-full min-h-screen bg-black py-20 px-10">
      <div className="flex items-center justify-center gap-3 flex-col-reverse">
        <h2 className="text-center text-5xl font-extrabold text-primary">
          Galeri
        </h2>
        <Img src="/images/logos/uts/1.png" className="w-40" />
      </div>
        <p className="md:w-2/3 text-center mx-auto mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore natus repellat iusto accusantium commodi maxime vel, ut voluptas dicta ducimus!</p>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-10 mt-10">
            {
                ['','',''].map((item,number)=>(
                    <GalleryCard  key={`gallery-${number}`} url={""} title={""} category={""} thumbnail={""}/>
                ))
            }
        </div>

    </article>
  );
}
