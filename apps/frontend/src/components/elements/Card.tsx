import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    children: ReactNode,
    className?: string
}

const Card = (props: Props) => {
  return (
    <div className={`${twMerge('w-full rounded shadow-md p-4 bg-white',props.className)}`}>
        {props.children}
    </div>
  )
}

export default Card