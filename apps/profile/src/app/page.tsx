import { Header, Header2, LearningPoint, OnlineEnrollment, TopGallery, TopNews } from "@/components";

export default function Home() {
  return (
    <>
      <Header2/>
      <LearningPoint/>
      <hr  className="border-2 border-black/90"/>
      <OnlineEnrollment/>
      <hr  className="border-2 border-black/90"/>
      <TopGallery/>
      <TopNews/>
    </>
  );
}
