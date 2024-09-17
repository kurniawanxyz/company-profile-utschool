"use client"

import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import MultiSelect from "@/components/fragments/MultiSelect"

type Props = {}

export default function CreateSchedulePage({}: Props) {
  return (
    <>
        <Banner
            title="Enrollment Schedule/Create"
            btnKembali
            urlKembali="/admin/enrollment-schedule"
        />
        <Card className="mt-5">
            <form action="">
                {/* <MultiSelect /> */}
            </form>
        </Card>
    </>
  )
}