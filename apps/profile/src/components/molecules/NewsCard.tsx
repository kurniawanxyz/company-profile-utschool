import { Button } from "../atoms"

type Props = {}

export default function NewsCard({}: Props) {
  return (
    <article
      className="rounded bg-cover object-cover bg-center relative"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 blur-sm"></div>
      <div className="absolute bottom-5  left-5">
       <h3 className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae.</h3>
        <Button variants="default" size="sm">Baca berita</Button>
      </div>
    </article>
  )
}