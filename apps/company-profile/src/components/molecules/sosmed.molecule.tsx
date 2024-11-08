
"use client";
import dynamic from 'next/dynamic';
import { HiRefresh } from "react-icons/hi";
const InstagramEmbed = dynamic(() => import('react-social-media-embed').then(mod => mod.InstagramEmbed), { ssr: false });


export default function SosmedSection() {
    return (
        <article className="w-4/12 border bg-primary/80  py-10">
            <h2 className="text-4xl font-bold text-slate-700 text-center mb-5 flex justify-center flex-col items-center">Sosial Media</h2>
                <InstagramEmbed className='w-20 h-20 mx-auto' url='https://www.instagram.com/p/DBKvWdAPMfo/' width={328} height={500} placeholderDisabled={true} />
            <button
                className='bg-transparent block shadow-none mx-auto mt-10 text-5xl text-white font-bold'
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
    )
}
