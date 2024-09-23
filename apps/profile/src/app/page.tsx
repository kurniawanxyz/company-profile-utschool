import { Header, LearningPoint, OnlineEnrollment, TopGallery, TopNews } from "@/components";

export default function Home() {
  return (
    <>
      <Header/>
      <LearningPoint/>
      <hr  className="border-2 border-black/90"/>
      <OnlineEnrollment/>
      <hr  className="border-2 border-black/90"/>
      <TopGallery/>
      <TopNews/>
    </>
  );
}
