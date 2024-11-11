"use client";
import { useSosmed } from '@/hooks/useSosmed';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { HiRefresh } from "react-icons/hi";
import { FacebookEmbed, TikTokEmbed, YouTubeEmbed } from 'react-social-media-embed';
const InstagramEmbed = dynamic(() => import('react-social-media-embed').then(mod => mod.InstagramEmbed), { ssr: false });


export default function SosmedSection() {
    const {isLoading,isSuccess, data} = useSosmed();
    const [current, setCurrent] = useState(0);

    if(isLoading){
        return (
            <div>Loading</div>
        )
    }

    if(isSuccess){
        const sosmed = data.data.at(current);
        return (
            <article className="w-4/12 border bg-primary/80  py-10">
                <h2 className="text-4xl font-bold text-slate-700 text-center mb-5 flex justify-center flex-col items-center">Sosial Media</h2>
                {
                    sosmed?.type === "Instagram" && (
                        <InstagramEmbed url={sosmed.url} className='w-20 h-20 mx-auto' width={328} height={500} placeholderDisabled={true} />
                    )
                }
                {
                    sosmed?.type === "Facebook" && (
                        <FacebookEmbed url={sosmed.url}  className='w-20 h-20 mx-auto' width={328} height={500} placeholderDisabled={true} />
                    )
                }
                {
                    sosmed?.type === "TikTok" && (
                        <TikTokEmbed url={sosmed.url}  className='w-20 h-20 mx-auto' width={328} height={500} placeholderDisabled={true} />
                    )
                }
                {
                    sosmed?.type === "Youtube" && (
                        <YouTubeEmbed url={sosmed.url}  className='w-20 h-20 mx-auto' width={328} height={500} placeholderDisabled={true} />
                    )
                }
                <button
                    className='bg-transparent block shadow-none mx-auto mt-10 text-5xl text-white font-bold'
                    onClick={(e) => {
                        const button = e.currentTarget as HTMLButtonElement;
                        button.classList.add('animate-spin');
                        setTimeout(() => {
                            if(current === (data.data.length - 1)){
                                setCurrent(0);
                            }else{
                                setCurrent(current+1);
                            }
                            button.classList.remove('animate-spin');
                        }, 1000);
                    }}
                >
                    <HiRefresh />
                </button>
            </article>
        )
    }
}
