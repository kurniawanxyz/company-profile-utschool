"use client";

import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import MultiSelect, { OptionType } from "@/components/fragments/MultiSelect";
import { SobatType } from "@/types/SobatType";
import handleFetch from "@/utils/handleFetch";
import Select from "react-select";
import { useEffect, useState } from "react";
import { handleCreate } from "@/services/ScheduleService";

export default function CreateSchedulePage() {
  const [options, setOptions] = useState<OptionType[]>([]); // Awalnya set ke array kosong
  const [learningPoint, setLearningPoint] = useState<OptionType[]>([]); // Awalnya set ke array kosong
  const [trainingProgram, setTrainingProgram] = useState<OptionType[]>([]); // Awalnya set ke array kosong

  useEffect(() => {
    (async () => {
      const config = {
        method: "GET",
      };
      const [, , sobat] = await handleFetch(
        "/list/sobat-school",
        config,
        false,
        false,
        false
      );

      const [, , lp] = await handleFetch(
        "/list/learning-point",
        config,
        false,
        false,
        false
      );

      const [, , tp] = await handleFetch(
        "/list/training-program",
        config,
        false,
        false,
        false
      );

      const data = sobat.map((item: SobatType) => ({
        value: item.id,
        label: `${item.name} | ${item.location}`,
      }));

      const datalp = lp.map((item: SobatType) => ({
        value: item.id,
        label: `UTS ${item.name}`,
      }));

      const dataTp = tp.map((item: SobatType) => ({
        value: item.id,
        label: `${item.name}`,
      }));

      setOptions(data); // Set data yang telah diproses
      setLearningPoint(datalp);
      setTrainingProgram(dataTp);
    })();
  }, []);

  console.log(options);

  return (
    <>
      <Banner
        title="Enrollment Schedule/Create"
        btnKembali
        urlKembali="/admin/enrollment-schedule"
      />
      <Card className="mt-5">
        <form action={handleCreate} className="flex flex-col gap-3">
          <div className="">
            <label className="text-black" htmlFor="learning-point">
              Learning Point
            </label>
            <Select
              id="learning-point"
              name="learning_point_id"
              placeholder="Chose Learning Point"
              className="text-black"
              options={learningPoint}
            />
          </div>
          <div className="">
            <label className="text-black" htmlFor="learning-point">
              Training Program
            </label>
            <Select
              id="learning-point"
              name="training_program_id"
              placeholder="Chose Training Program"
              className="text-black"
              options={trainingProgram}
            />
          </div>
          <Input label="Start Date" name="start" type="date" />
          <Input label="End Date" name="end" type="date" />
          <MultiSelect
            label="Test Location"
            name="sobat_school"
            options={options as OptionType[]}
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
