"use client"
import { useNavbarStore } from '@/stores'
import Link from 'next/link'

type Props = {
    href: string,
    label: string,
    item?: {
        href: string,
        label: string
    }[]
}

export default function NavLink({href, label, item}: Props) {
    const {setHover} = useNavbarStore()
    const handleHover = (data:boolean, hoveredBar: string|null) =>{
        if(item){
            if(!data){
              setTimeout(()=>{
                setHover(data, hoveredBar)
              },500)
            }else{
              setHover(data, hoveredBar)
            }
          }else{
            setHover(false, null)
        }
      }

  return (
        <li onMouseEnter={()=> handleHover(true, label)} className=''><Link href={href}>{label}</Link></li>
    )
}