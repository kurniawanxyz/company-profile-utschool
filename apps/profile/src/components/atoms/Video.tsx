import { cn } from '@/utils'; // Pastikan path benar
import React, { VideoHTMLAttributes } from 'react';

type Props = {
  className?: string;
} & VideoHTMLAttributes<HTMLVideoElement>;

export default function Video({ className, ...rest }: Props) {
  return (
    <video
      className={cn(className)} // Gabungkan className dengan cn utility
      {...rest} // Spread semua props video lainnya seperti src, controls, etc.
    />
  );
}
