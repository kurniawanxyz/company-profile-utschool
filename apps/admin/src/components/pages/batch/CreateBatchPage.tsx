"use client";

import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import Select, { optionSelect } from "@/components/elements/Select";
import { handleCreate } from "@/services/BatchService";
import { useEffect, useState } from "react";

type Props = {
  list: {
    id: string;
    name: string;
  }[];
};

export default function CreateBatchPage({ list }: Props) {
  const [TPlist, setTPList] = useState<optionSelect[]>();
  useEffect(() => {
    if (list && Array.isArray(list)) {
      const data = list.map((data) => ({
        id: data.id,
        text: data.name,
      }));
      setTPList(data as optionSelect[]);
    }
  }, [list]);

  return (
    <>
      <Banner title="Batch/Create" btnKembali urlKembali="/admin/batch" />

      <Card className="mt-5">
        <form action={handleCreate} className="flex gap-3 flex-col">
          <Input
            name="number"
            label="Number"
            type="number"
            placeholder="ex: 35"
          />
          <Select
            label="Training Program"
            name="training_program_id"
            isDirectionColoum
            list={TPlist as optionSelect[]}
          />
          <div className="flex justify-end mt-10">
            <Button className="w-32" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
