
import { findDirector } from "@/actions/DirectorAction"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

const EditDirector = dynamic(()=>import("@/components/pages/Directors/EditDirector"))


type Props = {
    params:{
      id: string
    }
  }
  

const EditDirectorRoute = async(props: Props) => {
    const [status,msg,data] = await findDirector(props.params.id)
    console.log(data)
    if (!status) {
        return notFound()
      }
    return <EditDirector directorId={props.params.id} data={data}/> 
    
}

export default EditDirectorRoute