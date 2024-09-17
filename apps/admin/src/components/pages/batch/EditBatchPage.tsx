"use client";

import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { optionSelect } from "@/components/elements/Select";
const Select = dynamic(() => import("@/components/elements/Select"), {
  ssr: false,
});
import { handleUpdate } from "@/services/BatchService";
import { BatchType } from "@/types/BatchType";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type Props = {
  batch: BatchType;
  list: {
    id: string;
    name: string;
  }[];
};

export default function EditBatchPage({ batch, list }: Props) {
  const [selectedOption, setSelectedOption] = useState<string>(); // Set default selected value

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value); // Update state when a new option is selected
  };

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

  useEffect(()=>{
      if(batch){
          setSelectedOption(batch.training_program_id)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>2
      <Banner title="Batch/Create" btnKembali urlKembali="/admin/batch" />

      <Card className="mt-5">
        <form action={handleUpdate} className="flex gap-3 flex-col">
          <input type="hidden" name="id" value={batch.id} />
          <Input
            name="number"
            label="Number"
            type="number"
            defaultValue={batch.number as unknown as string}
            placeholder="ex: 35"
          />

          <Select
            label="Training Program"
            name="training_program_id"
            isDirectionColoum
            value={selectedOption || batch.training_program_id} // Controlled value
            onChange={handleSelectChange} // onChange handler
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
