import { Button } from '../ui/button'
import { Img } from '../atoms'
import { Sambutan } from '../organisms'
// import { GlobeDemo } from '../organisms/globe.organism'

export default function DirectorPage() {


  return (
    <div className="min-h-screen">
      <header className="w-full h-[40vh] bg-black flex flex-col justify-center items-center text-center p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          Integritas, Santun, Ahli, Berani.
        </h1>
        <p className="text-sm sm:text-base text-white mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, similique eius ipsum minus maxime animi et modi porro. Temporibus, officiis!
        </p>
        <Button className="mt-5">Click</Button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-[30vh] sm:h-[50vh] overflow-hidden">
        <Img
          className="object-cover object-center"
          src="/images/assets/randoms/3.png"
        />
        <Img
          className="object-none object-center"
          src="/images/assets/randoms/7.png"
        />
        <Img
          className="object-none object-bottom"
          src="/images/assets/randoms/5.jpg"
        />
      </div>
      <Sambutan />
      {/* <GlobeDemo /> */}
    </div>

  )
}
