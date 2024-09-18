import { getDataAction } from '@/actions/CommonAction'
import GalleryPage from '@/components/pages/gallery/GalleryPage'
import React from 'react'

type Props = {}


const GalleryRoute = async(props: Props) => {
  const [,,category] = await getDataAction('/list/category') 
  return <GalleryPage category={category}/>
}

export default GalleryRoute