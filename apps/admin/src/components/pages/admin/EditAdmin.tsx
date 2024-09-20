"use client"
import { Button, Input } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import { handleUpdate } from "@/services/AdminService"
import { AdminType } from "@/types/AdminType"
import { notFound } from "next/navigation"

type Props = {
  data: AdminType
}

export default function EditAdmin({data}: Props) {
  if(!data){
    notFound()
  }
  return (
    <>
    <Banner
      title="Manage Admin/Create"
      btnKembali
      urlKembali="admin/manage-admin"
    />

    <Card className="mt-5">
      <form action={handleUpdate} className="flex flex-col gap-3">
      <Input label="Name" name="name" defaultValue={data.name} />
          <Input label="email" name="email" type="email" defaultValue={data.email} />
          <Input label="id" name="id" type="hidden" defaultValue={data.id} />
          <div className="flex gap-3 text-black">
            <label id="admin" className="flex items-center gap-1">
              <input type="radio" name="role" id="admin" value={"admin"} checked={data.role === "admin"} />
              <span>Admin</span>
            </label>
            <label id="super_admin" className="flex items-center gap-1">
              <input
                type="radio"
                name="role"
                id="super_admin"
                value={"super_admin"}
                checked={data.role === "super_admin"}
              />
              <span>Super Admin</span>
            </label>
          </div>
          <Input label="Password" name="password" type="password" />
          <div className="flex justify-end mt-5">
            <Button className="w-32" type="submit">
              Submit
            </Button>
          </div>
      </form>
    </Card>
  </>
  )
}