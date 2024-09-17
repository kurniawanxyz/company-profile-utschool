"use client"

import Banner from "@/components/elements/Banner"

type Props = {}

const TrainingProgramPage = (props: Props) => {
  return (
    <>
        <Banner
            title="Training Program"
            btnTambah
            urlTambah="/admin/training-program/create/"
        />   

    </>
  )
}

export default TrainingProgramPage