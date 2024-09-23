import { Img } from "../atoms"

type Props = {}

export default function LearningPoint({}: Props) {
  return (
    <article className="w-full bg-black h-screen p-10 py-20">
        <div className="flex items-center justify-center gap-3 flex-col-reverse">
            <h2 className="text-center text-3xl font-extrabold text-primary">Learning Point</h2>
            {/* <Img src="/images/logos/uts/1.png" className="w-40"/> */}
        </div>
        <p className="text-center mt-3 md:w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed suscipit, recusandae iste similique qui accusantium cumque illum nemo ratione enim!</p>
    </article>
  )
}