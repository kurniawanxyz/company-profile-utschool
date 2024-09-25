import { Img } from "../atoms"
import { SectionTitle } from "../molecules"

type Props = {}

export default function LearningPoint({}: Props) {
  return (
    <article className="w-full bg-black/95 h-screen p-10 py-20">
        <SectionTitle title="Titik Pembelajaran" showImage={false}/>
    </article>
  )
}