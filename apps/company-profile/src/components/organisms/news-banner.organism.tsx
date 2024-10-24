import { Heading } from "../atoms";
import TopNews from "./top-news.organism";

export default function NewsBanner() {
    return (
        <article className="p-20">
            <Heading className="flex text-primary flex-col"><span className="text-xl">Berita dan Aktifitas</span><span className="text-black text-3xl">Berita Terbaru</span></Heading>
            <TopNews/>
        </article>
    )
}