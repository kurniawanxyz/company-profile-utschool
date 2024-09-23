import { SectionTitle } from "../molecules"

type Props = {}

export default function TopNews({}: Props) {
  return (
    <article className="w-full min-h-screen py-10 px-10">
        <SectionTitle title="" showImage={false}/>
    </article>
  )
}