import { Button, Heading, Img, Paragraph } from "../atoms";

export default function EnrollmentBanner() {
  return (
    <article className="w-full p-20">
      <div className="w-full h-96 flex  gap-2 rounded shadow-md overflow-hidden">
        <aside className="w-2/5 overflow-clip relative">
            <Img src="/images/students/1.jpg" height={2000} width={2000} className="relative rounded-full -left-8 scale-125 h-[400px] w-[400px] object-cover" />
        </aside>
        <aside className="w-3/5 flex-col flex justify-center ">
              <Heading type="h2" className="text-primary text-2xl">Pendaftaran Online</Heading>
            <div className="mt-5">
                <Heading className="text-black" type="h3">Daftar Menjadi Siswa UT School Sekarang!</Heading>
                <Paragraph className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure facilis ea quam tempore expedita repellat architecto illo totam neque!</Paragraph>
                <Button className=" rounded-full text-xl px-10 py-2 mt-5">Daftar</Button>
            </div>
        </aside>
      </div>
    </article>
  )
}