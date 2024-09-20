"use client";

import Banner from "@/components/elements/Banner";
import SearchInput from "@/components/fragments/SearchInput";
import useModalStore from "@/stores/useModalStore";
import { linkPaginate, usePaginateStore } from "@/stores/usePaginateStore";
import { NewsType } from "@/types/NewsType";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import {format} from "date-fns"

type Props = {};

const formatDate = (dateString:string) => {
  return format(new Date(dateString), 'PPPpp'); // Contoh format: "Sep 20, 2024 at 10:20 AM"
};

function NewsPage({}: Props) {
  const [search, setSearch] = useState<string>();
  const { fetchPaginateData, paginate, setPaginateData, handlePaginate } =
    usePaginateStore();
  const { openDeleteModal, isDeleted } = useModalStore();
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();

  useEffect(() => {
    fetchPaginateData(`/admin/news`);
  }, [fetchPaginateData, isDeleted]);

  function handleSubmitSearch() {
    const url = `${paginate.path}?query=${search}`;
    setPaginateData(url);
  }

  return (
    <>
      <Banner title="News" btnTambah urlTambah="/admin/news/create" />

      <SearchInput
        className="mt-3"
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmitSearch}
      />
<table className="table w-full mt-3">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-2">No</th>
            <th className="p-2">Title</th>
            <th className="p-2">Created At</th>
            <th className="p-2">Visibility</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginate.data.length == 0 && (
            <tr
              className="bg-slate-400 w-full text-slate-200 text-center"
              key={`news`}
            >
              <td className="border p-2" colSpan={4}>
                Data was not found
              </td>
            </tr>
          )}
          {paginate.data.map((item: NewsType, index: number) => (
            <tr
              className="bg-slate-400 w-full text-slate-200 text-center"
              key={`news-${index}`}
            >
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{formatDate(item.created_at)}</td>
              <td className="border p-2">{item.visibility === 0 ? "Private" : "Public"}</td>
              <td className="border p-2">
                <div className="flex justify-center gap-8">
                  <button
                    onClick={() =>
                      openDeleteModal("/admin/news/" + item.id)
                    }
                    className="hover:text-red-500 delay-75 transition-all text-xl"
                  >
                    <FaTrashCan />
                  </button>
                  <button
                    onClick={() =>
                      router.push("news/edit/" + item.id)
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
    </>
  );
}

export default NewsPage;
