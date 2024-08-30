"use client"

import Banner from "@/components/elements/Banner"

type Props = {}

const GalleryCategoriesPage = (props: Props) => {
  return (
    <>
        <Banner
            title="Gallery Categories"
            btnTambah
            urlTambah="gallery-categories/create"
        />
    </>
  )
}

export default GalleryCategoriesPage