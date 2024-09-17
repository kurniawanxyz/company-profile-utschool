"use client"

import Banner from "@/components/elements/Banner"

type Props = {}

export default function BatchPage({}: Props) {
  return (
    <>
        <Banner
            title="Batch"
            btnTambah
            urlTambah="/admin/batch/create"
        />
    </>
  )
}