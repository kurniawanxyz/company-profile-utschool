"use client"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import SearchInput from "@/components/fragments/SearchInput";
import useModalStore from "@/stores/useModalStore";
import { linkPaginate, usePaginateStore } from "@/stores/usePaginateStore";
import { AdminType } from "@/types/AdminType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type Props = {}

export default function AdminPage({}: Props) {

  const [search, setSearch] = useState<string>();
  const { fetchPaginateData, paginate, setPaginateData, handlePaginate } =
    usePaginateStore();
  const { openDeleteModal, isDeleted } = useModalStore();
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();

  useEffect(() => {
    fetchPaginateData(`/admin/users`);
  }, [fetchPaginateData, isDeleted]);

  function handleSubmitSearch() {
    const url = `${paginate.path}?query=${search}`;
    setPaginateData(url);
  }

  return (
    <>
        <Banner
            title="Manage Admin"
            btnTambah
            urlTambah="/admin/manage-admin/create"
        />
        <Card className="mt-5">
        <SearchInput
        className="mt-3"
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmitSearch}
      />

      <table className="table w-full mt-3">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-2">No</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginate.data.length == 0 && (
            <tr
              className="bg-slate-400 w-full text-slate-200 text-center"
              key={`manage-admin`}
            >
              <td className="border p-2" colSpan={4}>
                Data was not found
              </td>
            </tr>
          )}
          {paginate.data.map((item: AdminType, index: number) => (
            <tr
              className="bg-slate-400 w-full text-slate-200 text-center"
              key={`manage-admin-${index}`}
            >
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.role}</td>
              <td className="border p-2">
                <div className="flex justify-center gap-8">
                  <button
                    onClick={() =>
                      openDeleteModal("/admin/users/" + item.id)
                    }
                    className="hover:text-red-500 delay-75 transition-all text-xl"
                  >
                    <FaTrashCan />
                  </button>
                  <button
                    onClick={() =>
                      router.push("manage-admin/edit/" + item.id)
                    }
                    className="hover:text-primary delay-75 transition-all text-xl"
                  >
                    <FaPen />
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
        </Card>
    </>
  )
}