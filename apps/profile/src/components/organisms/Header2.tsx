"use client"
import { HiCog } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Img } from "../atoms"
import { motion } from "framer-motion";

type Props = {}

export default function Header2({}: Props) {

  const [scrollY, setScrollY] = useState(0);
  const [numberAnimation, setNumberAnimation] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Listener untuk mengupdate scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
    getAnimation(window.scrollY); // Call getAnimation with the current scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener saat component di-unmount
    };
  }, []);

  // Kalkulasi animasi berdasarkan scroll position
  const getAnimation = (scrollY: number) => {
    if (scrollY < 1200) {
      // Animasi untuk scroll 1
      setNumberAnimation(1);
      return {
        opacity: 1,
        scale: 1,
        x: 0,
      };
    } else if (scrollY >= 1200 && scrollY < 2400) {
      // Animasi untuk scroll 2
      setNumberAnimation(2);
      return {
        opacity: 1,
        scale: 1.2,
        rotate: 45,
      };
    } else if (scrollY >= 2400 && scrollY < 3600) {
      // Animasi untuk scroll 3
      setNumberAnimation(3);
      return {
        opacity: 1,
        x: 100,
        scale: 1.5,
      };
    } else if (scrollY >= 3600 && scrollY < 4800) {
      // Animasi untuk scroll 4
      setNumberAnimation(4);
      return {
        opacity: 0.5,
        scale: 2,
        rotate: 90,
      };
    } else {
      // Animasi untuk scroll 5
      setNumberAnimation(5);
      return {
        opacity: 0,
        y: 100,
        scale: 0.5,
      };
    }
  };


  const cogVariants = {
    1: { rotate: 0 },
    2: { rotate: 45 },
    3: { rotate: 90 },
    4: { rotate: 135 },
    5: { rotate: 180 },
  };

  const whiteSilhoute = {
    1: { width: 600, height: 100, bottom: 20, borderRadius: 50 },
    2: { width: 900, height: 100, bottom: 0, borderRadius: 50 },
    3: { width: '100%', height: 500, bottom: 0, borderRadius: 50 },
    4: { width: '100%', height: '100%', bottom: 0, borderRadius: 0 },
    5: { width: '100%', height: '100%', bottom: 0, borderRadius: 0 },
  };

  return (
    <div className="h-[1000vh] relative">
      
      <header className="h-screen bg-slate-700 fixed w-full top-0 left-0 right-0 bottom-0 py-5 px-3">
        <div className="absolute inset-0 p-3 z-20">
        <Img src="/images/asset/1.png" width={2000} height={2000} className="w-screen h-[90vh] object-fill"/>
        </div>

        <motion.div
          animate={whiteSilhoute[numberAnimation]}
          transition={{ duration: 0.5 }}
          className="bg-white left-1/2 -translate-x-1/2 absolute"
        />

        <div className="relative z-30 h-full overflow-hidden ">

        {/* Logo */}
        <Img src="/images/logos/uts/1.png"  className="absolute w-32 left-1/2 -translate-x-1/2"/>




        <div className="absolute top-16 left-5">
          <motion.div
            animate={cogVariants[numberAnimation]}
            transition={{ duration: 0.5 }}
          >
            <HiCog className="text-white text-[150px]" />
          </motion.div>
        </div>

        <div className="absolute top-24 left-40">
          <motion.div
            animate={cogVariants[numberAnimation]}
            transition={{ duration: 0.5 }}
          >
            <HiCog className="text-white text-[300px]" />
          </motion.div>
        </div>

        <div className="absolute top-16 left-[450px]">
          <motion.div
            animate={cogVariants[numberAnimation]}
            transition={{ duration: 0.5 }}
          >
            <HiCog className="text-white text-[500px]" />
          </motion.div>
        </div>

        {/*  */}
        <div className="h-40 w-[110vw] bg-slate-700 absolute bottom-40 left-1/2 -translate-x-1/2">
          p
        </div>

        {/* white shilhoute */}



        {/* Add your content here */}
        <h1 className="text-xl">{numberAnimation}</h1>
        </div>
      </header>
    </div>
  )
}