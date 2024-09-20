import Image, { ImageProps } from 'next/image';
import React from 'react';
import { cn } from '@/utils'; // Untuk menggabungkan className jika menggunakan utility CSS

type Props = {
  className?: string;
  alt?: string; // alt text wajib untuk aksesibilitas
  src: string; // URL gambar
  width?: number; // Lebar gambar
  height?: number; // Tinggi gambar
} & Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>; // Menghindari duplikasi prop

export default function Img({ className, alt = "UT SCHOOL", src, width = 500, height = 500, ...rest }: Props) {
  return (
    <Image
      className={cn(className)} // Gabungkan className jika ada
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest} // Spread properti lain seperti priority, quality, dll.
    />
  );
}
