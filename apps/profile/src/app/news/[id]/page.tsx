import { DetailNewsPage } from '@/components';
import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

export default function page({params}: Props) {
  return <DetailNewsPage id={params.id} />
}