"use client"

import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import MultiSelect, { OptionType } from "@/components/fragments/MultiSelect";
import { handleUpdate } from "@/services/ScheduleService";
import { ScheduleType } from "@/types/ScheduleType";
import { SobatType } from "@/types/SobatType";
import handleFetch from "@/utils/handleFetch";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ActionMeta, SingleValue } from "react-select";

const Select = dynamic(() => import("react-select"), { ssr: false });

type Props = {
  schedule: ScheduleType;
};

export default function EditSchedulePage({ schedule }: Props) {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [learningPoint, setLearningPoint] = useState<OptionType[]>([]);
  const [trainingProgram, setTrainingProgram] = useState<OptionType[]>([]);
  const [selectedLearningPoint, setSelectedLearningPoint] = useState<OptionType | null>(null);
  const [selectedTrainingProgram, setSelectedTrainingProgram] = useState<OptionType | null>(null);
  const [selectedSobat, setSelectedSobat] = useState<OptionType[] | null>(null);

  useEffect(() => {
    (async () => {
      const config = {
        method: "GET",
      };

      const [, , sobat] = await handleFetch("/list/sobat-school", config, false, false, false);
      const [, , lp] = await handleFetch("/list/learning-point", config, false, false, false);
      const [, , tp] = await handleFetch("/list/training-program", config, false, false, false);

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

      if(schedule){
        const selectedSB = schedule.sobat_school.map((item)=>({
          value: item.id,
          label: `${item.name} | ${item.location}`
        }))
        setSelectedSobat(selectedSB as OptionType[])
      }

      setOptions(data);
      setLearningPoint(datalp);
      setTrainingProgram(dataTp);

      if (schedule && datalp.length > 0) {
        const defaultLearningPoint = datalp.find((item: OptionType) => item.value === schedule.learning_point_id);
        setSelectedLearningPoint(defaultLearningPoint || null);
      }

      if (schedule && dataTp.length > 0) {
        const defaultTrainingProgram = dataTp.find((item: OptionType) => item.value === schedule.training_program_id);
        setSelectedTrainingProgram(defaultTrainingProgram || null);
      }
    })();
  }, [schedule]);

  const handleLearningPointChange = (newValue: unknown, actionMeta: unknown) => {
    setSelectedLearningPoint(newValue as OptionType);
  };

  const handleTrainingProgramChange = (newValue: unknown, actionMeta: unknown) => {
    setSelectedTrainingProgram(newValue as OptionType);
  };

  console.log(schedule)

  return (
    <>
      <Banner
        title="Enrollment Schedule/Create"
        btnKembali
        urlKembali="/admin/enrollment-schedule"
      />
      <Card className="mt-5">
        <form action={handleUpdate} className="flex flex-col gap-3">
          <input type="hidden" name="id" value={schedule.id} />
          <div className="">
            <label className="text-black" htmlFor="learning-point">
              Learning Point
            </label>
            <Select
              id="learning-point"
              name="learning_point_id"
              placeholder="Choose Learning Point"
              className="text-black"
              value={selectedLearningPoint}
              onChange={handleLearningPointChange}
              options={learningPoint}
            />
          </div>
          <div className="">
            <label className="text-black" htmlFor="training-program">
              Training Program
            </label>
            <Select
              id="training-program"
              name="training_program_id"
              placeholder="Choose Training Program"
              className="text-black"
              value={selectedTrainingProgram}
              onChange={handleTrainingProgramChange}
              options={trainingProgram}
            />
          </div>
          <Input label="Start Date" name="start" type="date" defaultValue={schedule.start} />
          <Input label="End Date" name="end" type="date" defaultValue={schedule.end} />
          <MultiSelect
            label="Test Location"
            name="sobat_school"
            options={options as OptionType[]}
            defaultVal={selectedSobat as OptionType[]}
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
