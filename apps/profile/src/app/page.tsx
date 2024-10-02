import dynamic from "next/dynamic";
import { Header, LearningPoint, OnlineEnrollment, TopGallery, TopNews } from "@/components";
const Header2= dynamic  (() => import('@/components/organisms/Header2'), { ssr: false, loading: () => <p>Loading...</p> });

export default function Home() {
  return (
    <div className="bg-black">
      <Header2/>
      <LearningPoint/>
      {/* <hr  className="border-2 border-black/90"/> */}
      <OnlineEnrollment/>
      {/* <hr  className="border-2 border-black/90"/> */}
       <TopGallery/>
      <TopNews/>
    </div>
  );
}
