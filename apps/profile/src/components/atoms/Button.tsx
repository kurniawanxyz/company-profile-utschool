import { cn } from "@/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  variants?: "default" | "outline" | "secondary"; // Additional variants
  size?: "sm" | "md" | "lg"; // Support for different sizes
  className?: string; // Allow custom classes
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children = "Click Me!",
  variants = "outline",
  size = "md",
  className = "",
  ...rest
}: Props) {
  // Styles for each variant
  const style = {
    default:
      "bg-primary px-4 py-2 text-black rounded hover:bg-yellow-500 active:bg-yellow-600",
    outline:
      "border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-black",
    secondary:
      "bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 active:bg-gray-500",
  };

  // Styles for different sizes
  const sizeStyles = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={cn(style[variants],sizeStyles[size],className)}
      {...rest}
    >
      {children}
    </button>
  );
}
