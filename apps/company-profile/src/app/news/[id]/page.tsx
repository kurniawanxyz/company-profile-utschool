import DetailNewsPage from '@/components/pages/detailnews.page'
import React from 'react'

export default async function page({params}:{params:{id:string}}) {
  const id = await params.id
  return <DetailNewsPage id={id} />
}
