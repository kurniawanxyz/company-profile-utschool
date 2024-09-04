"use client"

import Banner from "@/components/elements/Banner"
import useModalStore from "@/stores/useModalStore";
import { usePaginateStore } from "@/stores/usePaginateStore";
import { NewsType } from "@/types/NewsType";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {}

function NewsPage({}: Props) {

  const [search,setSearch] = useState<string>('');
  const { fetchPaginateData, paginate, setPaginateData, handlePaginate } = usePaginateStore();
  const { openDeleteModal, isDeleted } = useModalStore();
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  useEffect(() => {
    fetchPaginateData(`/admin/news`);
  }, [fetchPaginateData, isDeleted]);


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
            title="News"
            btnTambah
            urlTambah="/admin/news/create"
        />
        
        {
          (paginate.data.length > 0 && paginate.links.length > 0) && 
          paginate.data.map((item:NewsType,index:number)=>(
            <div dangerouslySetInnerHTML={{__html:item.content}} key={index}/>
          ))
        }
    </>
  )
}

export default NewsPage