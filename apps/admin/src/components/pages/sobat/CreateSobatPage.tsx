"use client";
import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { handleCreate } from "@/services/SobatService";

type Props = {};

export default function CreateSobatPage({}: Props) {
  return (
    <>
      <Banner title="Sobat/Create" btnKembali urlKembali="/admin/sobat" />
      <Card className="mt-5">
        <form action={handleCreate} className="flex gap-3 flex-col">
          <Input label="Name" name="name" placeholder="ex: SMKN 1 MEJAYAN" />
          <Input
            name="location"
            label="Location"
            placeholder="ex: Madiun, JawaTimur"
          />

          <div className="flex justify-end mt-3">
            <Button type="submit" className="w-20">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
