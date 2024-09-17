"use client"

import Banner from "@/components/elements/Banner"

type Props = {}

export default function LearningPointPage({}: Props) {
  return (
    <>
        <Banner
            title="Learning Point"
            btnTambah
            urlTambah="/admin/learning-point/create"
            
        />
    </>
  )
}