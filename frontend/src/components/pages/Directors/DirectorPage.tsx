"use client"
import { DirectorType } from "@/app/types/DirectorType"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import DataNotFound from "@/components/fragments/DataNotFound"
import useModalStore from "@/stores/useModalStore"
import { usePaginateStore } from "@/stores/usePaginateStore"
import Image from "next/image"
import { useEffect } from "react"
import {FaPen} from "react-icons/fa"
import { FaTrashCan } from "react-icons/fa6"
type Props = {}

const DirectorPage = (props: Props) => {

  const {fetchPaginateData, paginate} = usePaginateStore()
  const { openDeleteModal, isDeleted} = useModalStore();
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  useEffect(()=>{
    fetchPaginateData('/admin/director')
  },[fetchPaginateData,isDeleted])


  return (
    <>
      <Banner
          title="Directors"
          btnTambah={true}
          urlTambah="/admin/directors/create"
      />

    {
      paginate.data.length == 0 && <DataNotFound className="mt-5"/>
    }

    <div className="grid grid-cols-4 gap-3 mt-5">
      {
        paginate.data.length > 0 &&
        (
          paginate.data.map((item: DirectorType,index:number)=>(
            <Card key={index} className="hover:shadow-xl hover:scale-105 delay-75 transition-all group ">
              <Image
                src={`${backendurl+item.photo_profile}`}
                alt={item.name}
                width={200}
                height={200}
                className="rounded w-full h-60 object-cover bg-top  mx-auto mt-3"
              />
              <div className="w-full  rounded">
                <h2 className="text-slate-500 text-lg font-semibold text-center">{item.name}</h2>
                <p className="text-slate-400 text-center">{item.position}</p>
              </div>
              <div className="w-full rounded h-10 bg-slate-900 flex justify-around mt-5">
                <button className="flex items-center gap-1 hover:text-primary cursor-pointer">
                  <FaPen/> Edit
                </button>
                <button onClick={()=>openDeleteModal(`/admin/director/${item.id}`)} className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                  <FaTrashCan/> Delete
                </button>
              </div>
            </Card>
          ))
        ) 

      }
    </div>
    </>
  )
}


export default DirectorPage