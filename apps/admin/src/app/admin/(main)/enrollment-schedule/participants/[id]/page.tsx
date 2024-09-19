import { getDataAction } from '@/actions/CommonAction'
import ParticipansPage from '@/components/pages/schedule/ParticipansPage'

type Props = {
  params: {
    id: string
  }
}

export default async function page({params}: Props) {
  return <ParticipansPage id={params.id}/>
}