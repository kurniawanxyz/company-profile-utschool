"use client";
import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { handleCreate } from "@/services/TrainingProgramService";

type Props = {};

export default function CreateTrainingProgram({}: Props) {
  return (
    <>
      <Banner
        title="Training Program/Create"
        btnKembali
        urlKembali="/admin/training-program"
      />
      <Card className="mt-5">
        <form action={handleCreate}>
          <Input label="Program name" name="name" type="text" />
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
