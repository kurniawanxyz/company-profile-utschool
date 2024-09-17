import { getDataAction } from "@/actions/CommonAction"
import EditSobatPage from "@/components/pages/sobat/EditSobatPage"


type Props = {
    params:{
        id: string
    }
}

export default async function page({params}: Props) {
    const [,,data] = await getDataAction('/admin/sobat-school/'+params.id)
  return <EditSobatPage data={data}/>
}