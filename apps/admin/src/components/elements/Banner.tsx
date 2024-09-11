import { useRouter } from "next/navigation"
import Button from "./Button"

type Props = {
    title: string,
    btnKembali?: boolean,
    btnTambah?: boolean,
    urlKembali?: string,
    urlTambah?: string,
    className?: string,
}

const Banner = (props: Props) => {
  const router = useRouter()
  return (
    <div className="card bg-white shadow-md p-4 rounded flex justify-between">
      <h1 className="text-lg font-bold text-slate-900">{props.title}</h1>
      <div className="flex w-1/2 justify-end gap-5">
        {
          props.btnKembali && (
            <Button onClick={()=>router.push(props.urlKembali??"/")} className="w-24">Back</Button>
          )
        }
        {
          props.btnTambah && (
            <Button onClick={()=>router.push(props.urlTambah??"/")} className="w-24">Create</Button>
          )
        }
      </div>
    </div>
  )
}

export default Banner