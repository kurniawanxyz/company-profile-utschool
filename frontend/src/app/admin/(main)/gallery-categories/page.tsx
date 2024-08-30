import dynamic from 'next/dynamic'
import React from 'react'

type Props = {}

const GalleryCategoriesPage = dynamic(()=>import('@/components/pages/GalleryCategories/GalleryCategoriesPage'))

const GalleryCategoriesRoute = (props: Props) => {
  return <GalleryCategoriesPage/>
}

export default GalleryCategoriesRoute