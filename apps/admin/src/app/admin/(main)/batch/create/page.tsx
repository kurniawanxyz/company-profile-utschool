import { getDataAction } from "@/actions/CommonAction"
import CreateBatchPage from "@/components/pages/batch/CreateBatchPage"

type Props = {}

export default async function page({}: Props) {
    const [,,data] = await getDataAction('/list/training-program')
    return <CreateBatchPage list={data}/>
}