import DetailNewsPage from '@/components/pages/detailnews.page'
import React from 'react'

export default function page({params}:{params:{id:string}}) {
  const id = params.id
  return <DetailNewsPage id={id} />
}
