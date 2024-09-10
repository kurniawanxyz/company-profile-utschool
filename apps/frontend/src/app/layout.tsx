import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
    <html lang="en">
      <body className={raleway.className}>
        {children}
        <ToastContainer/>  
      </body>
    </html>
  );
}
