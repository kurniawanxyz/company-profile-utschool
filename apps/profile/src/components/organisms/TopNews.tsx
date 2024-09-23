"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { NewsCard, SectionTitle } from "../molecules"
import { useQuery } from '@tanstack/react-query'
import { NewsFetcher } from "@/services"




type Props = {}

export default function TopNews({ }: Props) {

  const { data, error, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: NewsFetcher.getNews
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">Error loading news</div>
      </div>
    );
  }

  return (

    <article className="w-full bg-black min-h-screen py-10 px-10">
      <SectionTitle title="Berita & Aktifitas" showImage={false} />
      <div className="carousel w-full flex gap-3">
        {data.map((newsItem: any, index: number) => (
          <div key={index} id={`item${index + 1}`} className="carousel-item w-full grid grid-cols-2 gap-2">
            <NewsCard title={newsItem.title} content={newsItem.content} />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {data.map((_: any, index: number) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>
        ))}
      </div>
    </article>
  )
}