import { Heading } from "../atoms";
import { AcademicCard } from "../molecules";


export default function AcademicBanner() {
  return (
    <article className="p-20">
        <Heading className="flex text-primary flex-col"><span className="text-xl">Program</span><span className="text-black text-3xl">Akademik</span></Heading>
        <AcademicCard/>
    </article>
  )
}