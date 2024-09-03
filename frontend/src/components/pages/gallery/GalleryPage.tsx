"use client"
import Banner from '@/components/elements/Banner'
import Card from '@/components/elements/Card'
import DataNotFound from '@/components/fragments/DataNotFound'
import useModalStore from '@/stores/useModalStore'
import { usePaginateStore } from '@/stores/usePaginateStore'
import { GalleriesType } from '@/types/GalleriesType'
import { GalleryCategoriesType } from '@/types/GalleryCategoriesType'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type Props = {
  category: GalleryCategoriesType[]
}

const GalleryPage = ({ category }: Props) => {

  const [search, setSearch] = useState<string>('');
  const { fetchPaginateData, paginate, setPaginateData } = usePaginateStore();
  const { openDeleteModal, isDeleted } = useModalStore();
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  useEffect(() => {
    fetchPaginateData(`/admin/gallery`);
  }, [fetchPaginateData, isDeleted]);


  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleSubmitSearch() {
    const url = `${paginate.path}?query=${search}`
    setPaginateData(url)
  }

  return (
    <>
      <Banner
        title='Galleries'
        btnTambah
        urlTambah='galleries/create'
      />

      <div className='grid grid-cols-3 gap-3 mt-5'>
        {
          (paginate.data.length >= 0 && paginate.links.length >= 0) ?
            paginate.data.map((item: GalleriesType, index: number) => (
              <Zoom key={index}>
                <Card className='h-80 group overflow-hidden relative'>
                  <Image
                    className='h-full w-full object-cover  '
                    src={`${backendurl + item.image_path}`}
                    alt={`${item.gallery_category?.text} ${index}`}
                    width={400}
                    height={400}
                  />
                  <div className='bg-slate-950 w-full flex items-center justify-around left-1/2 -translate-x-1/2 h-16 absolute  delay-150 ease-in-out transition-all bottom-0 translate-y-10 group-hover:-translate-y-0'>
                    <button onClick={() => router.push("/admin/galleries/edit/" + item.id)} className="flex items-center gap-1 hover:text-primary cursor-pointer">
                      <FaPen /> Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(`/admin/gallery/${item.id}`)}
                      className="flex items-center gap-1 hover:text-red-500 cursor-pointer"
                    >
                      <FaTrashCan /> Delete
                    </button>
                  </div>
                </Card>
              </Zoom>
            ))
            : <DataNotFound />
        }
      </div>
    </>
  )
}

export default GalleryPage