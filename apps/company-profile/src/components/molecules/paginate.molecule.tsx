"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SetStateAction } from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from '../ui/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Paginate as PaginateType } from '@/types/paginate';
// import useIsMobile from '@/hooks/useInMobile';

const Paginate = ({
  data,
  setPage
}: {
  data: PaginateType<any>,
  setPage: SetStateAction<any>
}) => {
  // const isMobile = useIsMobile();

  // const mobileLinks = [
  //   data.links[0], // Tombol Prev
  //   ...data.links.slice(1, 4), // 3 indeks pertama
  //   ...data.links.slice(-2), // 2 indeks terakhir
  //   data.links[data.links.length - 1] // Tombol Next
  // ];

  const linksToDisplay = data.links;

  return (
    <Pagination className='mt-10'>
      <PaginationContent className='gap-5'>
        {
          linksToDisplay.map((item, index) => (
            <React.Fragment key={`paginate-news-${index}`}>
              {index === 0 && (
                <PaginationItem>
                  <PaginationLink
                    className={cn('cursor-pointer', item.active && 'bg-primary')}
                    onClick={() => item.url && setPage((old: number) => Math.max(old - 1, 1))}
                  >
                    <FaArrowLeft />
                  </PaginationLink>
                </PaginationItem>
              )}
              {(item.url == null && item.label === "...") && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {index === (linksToDisplay.length - 1) && (
                <PaginationItem>
                  <PaginationLink
                    className={cn('cursor-pointer', item.active && 'bg-primary')}
                    onClick={() => item.url && setPage((old: number) => old + 1)}
                  >
                    <FaArrowRight />
                  </PaginationLink>
                </PaginationItem>
              )}
              {(index !== 0 && index !== (linksToDisplay.length - 1) && item.label !== "..." && item.url != null) && (
                <PaginationItem>
                  <PaginationLink
                    className={cn('cursor-pointer', item.active && 'bg-primary')}
                    onClick={() => item.url && setPage(Number(item.label))}
                  >
                    {item.label}
                  </PaginationLink>
                </PaginationItem>
              )}
            </React.Fragment>
          ))
        }
      </PaginationContent>
    </Pagination>
  );
};

export default Paginate;
