import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react"
import NextQueryProvider from "@/providers/NextQueryProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const raleway = Raleway({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextQueryProvider>
      <html lang="en">
        <body className={raleway.className}>
          {children}
          <ToastContainer/>  
          <Analytics/>
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
    </NextQueryProvider>
  );
}
