"use client"
import { NewsFetcher } from "@/services";
import { News } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../atoms";
import { useRouter } from "next/navigation";

type Props = {}

export default function RandomNews({ }: Props) {
    const router = useRouter();
    const { data, error, isLoading } = useQuery<News[]>({
        queryKey: ['random-news'],
        queryFn: NewsFetcher.getRandomNews
    });

    if (isLoading) return (
        <div className="grid grid-cols-3 animate-pulse mt-5">
            <div className="w-full h-screen rounded col-span-2 bg-gray-300"></div>
            <div className="w-full h-screen rounded">
                <div className="w-full h-full border top-20 sticky bg-gray-300"></div>
            </div>
        </div>
    )

    if (error) return <div>Error loading news</div>

    return (
        <div className="grid grid-cols-1 gap-4 mt-5">
            {data?.map((newsItem, index) => (
                <div
                    key={index}
                    className="w-full cursor-pointer hover:shadow-2xl bg-slate-950 shadow-primary h-auto md:h-32 border border-slate-400 rounded relative overflow-hidden flex flex-col md:flex-row-reverse transition-transform duration-300 hover:scale-105"
                >
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${newsItem.thumbnail}`} alt={newsItem.title} className="object-cover object-center w-full md:w-1/3 md:h-full" />
                    <div className="w-full md:w-2/3 p-2 flex flex-col justify-between">
                        <div>
                            {/* Title with truncation if it's too long */}
                            <h3 className={`text-md font-bold ${newsItem.title.length > 50 ? 'truncate' : ''}`}>
                                {newsItem.title}
                            </h3>

                            {/* Description with conditional truncation at character 100 */}
                            <p className="text-xs text-gray-700 mt-1">
                                {newsItem.description.length > 100
                                    ? `${newsItem.description.substring(0, 80)}...`
                                    : newsItem.description}
                            </p>
                        </div>

                        {/* Date with formatted text */}
                        <div className="mt-2 text-right">
                            <p className="text-xs text-gray-500">
                                {new Date(newsItem.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}