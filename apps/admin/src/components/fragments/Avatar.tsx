import Image from 'next/image'
import { FaPen } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type Props = {
    label: string,
    name: string
    img?: string,
    setImg? : (e:any)=> void,
    className?:string,
    size?: number
}

const Avatar = (props: Props) => {
    const handleSetImg = (e: any) => {
        return (props.setImg !== null && props.setImg !== undefined) ? props.setImg(e ?? "") : () => console.log("tes");
      }
          return (
        <label htmlFor={props.label} className="flex justify-center flex-col items-center cursor-pointer">
            <Image
                src={props.img??'/images/profile/1.jpg'}
                alt="default avatar"
                width={props.size??200}
                height={props.size??200}
                className={twMerge("rounded-full border",props.className)}
            />
            <span className="text-slate-900 flex items-center gap-1 mt-2">{props.label}<FaPen /> </span>
            <input type="file" name={props.name} id={props.label} className="hidden" accept='image/*'
                onChange={(e)=>handleSetImg(e)}
            />
        </label>
    )
}

export default Avatar