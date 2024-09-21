import { LearningPoint, OnlineEnrollment, TopGallery } from "@/components";

export default function Home() {
  return (
    <>
      <LearningPoint/>
      <hr  className="border-2 border-black/90"/>
      <OnlineEnrollment/>
      <hr  className="border-2 border-black/90"/>
      <TopGallery/>
    </>
  );
}
