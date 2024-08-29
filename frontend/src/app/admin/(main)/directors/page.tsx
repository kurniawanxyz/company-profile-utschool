import handleMetadata from "@/utils/handleMetadata"
import { Metadata } from "next"
import dynamic from "next/dynamic"

const DirectorPage = dynamic(()=>import('@/components/pages/Directors/DirectorPage'))

type Props = {}

export const metadata:Metadata = handleMetadata({title:"UTSCHOOL || Directors"})

const DirectorRoute = (props: Props) => {
  return <DirectorPage/>
}

export default DirectorRoute