import React from 'react'

type Props = {
    variants? : "default" | "outline",
    children: React.ReactNode
}

const Button = ({
    variants = "default",
    children
}: Props) => {

    let className = "mt-10 w-2/3 rounded px-3 py-1 transition-colors";

  // Menentukan style berdasarkan variant
  if (variants === "default") {
    className += " bg-primary text-white hover:bg-yellow-500";
  } else if (variants === "outline") {
    className += " bg-transparent border-primary border-2 text-primary hover:bg-primary";
  }
    return (
    <button className={className as string}>{children}</button>
  )
}

export default Button