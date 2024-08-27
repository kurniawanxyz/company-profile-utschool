import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
    variants? : "default" | "outline",
    children: React.ReactNode,
    className?: string,
    type?: "submit" | "reset" | "button"
}

const Button = ({
    variants = "default",
    children,
    className,
    type = "button"
}: Props) => {

    let cls = "mt-10 w-2/3 rounded px-3 py-1 transition-colors";

  // Menentukan style berdasarkan variant
  if (variants === "default") {
    cls += " bg-primary text-white hover:bg-yellow-500";
  } else if (variants === "outline") {
    cls += " bg-transparent border-primary border-2 text-primary hover:bg-primary";
  }
    return (
    <button type={type} className={twMerge(cls as string,className)}>{children}</button>
  )
}

export default Button