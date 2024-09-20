import { Video } from "../atoms"
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
          loop
          controls
        />
    </header>
  )
}