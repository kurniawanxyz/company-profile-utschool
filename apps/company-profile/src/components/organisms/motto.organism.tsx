"use client"
import { Img } from '../atoms'

export default function MottoUtSchool() {
  return (
    <div className="w-full h-[400px] relative mt-20 rounded-xl overflow-hidden bg-gray-100">
      {/* Background Image */}
      <Img
        src="/images/assets/randoms/2.png"
        className="absolute w-full h-full object-cover opacity-10"
        alt="Motto Background"
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-10 md:px-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          Motto UT School
        </h2>
        <p className="mt-5 text-sm md:text-lg text-slate-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem excepturi, atque maxime maiores esse non cum dicta ea dolor perferendis velit, facere ex. Harum suscipit quo modi facere quod ipsum quam quisquam accusantium, doloribus, nulla numquam aut sed quae similique quis quibusdam? Laborum, nobis harum?
        </p>
        <span className="mt-10 text-lg md:text-2xl font-bold text-black">
          {"(Integritas, Santun, Ahli, Berani)"}
        </span>
      </div>
    </div>
  )
}
