import { DirectorType } from "@/types/DirectorType"
import handleActionFetch from "@/utils/handleActionFetch"
import handleMetadata from "@/utils/handleMetadata"
import { Metadata } from "next"
import dynamic from "next/dynamic"

const DirectorPage = dynamic(()=>import('@/components/pages/Directors/DirectorPage'))


const DirectorRoute = () => {
  return <DirectorPage/>
}

export default DirectorRoute