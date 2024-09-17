"use client"
import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { handleUpdate } from "@/services/TrainingProgramService";
import { TrainingProgramtype } from "@/types/TrainingProgramType";

type Props = {
  data: TrainingProgramtype
};

export default function EditTrainingProgram({data}: Props) {
  console.log(data)
  return (
    <>
        <Banner
            title="Training Program/Edit"
            btnKembali
            urlKembali="/admin/training-program"
        />
       <Card className="mt-5">
            <form action={handleUpdate}>
              <input type="hidden" name="id" value={data.id} />
            <Input
                    label="Program name"
                    name="name"
                    type="text"
                    defaultValue={data.name}
                />
                <div className="flex justify-end mt-5">
                    <Button className="w-32" type="submit">Submit</Button>
                </div>
            </form>
       </Card>
    </>
  );
}
