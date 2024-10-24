import { Button, Heading, Img, Paragraph } from "../atoms";


export default function GalleryBanner() {
  return (
    <article className="grid grid-cols-2 w-full p-20">
        <div className="flex flex-col justify-center">
            <div>
                <Heading className="text-primary font-extrabold text-5xl">Galeri UT School</Heading>
                <Paragraph className="text-slate-500">Ringkasan dokumentasi kegiatan selama di UT School</Paragraph>
            </div>
            <Button className="w-1/2 rounded-full mt-5">Lihat Selengkapnya</Button>
        </div>
        <div className="">
            <Img src="/images/asset/7.png"/>
        </div>
    </article>
  )
}