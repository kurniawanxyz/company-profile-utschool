import { getDataAction } from "@/actions/CommonAction"
import EditBatchPage from "@/components/pages/batch/EditBatchPage"
import { BatchType } from "@/types/BatchType"


type Props = {
    params:{
        id: string
    }
}

export default async function page({params}: Props) {

    const [,,list] = await getDataAction('/list/training-program')
    const [,,data] = await getDataAction('/admin/batch/' + params.id)

    return <EditBatchPage list={list} batch={data as BatchType}/>
}