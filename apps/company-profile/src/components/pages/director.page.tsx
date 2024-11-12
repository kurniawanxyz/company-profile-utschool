import { Button } from '../ui/button'
import { Img } from '../atoms'
import { Sambutan } from '../organisms'

export default function DirectorPage() {
  return (
    <div className='min-h-screen'>
      <header className='w-full h-[40vh] bg-black flex justify-center items-center flex-col'>
          <h1 className='text-4xl font-bold text-white'>Integritas, Santun, Ahli, Berani.</h1>
          <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, similique eius ipsum minus maxime animi et modi porro. Temporibus, officiis!</p>
          <Button className='mt-5'>Click</Button>
      </header>
      <div className='grid grid-cols-3 w-full h-[30vh] overflow-hidden'>
      <Img 
        className=' object-cover object-center'
        src='/images/assets/randoms/3.png'/>
      <Img 
        className=' object-cover object-center'
        src='/images/assets/randoms/4.jpg'/>
      <Img 
        className='object-none object-bottom'
        src='/images/assets/randoms/5.jpg'/>
      </div>
      <Sambutan/>
    </div>
  )
}
