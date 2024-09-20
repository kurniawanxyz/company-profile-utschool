import type { Metadata } from "next";
import {Raleway} from "next/font/google"
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient, QueryProvider } from "@/libs";

const raleway = Raleway({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "UTSCHOOL",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
