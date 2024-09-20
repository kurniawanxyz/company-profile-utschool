import { Video } from "../atoms"
import { Navbar } from "../molecules"
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <Navbar/>
        <Video
          src="/video/1.mp4"
          className="w-full h-full"
        />
    </header>
  )
}