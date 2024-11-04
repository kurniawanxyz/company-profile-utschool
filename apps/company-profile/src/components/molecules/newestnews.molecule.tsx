"use client"
import { useNews } from '@/hooks/useNews'
import React from 'react'

export default function NewestNewsSection() {

  const {isLoading} = useNews()

  if(isLoading){
    return (
      <article className="w-8/12 border bg-white/80 px-10 py-10">
        <h2 className="text-4xl font-bold text-slate-700 text-center">Berita Terbaru</h2>
        <div className="flex flex-col items-center justify-center h-96">
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
          <div className="animate-pulse w-4/12 h-12 bg-gray-200 rounded-full mb-5"></div>
        </div>
      </article>
    )
  }

  return (
    <article className="w-8/12 border bg-white/80 px-10 py-10">
      <h2 className="text-4xl font-bold text-slate-700 text-center">Berita Terbaru</h2>

    </article>

)
}
