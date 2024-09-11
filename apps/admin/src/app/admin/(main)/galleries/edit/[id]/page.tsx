import { getDataAction } from '@/actions/CommonAction'
const EditGalleryPage = dynamic(()=>import('@/components/pages/gallery/EditGalleryPage'))
import { GalleriesType } from '@/types/GalleriesType'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        id: string
    }
}


export default async function EditGalleryRoute({ params }: Props) {
    const [statusList,,listCategory] = await getDataAction("/admin/list/category")
    const [status,,data] = await  getDataAction(`/admin/gallery/${params.id}`)
    if(!status || !statusList){
        notFound()
    }
    console.log({listCategory})
   
    return <EditGalleryPage list={listCategory} data={data as GalleriesType} />
}