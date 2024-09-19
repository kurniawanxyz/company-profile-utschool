"use client";
import Banner from "@/components/elements/Banner";
import SearchInput from "@/components/fragments/SearchInput";
import useModalStore from "@/stores/useModalStore";
import { linkPaginate, usePaginateStore } from "@/stores/usePaginateStore";
import { ScheduleType } from "@/types/ScheduleType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/elements";

type Props = {};

export default function SchedulePage({}: Props) {
  const [search, setSearch] = useState<string>();
  const { fetchPaginateData, paginate, setPaginateData, handlePaginate } =
    usePaginateStore();
  const { openDeleteModal, isDeleted } = useModalStore();
  const router = useRouter();

  useEffect(() => {
    fetchPaginateData(`/admin/registration/schedule`);
  }, [fetchPaginateData, isDeleted]);

  function handleSubmitSearch() {
    const url = `${paginate.path}?query=${search}`;
    setPaginateData(url);
  }

  return (
    <>
      <Banner
        title="Enrollment Schedule"
        btnTambah
        urlTambah="/admin/enrollment-schedule/create"
      />

<div className="flex w-full justify-between md:items-center flex-col md:flex-row gap-3 mt-3">
      <SearchInput
        className=""
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmitSearch}
      />
    <Button onClick={()=>router.push("/admin/enrollment-schedule/auto-approval")} className="w-40">Auto Approval</Button>
</div>



      <table className="table w-full mt-3">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-2">No</th>
            <th className="p-2">Learning Point</th>
            <th className="p-2">Training Program/Batch</th>
            <th className="p-2">Start Date</th>
            <th className="p-2">End Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginate.data.length == 0 && (
            <tr
              className="bg-slate-400 w-full text-slate-200 text-center"
              key={`enrollment-schedule`}
            >
              <td className="border p-2" colSpan={6}>
                Data was not found
              </td>
            </tr>
          )}
          {paginate.data &&
            paginate.data.map((item: ScheduleType, index: number) => (
              <tr
                className="bg-slate-400 w-full text-slate-200 text-center"
                key={`enrollment-schedule-${index}`}
              >
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.learning_point?.name}</td>
                <td className="border p-2">
                  {item.training_program?.name}/{item.batch?.number}
                </td>
                <td className="border p-2">{item.start}</td>
                <td className="border p-2">{item.end}</td>
                <td className="border p-2">
                  <div className="flex justify-center gap-8">
                    <button
                      onClick={() =>
                        router.push("enrollment-schedule/participants/" + item.id)
                      }
                      className="hover:text-green-600 delay-75 transition-all text-xl"
                    >
                      <FaUser />
                    </button>

                    <button
                      onClick={() =>
                        router.push("enrollment-schedule/edit/" + item.id)
                      }
                      className="hover:text-primary delay-75 transition-all text-xl"
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() =>
                        openDeleteModal(
                          "/admin/registration/schedule/" + item.id
                        )
                      }
                      className="hover:text-red-500 delay-75 transition-all text-xl"
                    >
                      <FaTrashCan />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex gap-3 border justify-center mt-4">
        {paginate.links &&
          paginate.data.length > 0 &&
          paginate.links.map((item: linkPaginate, index: number) => (
            <button
              onClick={() =>
                item.url && handlePaginate(item.url, "query", search)
              }
              className={`${twMerge("bg-slate-700/80 hover:bg-slate-700 shadow rounded-full p-2 w-10 h-10 duration-75 ease-in-out transition-all", item.active && "bg-primary/80 hover:bg-primary", item.url === null && "opacity-50 cursor-not-allowed")}`}
              key={`button-paginate-${index}`}
              disabled={item.url === null}
            >
              {index != 0 && index != paginate.links.length - 1 && item.label}
              {index === 0 && "<"}
              {index === paginate.links.length - 1 && ">"}
            </button>
          ))}
      </div>
    </>
  );
}
