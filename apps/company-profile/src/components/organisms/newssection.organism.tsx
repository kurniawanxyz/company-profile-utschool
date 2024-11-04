"use client";
import dynamic from 'next/dynamic';
import { HiRefresh } from "react-icons/hi";
import { NewestNewsSection } from '../molecules';

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
                <article className="w-4/12 border bg-primary/80 px-10 py-10 flex flex-col ">
                    <h2 className="text-4xl font-bold text-slate-700">Sosial Media</h2>
                <InstagramEmbed url=''/>
                    <button
                        className='bg-transparent border-0 shadow-none mx-auto mt-10 text-3xl text-white font-bold'
                        onClick={(e) => {
                            const button = e.currentTarget as HTMLButtonElement;
                            button.classList.add('animate-spin');
                            setTimeout(() => {
                                button.classList.remove('animate-spin');
                            }, 1000);
                        }}
                    >
                        <HiRefresh />
                    </button>
                </article>
                <article className="w-8/12 border bg-white/80 px-10 py-10">
                    <NewestNewsSection />
                </article>
            </div>
        </section>
    )
}
