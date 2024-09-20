import { getDataAction } from '@/actions/CommonAction'
import EditNewsPage from '@/components/pages/news/EditNewsPage'
import React from 'react'

type Props = {
  params:{
    id: string
  }
}

export default async function page({params}: Props) {
  const [, , data] = await getDataAction("/admin/news/" + params.id)
  return <EditNewsPage data={data}/>
}