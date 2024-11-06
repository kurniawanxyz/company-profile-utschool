import Video from "../atoms/video.atom";
import { MapsCesium, NewsSection } from "../organisms";
import Header from "../organisms/header.organism";

export default function HomePage() {
  return (
    <>
      <Header/>
      <Video url="/videos/1.mp4" className="h-screen" playing loop={true}/>
      <NewsSection/>
      <MapsCesium/>
    </>
  )
}
