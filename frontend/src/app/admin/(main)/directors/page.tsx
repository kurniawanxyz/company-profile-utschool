import Banner from "@/components/elements/Banner"

type Props = {}

const DirectorsRoute = (props: Props) => {
  return (
    <Banner
        title="Directors"
        btnTambah={true}
        urlTambah="/admin/directors/create"
    />
  )
}

export default DirectorsRoute