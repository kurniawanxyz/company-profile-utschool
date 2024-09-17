"use client"

import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"

type Props = {}

export default function CreateBatchPage({}: Props) {
  return (
    <>
        <Banner
            title="Batch/Create"
            btnKembali
            urlKembali="/admin/batch"
        />

        <Card className="mt-5">
            <form action="">
                
            </form>
        </Card>
    </>
  )
}