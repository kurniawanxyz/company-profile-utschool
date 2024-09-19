"use client";

import { Button, Input } from "@/components/elements";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { handleAutoApproval } from "@/services/ScheduleService";

type Props = {};

export default function AutoApproval({}: Props) {
  return (
    <>
      <Banner
        title="Enrollment Schedule/Approval"
        btnKembali
        urlKembali="/admin/enrollment-schedule"
      />
      <Card className="mt-5">
        <form action={handleAutoApproval}>
          <Input label="File" name="registration_file" type="file" accept=".xls, .xlsx" />
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
