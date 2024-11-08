"use client"
import { useNews } from '@/hooks/useNews'
import React, { useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { CardNews } from '../molecules'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../ui/pagination'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { cn } from '@/lib/utils'



export default function ListNews() {

    const [page, setPage] = useState(1)

    const { isLoading, isSuccess, data, isFetching, isPlaceholderData } = useNews(page)
    function handleSetPage(number: number) {
        if (!isPlaceholderData) {
            setPage(number)
        }
    }

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
                <div className='grid grid-cols-1 md:grid-cols-3 min-h-screen mt-20 gap-10'>
                    {
                        news && news.data.map((item, index) => (
                            <CardNews
                                news={item}
                                key={index}
                            />
                        ))
                    }
                </div>
                <Pagination className='mt-10'>
                    <PaginationContent className='gap-5'>
                        {
                            news.links.map((item, index) => (
                                <React.Fragment key={index}>
                                    {
                                        index === 0 && (
                                            <PaginationItem
                                                key={index}>
                                                <PaginationLink
                                                    className={cn('cursor-pointer', item.active && 'bg-primary')}
                                                    onClick={() => item.url && setPage(old => Math.max(old - 1, 1))}
                                                >
                                                    <FaArrowLeft />
                                                </PaginationLink>
                                            </PaginationItem>
                                        )
                                    }
                                    {
                                        index === (news.links.length - 1) && (
                                            <PaginationItem
                                            key={index}>
                                            <PaginationLink
                                                className={cn('cursor-pointer', item.active && 'bg-primary')}
                                                onClick={() => item.url && setPage(old => old+1)}
                                            >
                                            <FaArrowRight />
                                            </PaginationLink>
                                        </PaginationItem>
                                        )
                                    }
                                    {
                                        index != 0 && index != (news.links.length - 1) && (
                                            <PaginationItem
                                                key={index}>
                                                <PaginationLink

                                                    className={cn('cursor-pointer', item.active && 'bg-primary')}
                                                    onClick={() => {
                                                        console.log(index)
                                                        handleSetPage((index))
                                                    }}
                                                >
                                                    {item.label}
                                                </PaginationLink>
                                            </PaginationItem>
                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </PaginationContent>
                </Pagination>
            </>
        )
    }
}
