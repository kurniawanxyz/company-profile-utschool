import dynamic from "next/dynamic"

const DirectorPage = dynamic(()=>import('@/components/pages/Directors/DirectorPage'))


const DirectorRoute = () => {
  return <DirectorPage/>
}

export default DirectorRoute