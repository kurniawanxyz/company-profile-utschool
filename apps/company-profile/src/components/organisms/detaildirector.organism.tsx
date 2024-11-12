"use client"

import { useDirector } from "@/stores/useDirector"

export default function DetailDirector() {
    const { isSuccess, data } = useDirector()


    console.log(data)
    if (isSuccess) {
        return (
            <div>
            </div>
        )
    }
}
