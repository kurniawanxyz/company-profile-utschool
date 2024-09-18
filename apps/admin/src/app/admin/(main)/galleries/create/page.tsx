import { getDataAction } from "@/actions/CommonAction"
import CreateGalleryPage from "@/components/pages/gallery/CreateGalleryPage"

type Props = {}

const page = async(props: Props) => {
    const [,,listCategory] = await getDataAction("/list/category")
    return <CreateGalleryPage list={listCategory}/>
}

export default page