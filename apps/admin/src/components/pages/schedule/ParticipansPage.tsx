/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import { handleApproved, handleExport } from "@/services/ScheduleService";
import { RegistrationForm, ScheduleType } from "@/types/ScheduleType";
import { useRouter } from "next/navigation";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Button } from "@/components/elements";
import SearchInput from "@/components/fragments/SearchInput";
import handleFetch from "@/utils/handleFetch";

type Props = {
  id: string;
};

export default function ParticipansPage({ id }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [schedule, setSchedule] = useState<ScheduleType>();

  // Set the initial data
  useEffect(() => {
    if (id) {
      fetchSchedule();
    }
  }, [id, search]);

  const fetchSchedule = async () => {
    const option = {
      method: "GET"
    };
    const [,,data] = await handleFetch(`/admin/registration/schedule/${id}?query=${search}`, option, false, true, false);
    setSchedule(data);
  };

  // Handle search submit
  const handleSubmitSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchSchedule();
  };

  // Function to handle approval action
  const handleApprovalAction = async (participantId: string, status: string) => {
    try {
      await handleApproved(participantId, status as "approved" | "rejected");

      setSchedule((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          registration_form: prev.registration_form.map((item) =>
            item.id === participantId ? { ...item, approval: status } : item
          ),
        };
      });
    } catch (error) {
      console.error("Failed to update approval:", error);
    }
  };

  return (
    <>
      <Banner
        title="Enrollment Schedule/Participants"
        btnKembali
        urlKembali="/admin/enrollment-schedule"
      />

      {/* Search Input */}
      <SearchInput
        className="mt-3"
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmitSearch}
      />

      <Card className="mt-5">
        <div className="flex flex-row items-center justify-end">
          <Button 
            onClick={() => handleExport(schedule?.id as string)}
            className="w-32 bg-green-500 hover:bg-green-600"
          >
            Export Data
          </Button>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table w-full mt-3">
            <thead className="bg-slate-900">
              <tr>
                <th className="p-2">No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">NoTelp</th>
                <th className="p-2">Test Location</th>
                <th className="p-2">Approval</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {schedule && schedule.registration_form?.length === 0 && (
                <tr
                  className="bg-slate-400 w-full text-slate-200 text-center"
                  key={`training-program`}
                >
                  <td className="border p-2" colSpan={7}>
                    Data was not found
                  </td>
                </tr>
              )}
              { schedule?.registration_form &&
                schedule.registration_form.map((item: RegistrationForm, index: number) => (
                  <tr
                    className="bg-slate-400 w-full text-slate-200 text-center"
                    key={`training-program-${index}`}
                  >
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.full_name}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.telephone_number}</td>
                    <td className="border p-2">
                      {schedule &&
                        schedule.sobat_school.find((sobat) => sobat.id === item.sobat_school_id)?.name || "-"}
                    </td>
                    <td className="border p-2 justify-center text-2xl">
                      {item.approval === "approved" && (
                        <FaCheckCircle className="text-center mx-auto text-green-300" />
                      )}
                      {item.approval === "rejected" && (
                        <MdCancel className="mx-auto text-red-500" />
                      )}
                      {item.approval !== "rejected" &&
                        item.approval !== "approved" && (
                          <HiQuestionMarkCircle className="mx-auto text-primary" />
                        )}
                    </td>
                    <td className="border p-2">
                      <div className="flex justify-center gap-8">
                        <button
                          onClick={() => handleApprovalAction(item.id, "approved")}
                          className="hover:text-green-500 delay-75 transition-all text-xl"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={() => handleApprovalAction(item.id, "rejected")}
                          className="hover:text-red-500 delay-75 transition-all text-xl"
                        >
                          <ImCross />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
