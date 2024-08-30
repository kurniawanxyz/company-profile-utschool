import { getDataAction } from "@/actions/CommonAction"
import EditGalleryCategories from "@/components/pages/GalleryCategories/EditGalleryCategories"

type Props = {
    params:{
        id:string
    }
}

const page = async(props: Props) => {
    const [,,data] = await getDataAction('/admin/gallery-category/'+props.params.id)
  return <EditGalleryCategories data={data}/>
}

export default page