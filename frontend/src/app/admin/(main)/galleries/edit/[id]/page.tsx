import { getDataAction } from '@/actions/CommonAction'
import EditGalleryPage from '@/components/pages/gallery/EditGalleryPage'
import { notFound } from 'next/navigation'

type Props = {
    params:{
        id: string
    }
}

export default async function EditGalleryRoute({params}: Props) {
    const [status,,data] = await getDataAction(`/admin/gallery/${params.id}`)
    if(!status){
        notFound()
    }
  return <EditGalleryPage data={data} />
}