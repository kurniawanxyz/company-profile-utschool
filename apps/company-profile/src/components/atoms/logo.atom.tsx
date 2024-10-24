import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

type Logo = {
    className?: string,
    width?: number,
    height?: number,
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "className" | "width" | "height">

export default function Logo({className,width = 500,height = 500, ...rest}:Logo) {
    const LOGO_URL = "/images/logos/uts/2.png"
    return <Image src={LOGO_URL} className={cn("h-8 w-auto object-cover",className)} alt="UT SCHOOL" width={width} height={height} {...rest} />
}