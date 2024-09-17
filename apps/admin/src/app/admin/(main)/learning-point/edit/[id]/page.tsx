
import { getDataAction } from "@/actions/CommonAction"
import EditLearningPoint from "@/components/pages/learningPoint/EditLearningPoint"

type Props = {
    params:{
        id: string
    }
}

export default async function page({params}: Props) {
    const [,,data] = await getDataAction('/admin/learning-point/'+params.id)
    return <EditLearningPoint data={data}/>
}