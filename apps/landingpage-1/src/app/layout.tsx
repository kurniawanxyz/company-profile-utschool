import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Parallax Effect Page",
  description: "A page with parallax effect using Tailwind CSS",
};

const raleway = Raleway({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Head>
          <title>Parallax Effect Page</title>
          <meta name="description" content="A page with parallax effect using Tailwind CSS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="relative h-screen bg-fixed bg-cover bg-center bg-[url('/path-to-your-image.jpg')]">
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-white text-5xl font-bold">Welcome to My Parallax Page</h1>
          </div>
        </header>

        <main className="p-8">
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nunc sed metus interdum aliquet. Nullam venenatis, velit non facilisis ultricies, arcu nunc ultricies sapien, at elementum odio erat non nisl.
            </p>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
            <p>
              Aenean fermentum, magna id varius lacinia, nulla sem ultrices est, non gravida leo metus vel ante. Suspendisse potenti. Nullam ac tortor id lorem efficitur elementum.
            </p>
          </section>
          {/* Tambahkan lebih banyak section jika diperlukan */}
        </main>

        {children}
      </body>
    </html>
  );
}
