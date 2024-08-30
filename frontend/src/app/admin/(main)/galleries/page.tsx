import GalleryPage from '@/components/pages/gallery/GalleryPage'
import dynamic from 'next/dynamic'
import React from 'react'

type Props = {}

// const GalleryPage = dynamic(import('@/components/pages/gallery/GalleryPage'))

const GalleryRoute = (props: Props) => {
  return <GalleryPage/>
}

export default GalleryRoute