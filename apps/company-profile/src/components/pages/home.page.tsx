"use client"
import { InstagramEmbed } from "react-social-media-embed";
import Video from "../atoms/video.atom";
import { NewsSection } from "../organisms";
import Header from "../organisms/header.organism";

export default function HomePage() {
  return (
    <>
      <Header/>
      <Video url="/videos/1.mp4" className="h-screen" playing loop={true}/>
      <NewsSection/>
    </>
  )
}
