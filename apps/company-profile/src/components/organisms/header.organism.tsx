import { Button, Heading, Img } from "../atoms";

export default function Header() {
  return (
    <header className="min-h-screen relative w-full">
        <Img src="/images/asset/6.png" width={2000} height={2000} loading="lazy" className="absolute w-full object-cover brightness-90" />
        <div className="absolute bottom-40 left-10">
            <Heading type="h1" className="text-4xl font-extrabold w-2/3">Lembaga Pendidikan Keterampilan Berwawasan Internasional</Heading>
            <Button className="rounded-full px-4 py-3">Baca lebih lanjut</Button>
        </div>
    </header>
  )
}