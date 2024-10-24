import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

type Logo = {
    src: string,
    alt?: string
    className?: string,
    width?: number,
    height?: number,
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "className" | "width" | "height">

export default function Img({src,alt = "Image", className, width = 500, height = 500, ...rest }:Logo) {
  return <Image src={src} alt={alt} className={cn("",className)} width={width} height={height} {...rest}  />
}