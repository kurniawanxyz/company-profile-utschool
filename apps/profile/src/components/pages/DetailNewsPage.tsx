"use client"
import { NewsFetcher } from "@/services";
import { News } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { FaArrowLeft } from 'react-icons/fa';
import { Img } from "../atoms";

type Props = {
  id: string
}

export default function DetailNewsPage({id}: Props) {

  const { data, error, isLoading } = useQuery<News>({
    queryKey: ['detail-news', id],
    queryFn: () => NewsFetcher.getDetailNews(id)
});

  if(isLoading) return (
    <div className="py-32 px-20 grid grid-cols-3 animate-pulse">
      <div className="w-full h-screen col-span-2 bg-gray-300"></div>
      <div className="w-full h-screen p-4">
        <div className="w-full h-full border top-20 sticky bg-gray-300"></div>
      </div>
    </div>
  )

  if(error) return notFound()

  return (
    <div className="py-32 px-20 ">

      <button 
        onClick={() => window.history.back()} 
        className="bg-primary text-black rounded-full p-2 transition duration-300 flex items-center"
      >
        <FaArrowLeft className="" />
      </button>
      <article className="grid grid-cols-3 mt-10">
        <div className="w-full min-h-screen col-span-2">
          <h1 className="text-4xl font-bold mb-4">{data?.title}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Img src="/images/logos/uts/1.png" className="w-24" />
            <span className="text-sm text-gray-500">
          {data?.created_at && new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(data.created_at))}
            </span>
          </div>

          <hr className="my-4" />
          <Img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.thumbnail}`} alt={data?.title} className="w-full h-96 object-cover mb-4" />
          <p className="text-slate-400 text-sm mb-4">{data?.description}</p>
          <hr className="my-4" />
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data?.content as string }} />
          </div>
        </div>
        <div className="w-full min-h-screen px-5">
          <div className="w-full top-20 sticky">
          <h2 className="text-xl text-white text-center bg-black rounded py-2">Berita & Kegiatan</h2>
          </div>
        </div>
      </article>
    </div>
  )
}