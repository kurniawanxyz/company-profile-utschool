import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { Img } from '../atoms'

type Props = {
    className?: string,
    backgourndColor?: "bg-primary" | "bg-slate-500",
    title: string,
    category: string,
} & Omit<HTMLAttributes<HTMLDivElement>, "className">

export default function TrainingProgramCard({className, title, category , backgourndColor = "bg-primary", ...rest}: Props) {
    const defaultStyle = "bg-white shadow-xl rounded-3xl w-52 h-56 flex flex-col "
  return (
    <div className={cn(defaultStyle,className)} {...rest}>
        <div className={cn('w-full h-2/3 relative rounded-t-3xl', backgourndColor )}>
            <Img className='absolute bottom-0 w-[80%] left-1/2 -translate-x-1/2' src='/images/assets/ahmad.png'/>
        </div>
        <div className='w-full h-1/3 bg-white relative z-20 rounded-b-3xl py-2 px-3'>
            <h3 className='font-bold text-slate-700'>{title}</h3>
            <p className='text-sm text-slate-500'>{category}</p>
        </div>
    </div>
  )
}