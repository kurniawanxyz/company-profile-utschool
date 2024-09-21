import { Button, Video } from "../atoms"
import { Navbar } from "../molecules"
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="relative h-screen overflow-hidden">
        <Navbar/>
        <Video
          src="/videos/1.mp4"
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover shadow-inner-fade"
          autoPlay
          muted
          loop
          poster="/images/students/1.jpg"
        />
        <div className="absolute z-10 bottom-20 left-10 md:w-2/3 lg:w-1/2">
          <h1 className="md:text-3xl text-white font-extrabold uppercase">Lembaga Pendidikan Keterampilan Berwawasan Internasional</h1>
          <Button className="hover:font-semibold px-1 py-[4px] text-[10px] md:text-base md:px-3 md:py-1">Lebih Lanjut</Button>
        </div>
        
        <div className="absolute z-10 -bottom-14 w-[110vw] left-1/2 -translate-x-1/2 bg-black blur h-20">
          <p></p>
        </div>
    </header>
  )
}