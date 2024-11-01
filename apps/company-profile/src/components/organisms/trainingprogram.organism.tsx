import { Devider } from "../atoms"
import { TrainingProgramCard } from "../molecules"

type Props = {}

export default function TrainingProgramSection({}: Props) {
  return (
    <article className="flex flex-col justify-center items-center">
      <div className="">
        <h2 className="text-slate-700 text-2xl font-semibold">Training Program</h2>
        <Devider className="w-1/2 mx-auto mt-2 border-primary"/>
      </div>
    <section
      className="w-[80%] h-40 mx-auto rounded-t-[60px] flex flex-col items-center justify-center relative mt-40"
      style={{
      backgroundColor: '#ffd401',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff176' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      >
      <div className="absolute -top-20 flex justify-center gap-14">
        <TrainingProgramCard title="Mekanik"  category="Alat Berat"/>
        <TrainingProgramCard title="Operator" category="Alat Berat"  backgourndColor="bg-slate-500"/>
        <TrainingProgramCard title="IT Programmer"  category="Fullstack"/>
      </div>
    </section>
      </article>
  )
}