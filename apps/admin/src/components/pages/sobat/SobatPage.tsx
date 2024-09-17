"use client"

import Banner from "@/components/elements/Banner"

type Props = {}

export default function SobatPage({}: Props) {
  return (
    <>
        <Banner
            title="Sobat"
            btnTambah
            urlTambah="/admin/sobat/create"
        />
    </>
  )
}
