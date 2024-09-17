"use client"
import Banner from "@/components/elements/Banner"

type Props = {}

export default function SchedulePage({}: Props) {
  return (
    <>
      <Banner
        title="Enrollment Schedule"
        btnTambah
        urlTambah="/admin/enrollment-schedule/create"
      />
    </>
  )
}