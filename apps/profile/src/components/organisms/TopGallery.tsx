import { FaArrowUp } from "react-icons/fa";
import { Button, Img } from "../atoms";
import { GalleryCard, SectionTitle } from "../molecules";

type Props = {};

export default function TopGallery({}: Props) {
  return (
    <article className="w-full min-h-screen bg-black/95 py-20 px-10">
        <SectionTitle className="text-5xl" title="Gallery" showImage={false}/>

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
