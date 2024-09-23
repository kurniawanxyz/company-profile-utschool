import { Img } from "../atoms"
import { SectionTitle } from "../molecules"

type Props = {}

export default function LearningPoint({}: Props) {
  return (
    <article className="w-full bg-black h-screen p-10 py-20">
        <SectionTitle title="Titik Pembelajaran" showImage={false}/>
        <p className="text-center mt-3 md:w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed suscipit, recusandae iste similique qui accusantium cumque illum nemo ratione enim!</p>
    </article>
  )
}