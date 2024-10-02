"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionTitle } from "../molecules";
import { useQuery } from '@tanstack/react-query';
import { NewsFetcher } from "@/services";
import { News } from "@/types";
import { useState, useEffect } from "react";
import { Button, Img } from "../atoms";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const NewsCard = dynamic(() => import('../molecules/NewsCard'),{ssr:false});
type Props = {};

export default function TopNews({ }: Props) {
  const router = useRouter();  
  const { data, error, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: NewsFetcher.getNews
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(data.length / itemsPerPage) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(data.length / itemsPerPage) - 1 ? 0 : prevIndex + 1));
  };

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

  if (!data || data.length === 0) {
    return (
      <div className="flex relative items-center justify-center bg-black min-h-screen flex-col px-10 py-10" >
        <SectionTitle title="Berita & Aktifitas" showImage={false} />
        <Img src="/images/illustrations/1.png" width={1000} alt="No news available" className=" md:w-1/4 mt-10" />
        <div className="text-white text-lg -mt-5">No news available</div>
      </div>
    );
  }

  return (
    <article className="relative w-full bg-black min-h-screen py-10 px-10">
      <SectionTitle title="Berita & Aktifitas" showImage={false} />
      <div className="relative w-full flex items-center mt-5">
        <button onClick={handlePrev} className="absolute left-0 z-10 p-2 bg-gray-800 rounded-full">
          <FaChevronLeft className="text-white" />
        </button>
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 gap-3"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {data.map((newsItem: News, index: number) => (
              <div key={index} className="w-full flex-shrink-0 h-full" style={{ width: `${100 / itemsPerPage}%` }}>
                <NewsCard title={newsItem.title} backgroundImageUrl={newsItem.thumbnail} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="absolute right-0 z-10 p-2 bg-gray-800 rounded-full">
          <FaChevronRight className="text-white" />
        </button>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-xs ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Button onClick={()=> router.push("/news")} className="mx-auto block mt-5">Lihat Selengkapnya</Button>
    </article>
  );
}