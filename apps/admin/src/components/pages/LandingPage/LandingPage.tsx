"use client"
import { Button, Input, TextArea } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import handleFetch from "@/utils/handleFetch";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface LandingPageData {
    about: string;
    email: string;
    address: string;
    telp: string;
    start_operation_hour: string;
    end_operation_hour: string;
}

export default function LandingPage() {
    const [data, setData] = useState<LandingPageData>()

    useEffect(() => {
        (async () => {
            const [status, mgs, data] = await handleFetch("/admin/landing-page-setting", {
                method: "GET"
            }, false, true, false)

            if (status) {
                setData(data)
            }

        })()
    }, [])

    if (!data) {
        return <div>Loading...</div>
    }

    async function handleSubmit(fd: FormData){
        const [status, mgs, data] = await handleFetch("/admin/landing-page-setting", {
            method: "POST",
            body: JSON.stringify({
            email: fd.get("email"),
            about: fd.get("about"),
            telp: fd.get("telp"),
            address: fd.get("address"),
            start_operation_hour: fd.get("start_operation_hour")?.toString().slice(0, 5), // Format to H:i
            end_operation_hour: fd.get("end_operation_hour")?.toString().slice(0, 5), // Format to H:i
            })
        }, false, true, true)

        if (status) {
            toast.success("Data berhasil disimpan")
        } else {
            toast.error("Data gagal disimpan")
        }
    }

    return (
        <div>
            <Banner
                title="Landing Page Configuration"
            />

            <Card className="mt-5">
                <form action={handleSubmit} method="post" className="flex flex-col gap-3">
                    <Input
                        label="Email Administration"
                        name="email"
                        type="email"
                        defaultValue={data.email}
                    />
                    <Input
                        label="Telp Administration"
                        name="telp"
                        type="text"
                        defaultValue={data.telp}
                    />
                    <TextArea
                        label="About UT School"
                        name="about"
                        defaultValue={data.about}
                    />
                    <TextArea
                        label="Address"
                        name="address"
                        defaultValue={data.about}
                    />
                    <Input
                        label="Start Operation Hour"
                        name="start_operation_hour"
                        type="time"
                        defaultValue={data.start_operation_hour}
                    />
                    <Input
                        label="End Operation Hour"
                        name="end_operation_hour"
                        type="time"
                        defaultValue={data.end_operation_hour}
                    />
                    <div className="flex justify-end mt-3">
                        <Button type='submit' className='w-20'>Submit</Button>
                    </div>
                </form>
            </Card>

        </div>
    )
}