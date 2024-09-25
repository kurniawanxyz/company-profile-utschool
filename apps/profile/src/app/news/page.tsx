import { AllNews, HeroNews } from "@/components"


type Props = {}

export default function page({}: Props) {
  return (
    <>
      <HeroNews/>
      <AllNews/>
    </>
  )
}