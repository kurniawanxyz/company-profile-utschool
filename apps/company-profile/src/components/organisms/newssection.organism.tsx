"use client";
import dynamic from 'next/dynamic';
import { AiOutlineReload } from "react-icons/ai";
import { Button } from '../ui/button';

const InstagramEmbed = dynamic(() => import('react-social-media-embed').then(mod => mod.InstagramEmbed), { ssr: false });

export default function NewsSection() {
    return (
        <section
            className="flex w-full h-[80vh]">
            <div
                style={{
                    backgroundImage: "url('/images/assets/background.JPG')",
                }}
                className="flex w-full h-full bg-contain">
                <article className="w-4/12 border bg-primary/80 px-10 py-10">
                    <h2 className="text-4xl font-bold text-slate-700 text-center">Sosial Media</h2>
                    <InstagramEmbed url='https://www.instagram.com/p/DBKvWdAPMfo/' width={300} height={300} className='rounded-3xl'/>
                    <Button><AiOutlineReload/></Button>
                </article>
                <article className="w-8/12 border bg-white/80 px-10 py-10">
                    <h2 className="text-4xl font-bold text-slate-700 text-center">Berita Terbaru</h2>
                </article>
            </div>
        </section>
    )
}
