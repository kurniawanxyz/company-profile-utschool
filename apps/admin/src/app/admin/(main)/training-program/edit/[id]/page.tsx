import { getDataAction } from "@/actions/CommonAction"
import EditTrainingProgram from "@/components/pages/trainingProgram/EditTrainingProgram"

type Props = {
  params: {
    id: string
  }
}

export default async function page({params}: Props) {
  const [,,data] = await getDataAction('/admin/training-program/'+params.id)
  console.log(data)
  return <EditTrainingProgram data={data} />
}