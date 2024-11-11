"use client"
import { useNews } from '@/hooks/useNews'
import React, { useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { CardNews, Paginate } from '../molecules'


export default function ListNews() {

    const [page, setPage] = useState(1)

    const { isLoading, isSuccess, data, isFetching } = useNews(page)


    if (isLoading || isFetching) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen mt-20 gap-10">
                {
                    [1,2,3,4,5,6].map((index: number) => (
                        <Skeleton key={index} className="shadow-md rounded h-[450px] cursor-pointer">
                        </Skeleton>
                    ))
                }
            </div>
        )
    }

    if (isSuccess) {
        const news = data.data


        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen mt-20 gap-10'>
                    {
                        news && news.data.map((item, index) => (
                            <CardNews
                                news={item}
                                key={index}
                            />
                        ))
                    }
                </div>
                <Paginate data={data.data} setPage={setPage}/>
            </>
        )
    }
}
