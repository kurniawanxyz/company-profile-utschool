/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';


type DropdownKeys = 'tentangKami' | 'program';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState<Record<DropdownKeys, boolean>>({
    tentangKami: false,
    program: false,
  });
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: DropdownKeys) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <nav className="fixed top-0 z-50 bg-black/70 w-full px-6 md:px-32 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Image
        width={200}
        height={200}
        src="/images/uts/1.png"
        alt="UT School"
        className="w-40 h-auto object-cover"
        loading='lazy'
      />

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />}
        </button>
      </div>

      {/* Navbar Links */}
      <ul className="hidden lg:flex justify-end gap-5 w-full">
        <li className='py-5 flex flex-col'>
          <span className="cursor-pointer text-white h-full w-full font-semibold">Beranda</span>
        </li>
        <li className="relative group py-5 flex flex-col">
          <span className="cursor-pointer text-white h-full w-full font-semibold">Tentang Kami</span>
          <div className='absolute top-full hidden group-hover:block left-1/2 -translate-x-1/2 '>
            <ul className="w-40 mt-2 bg-black/70 text-white ">
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Tentang UTS</li>
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Partner Industri</li>
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Galeri</li>
            </ul>
          </div>
        </li>
        <li className="relative group py-5 flex flex-col">
          <span className="cursor-pointer text-white h-full w-full font-semibold">Program</span>
          <div className='absolute top-full hidden group-hover:block left-1/2 -translate-x-1/2 '>
            <ul className="w-40 mt-2 bg-black/70 text-white">
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Akademik</li>
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Training Program</li>
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Pelatihan Online</li>
              <li className="px-4 cursor-pointer py-2 hover:bg-black">Pendaftaran</li>
            </ul>
          </div>
        </li>
        <li className='py-5 flex flex-col'>
          <span className="cursor-pointer text-white h-full w-full font-semibold">Hubungi Kami</span>
        </li>
      </ul>

{/* Mobile Menu */}
{isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black/80 p-4 text-white lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            <li className='py-2 flex flex-col'>
              <span className="cursor-pointer font-semibold">Beranda</span>
            </li>

            {/* Tentang Kami Dropdown */}
            <li className="flex flex-col">
              <span
                className="cursor-pointer font-semibold"
                onClick={() => toggleDropdown('tentangKami')}
              >
                Tentang Kami
              </span>
              {dropdownOpen.tentangKami && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 bg-black/70 text-white overflow-hidden"
                >
                  <li className="px-4 py-2 hover:bg-black">Tentang UTS</li>
                  <li className="px-4 py-2 hover:bg-black">Partner Industri</li>
                  <li className="px-4 py-2 hover:bg-black">Galeri</li>
                </motion.ul>
              )}
            </li>

            {/* Program Dropdown */}
            <li className="flex flex-col">
              <span
                className="cursor-pointer font-semibold"
                onClick={() => toggleDropdown('program')}
              >
                Program
              </span>
              {dropdownOpen.program && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 bg-black/70 text-white overflow-hidden"
                >
                  <li className="px-4 py-2 hover:bg-black">Akademik</li>
                  <li className="px-4 py-2 hover:bg-black">Training Program</li>
                  <li className="px-4 py-2 hover:bg-black">Pelatihan Online</li>
                  <li className="px-4 py-2 hover:bg-black">Pendaftaran</li>
                </motion.ul>
              )}
            </li>

            <li className='py-2 flex flex-col'>
              <span className="cursor-pointer font-semibold">Hubungi Kami</span>
            </li>
          </ul>
        </motion.div>
)}
    </nav>
  );
}
