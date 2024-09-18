import { getDataAction } from "@/actions/CommonAction"
import EditSchedulePage from "@/components/pages/schedule/EditSchedulePage"


type Props = {
  params:{
    id: string
  }
}

export default async function page({params}: Props) {
  const [,,data] = await getDataAction('/admin/registration/schedule/'+params.id)
  return <EditSchedulePage schedule={data}/>
}