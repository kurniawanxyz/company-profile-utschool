"use client"

import { NewsFetcher } from "@/services";
import { News, NewsApiResponse, PaginationLink } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Button, Img } from "../atoms";
import { useState } from "react";

export default function AllNews() {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, error, isLoading } = useQuery<NewsApiResponse>({
        queryKey: ['all-news', currentPage],
        queryFn: () => NewsFetcher.getAllNews(currentPage)
    });

    if (isLoading) {
        return (
            <div className='px-24 py-20 mt-10'>
                <h2 className='text-2xl font-bold'>Berita Lainnya</h2>
                <div className="grid grid-cols-2 gap-5 mt-3">
                    <div className="w-full h-40 rounded skeleton">
                    </div>
                    <div className="w-full h-40 rounded skeleton">
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='px-24 mt-10'>
                <div className="text-red-500 text-lg">Error loading news</div>
            </div>
        );
    }

    const { current_page, prev_page_url, next_page_url, links } = data?.data || {};

    return (
        <div className='px-4 md:px-24 mt-10'>
            <h2 className='text-2xl font-bold'>Berita Lainnya</h2>
            <div className="grid grid-cols-2 gap-5 mt-3">
                {data && data.data.data.map((news: News, index: number) => (
                    <div key={index} className='w-full h-auto md:h-40 border border-slate-400 rounded relative overflow-hidden flex flex-col md:flex-row'>
                        <Img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${news.thumbnail}`} alt={news.title} className='object-cover object-center w-full md:w-1/3 h-40 md:h-full' />
                        <div className='w-full md:w-2/3 p-4 flex flex-col justify-between'>
                            <div>
                                <h3 className='text-xl font-bold'>{news.title}</h3>
                                <p className='text-sm text-gray-700 mt-1'>{news.description}</p>
                            </div>
                            <div className='mt-2 text-right'>
                                <p className='text-xs text-gray-500'>{new Date(news.created_at).toLocaleDateString()}</p>
                            </div>
                            <div className='mt-2 text-right'>
                                <Button
                                    variants='default'
                                    className='px-4 py-2 rounded'
                                    onClick={() => {
                                        window.location.href = `/news/${news.id}`;
                                    }}
                                >
                                    Baca Berita
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10 space-x-2 pb-10 ">
                <button
                    className="px-3 py-2 w-10 h-10 bg-primary text-black rounded-full"
                    onClick={() => prev_page_url && setCurrentPage(currentPage - 1)}
                    disabled={!prev_page_url}
                >
                    &lt;
                </button>
                {links && links.slice(1, -1).map((link: PaginationLink, index: number) => (
                    <button
                        key={index}
                        className={`px-3 py-2 w-10 h-10 ${link.active ? 'bg-primary text-black' : 'bg-slate-800 text-black'} rounded-full`}
                        onClick={() => link.url && setCurrentPage(Number(new URL(link.url).searchParams.get("page")))}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
                <button
                    className="px-3 py-2 w-10 h-10 bg-primary text-black rounded-full"
                    onClick={() => next_page_url && setCurrentPage(currentPage + 1)}
                    disabled={!next_page_url}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
