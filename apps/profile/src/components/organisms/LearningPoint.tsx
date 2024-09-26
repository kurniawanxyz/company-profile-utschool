import { Img } from "../atoms"
import { SectionTitle } from "../molecules"
import { GlobeDemo } from "./Globe"

type Props = {}

export default function LearningPoint({}: Props) {
  return (
    <article className="relative w-full bg-black/95 min-h-[150vh] p-10 py-20">
        <SectionTitle title="Titik Pembelajaran" showImage={false}/>
        <GlobeDemo/>
    </article>
  )
}