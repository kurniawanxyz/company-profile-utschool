import { getDataAction } from "@/actions/CommonAction"
import CreateSchedulePage from "@/components/pages/schedule/CreateSchedulePage"
import { SobatType } from "@/types/SobatType"

type Props = {
    params:{
        id: string
    }
}

export default async function page({}: Props) {
  return <CreateSchedulePage/>
}