export default function VideoBanner() {
  return (
    <article className="p-20">
        <video controls loop className="rounded">
            <source src="/videos/2.mp4" />
        </video>
    </article>
  )
}