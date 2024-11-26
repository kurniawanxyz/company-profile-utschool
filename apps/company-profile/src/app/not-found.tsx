"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-extrabold text-slate-800">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-slate-600">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-lg mt-2 text-gray-500">
        Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
      </p>
      <div className="mt-8">
        <Button
          onClick={() => router.push("/")}
          className="px-6 py-3 rounded-md transition-all"
        >
          Kembali ke Beranda
        </Button>
      </div>
      <div className="mt-10">
        {/* <img
          src="/images/404.svg" // Ganti dengan path gambar ilustrasi 404 jika ada
          alt="Not Found"
          className="max-w-full h-auto w-64 md:w-96"
        /> */}
      </div>
    </div>
  );
}
