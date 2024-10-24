import { Button, Heading, Img, Paragraph } from "../atoms";
import Card from "./card.molecules";

export default function NewsCard() {

  return (
    <Card className="mt-5 shadow-lg">
        <div className="w-full">
            <Img src="/images/students/1.jpg" className="w-full"/>
        </div>
        <div className="w-full p-5">
            <Heading className="text-slate-950 text-2xl ">Selamat Hari Guru Sedunia</Heading>
            <Paragraph>19 Mei 2025</Paragraph>

            <Button className="mt-10" variant="outline">Baca Selengkapnya</Button>
        </div>
    </Card>
  )
}