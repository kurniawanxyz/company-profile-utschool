"use client";
import Link from "next/link";
import { Img } from "../atoms";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTentangKamiOpen, setIsTentangKamiOpen] = useState(false); // State for Tentang Kami dropdown in mobile
  const [isProgramOpen, setIsProgramOpen] = useState(false); // State for Program dropdown in mobile

  return (
    <nav className="fixed top-0 w-full z-50 px-10 bg-black/80 backdrop-blur-lg flex items-center justify-between h-16">
      {/* Logo */}
      <Img src="/images/logos/uts/1.png" className="w-28 object-cover" />

      {/* Navbar Items */}
      <ul className="hidden lg:flex space-x-7 h-full items-center">
        <li>
          <Link href="/" className="text-white hover:text-gray-300 transition-all">
            Beranda
          </Link>
        </li>

        {/* Tentang Kami - Dropdown */}
        <li className="group relative flex h-full items-center">
          <span className="text-white cursor-pointer hover:text-gray-300 transition-all">
            Tentang Kami
          </span>
          <div className="hidden group-hover:flex flex-col absolute top-full w-48">
            <ul className="w-full rounded bg-black/80 mt-1 text-white shadow-lg transition-all">
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Tentang UTS</li>
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Partner Industri</li>
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Gallery</li>
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Unduh</li>
            </ul>
          </div>
        </li>

        {/* Program - Dropdown */}
        <li className="group relative flex h-full items-center">
          <span className="text-white cursor-pointer hover:text-gray-300 transition-all">
            Program
          </span>
          <div className="hidden group-hover:flex flex-col absolute top-full w-48">
          <ul className="w-full rounded bg-black/80 mt-1 text-white shadow-lg transition-all">
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Tentang UTS</li>
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Partner Industri</li>
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Gallery</li>
              <li className="hover:bg-primary hover:font-semibold hover:text-black p-2 rounded cursor-pointer">Unduh</li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="/hubungi-kami" className="text-white hover:text-gray-300 transition-all">
            Hubungi Kami
          </Link>
        </li>
      </ul>

      {/* Responsive Toggle (for mobile) */}
      <button
        className="text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon burger */}
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col space-y-2 p-5 lg:hidden">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition-all">
              Beranda
            </Link>
          </li>

          {/* Tentang Kami - Mobile Dropdown */}
          <li>
            <button
              className="text-white w-full text-left"
              onClick={() => setIsTentangKamiOpen(!isTentangKamiOpen)}
            >
              Tentang Kami {isTentangKamiOpen ? "▲" : "▼"}
            </button>
            {isTentangKamiOpen && (
              <ul className="mt-2 bg-black/80 p-2 space-y-1">
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Tentang UTS</li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Partner Industri</li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Gallery</li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Unduh</li>
              </ul>
            )}
          </li>

          {/* Program - Mobile Dropdown */}
          <li>
            <button
              className="text-white w-full text-left"
              onClick={() => setIsProgramOpen(!isProgramOpen)}
            >
              Program {isProgramOpen ? "▲" : "▼"}
            </button>
            {isProgramOpen && (
              <ul className="mt-2 bg-black/80 p-2 space-y-1">
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <Link href="/program/uts">Tentang UTS</Link>
                </li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <Link href="/program/partner">Partner Industri</Link>
                </li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <Link href="/program/gallery">Gallery</Link>
                </li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <Link href="/program/unduh">Unduh</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/hubungi-kami" className="text-white hover:text-gray-300 transition-all">
              Hubungi Kami
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
