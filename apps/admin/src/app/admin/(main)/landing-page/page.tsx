import dynamic from "next/dynamic"

const LandingPage = dynamic(()=>import("@/components/pages/LandingPage/LandingPage"),{ssr:false})


export default function LandingPageRoute() {
  return <LandingPage />
}