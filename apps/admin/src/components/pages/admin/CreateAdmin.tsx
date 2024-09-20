"use client";
import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { handleCreate } from "@/services/AdminService";

type Props = {};

export default function CreateAdmin({}: Props) {
  return (
    <>
      <Banner
        title="Manage Admin/Create"
        btnKembali
        urlKembali="admin/manage-admin"
      />

      <Card className="mt-5">
        <form action={handleCreate} className="flex flex-col gap-3">
          <Input label="Name" name="name" />
          <Input label="email" name="email" type="email" />
          <div className="flex gap-3 text-black">
            <label id="admin" className="flex items-center gap-1">
              <input type="radio" name="role" id="admin" value={"admin"} />
              <span>Admin</span>
            </label>
            <label id="super_admin" className="flex items-center gap-1">
              <input
                type="radio"
                name="role"
                id="super_admin"
                value={"super_admin"}
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
  );
}
