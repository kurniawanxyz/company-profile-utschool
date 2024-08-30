"use client";
import { DirectorType } from "@/types/DirectorType";
import Banner from "@/components/elements/Banner";
import Card from "@/components/elements/Card";
import DataNotFound from "@/components/fragments/DataNotFound";
import SearchInput from "@/components/fragments/SearchInput";
import useModalStore from "@/stores/useModalStore";
import { linkPaginate, usePaginateStore } from "@/stores/usePaginateStore";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const DirectorPage = () => {
  const [search,setSearch] = useState<string>('');
  const { fetchPaginateData, paginate, setPaginateData } = usePaginateStore();
  const { openDeleteModal, isDeleted } = useModalStore();
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  useEffect(() => {
    fetchPaginateData(`/admin/director`);
  }, [fetchPaginateData, isDeleted]);
  
  // useEffect(()=>{
  //   fetchPaginateData(`/admin/director`);    
  // },[search])
  console.log(paginate.current_page)

  function handleChangeSearch(e:ChangeEvent<HTMLInputElement>){
    setSearch(e.target.value)
  }

  function handleSubmitSearch(){
    const url = `${paginate.path}?query=${search}`
    setPaginateData(url)
  }

  return (
    <>
      <Banner
        title="Directors"
        btnTambah={true}
        urlTambah="/admin/directors/create"
      />

      <SearchInput
      onChange={(e)=>handleChangeSearch(e)}
      onSubmit={handleSubmitSearch}
      className="mt-3"
      />

      {paginate.data.length == 0 && <DataNotFound className="mt-5" />}

      <div className="grid grid-cols-4 gap-3 mt-5">
        {paginate.data.length > 0 &&
          paginate.data.map((item: DirectorType, index: number) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:scale-105 delay-75 transition-all group "
            >
              <Image
                src={`${backendurl + item.photo_profile}`}
                alt={item.name}
                width={200}
                height={200}
                className="rounded w-full h-60 object-cover bg-top  mx-auto mt-3"
              />
              <div className="w-full  rounded">
                <h2 className="text-slate-500 text-lg font-semibold text-center">
                  {item.name}
                </h2>
                <p className="text-slate-400 text-center">{item.position}</p>
              </div>
              <div className="w-full rounded h-10 bg-slate-900 flex justify-around mt-5">
                <button onClick={()=>router.push("/admin/directors/edit/"+item.id)} className="flex items-center gap-1 hover:text-primary cursor-pointer">
                  <FaPen /> Edit
                </button>
                <button
                  onClick={() => openDeleteModal(`/admin/director/${item.id}`)}
                  className="flex items-center gap-1 hover:text-red-500 cursor-pointer"
                >
                  <FaTrashCan /> Delete
                </button>
              </div>
            </Card>
          ))}
      </div>
      <div className="flex gap-3 border justify-center mt-4">
        {paginate.links &&
          paginate.links.map((item: linkPaginate, index: number) => (
            <button
              onClick={() => item.url && setPaginateData(item.url)}
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
};

export default DirectorPage;
