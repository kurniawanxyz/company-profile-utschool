import { ListGallery } from "../organisms";

export default function GalleryPage() {
  return (
      <div className='min-h-screen'>
        <header
          className='w-full h-[40vh] bg-center'
          style={{
            backgroundImage: "url('/images/assets/randoms/6.png')"
          }}
        >

        </header>
        <div className='p-20'>
            <h1 className='text-3xl font-bold '>Galeri</h1>
            <p>Rekap kegiatan-kegiatan yang ada di UT School </p>
            <ListGallery/>
        </div>
      </div>
  )
}