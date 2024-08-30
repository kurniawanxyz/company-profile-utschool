import Banner from '@/components/elements/Banner'
type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <>
        <Banner
            title='Galleries'
            btnTambah
            urlTambah='galleries/create'
        />
    </>
  )
}

export default GalleryPage