"use client"
import { HiCog } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Button, Img } from "../atoms"
import { motion, useAnimate } from "framer-motion";
import { PiCertificate,PiUsersThreeFill } from "react-icons/pi";
import { IoIosPin } from "react-icons/io";
import { GoTriangleRight } from "react-icons/go";
import { FiSearch } from "react-icons/fi";


type Props = {}

export default function Header2({ }: Props) {

  const [scrollY, setScrollY] = useState(0);
  const [search,setSearch] = useState(false);
  const [numberAnimation, setNumberAnimation] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [katakataAnimation, setKataKataAnimation] = useAnimate();

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
    1: { rotate: 0, scale: 1 },
    2: { rotate: 45, scale: 0.8 },
    3: { rotate: 90, scale: 0.5 },
    4: { rotate: 135, scale: 0 },
    5: { rotate: 180, scale: 0 },
  };

  const kakBila = {
    1: { scale: 1, right: 280, top: 170 },
    2: { scale: 1.1, right: 280, top: 150 },
    3: { scale: 1.3, right: 310, top: 110 },
    4: { scale: 1.3, right: 340, top: 55 },
    5: { scale: 1.3, right: 340, top: 55 },
  };

  const cog1 = {
    1: { top: 85, left: 45 },
    2: { top: 100, left: 105 },
    3: { top: 130, left: 255 },
    4: { top: 130, left: 255 },
    5: { top: 0, left: 0 },
  }

  const cog2 = {
    1: { top: 80, left: 150 },
    2: { top: 100, left: 180 },
    3: { top: 100, left: 280 },
    4: { top: 100, left: 280 },
    5: { top: 0, left: 0 },
  }

  const cog3 = {
    1: { top: 65, left: 350 },
    2: { top: 65, left: 350 },
    3: { top: 65, left: 350 },
    4: { top: 65, left: 350 },
    5: { top: 0, left: 0 },
  }

  const katakata = {
    1: "",
    2: "Berkarya",
    3: "Tiada Duanya",
    4: "Memang Luar Biasa",
    5: "Memang Luar Biasa"
  }

  const whiteSilhoute = {
    1: { width: 600, height: 100, bottom: 20, borderRadius: 50 },
    2: { width: 900, height: 100, bottom: 0, borderRadius: 50 },
    3: { width: '100%', height: 500, bottom: 0, borderRadius: 50 },
    4: { width: '100%', height: '100%', bottom: 0, borderRadius: 0 },
    5: { width: '100%', height: '100%', bottom: 0, borderRadius: 0 },
  };

  useEffect(()=>{
    setKataKataAnimation(katakataAnimation.current,{
      x: [0, 100], // Move from left to right
      transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      },
    });
  },[numberAnimation])

  return (
    <div className="h-[1000vh] relative">

      <header className="h-screen bg-slate-700 fixed w-full top-0 left-0 right-0 bottom-0 py-5 px-3">
        <div className="absolute inset-0 p-3 z-20">
          <Img src="/images/asset/1.png" width={2000} height={2000} className="w-screen h-[90vh] object-fill" />
        </div>


        <motion.div
          animate={whiteSilhoute[numberAnimation]}
          transition={{ duration: 0.5 }}
          className="bg-white left-1/2 -translate-x-1/2 absolute"
        />

        <div className="relative z-30 h-full overflow-hidden ">


        <span ref={katakataAnimation} className="absolute z-50 top-5 right-60 text-2xl font-extrabold uppercase text-slate-600">{katakata[numberAnimation]}</span>


        <div className="absolute top-5 left-5 z-50 gap-3 flex items-center">
          {/* button search */}
          <span onClick={()=>setSearch(!search)} className="rounded-full border-white border p-2 cursor-pointer">
            <FiSearch className="text-white text-xl" />
          </span>
          {/* akhir button search */}
          <input hidden={!search} className="px-3 bg-white py-1 text-slate-800" type="text" name="" id="" />
        </div>

          {/* Logo */}
          {
            numberAnimation > 3 ? (
              <Img src="/images/logos/uts/2.png" className="absolute w-32 left-1/2 -translate-x-1/2" />
            ):(
              <Img src="/images/logos/uts/1.png" className="absolute w-32 left-1/2 -translate-x-1/2" />
            )
          }

          <motion.div animate={cog1[numberAnimation]} className="absolute">
            <motion.div
              animate={cogVariants[numberAnimation]}
              transition={{ duration: 0.5 }}
            >
              <HiCog className="text-slate-950/50 text-[150px]" />
            </motion.div>
          </motion.div>

          <motion.div animate={cog2[numberAnimation]} className="absolute">
            <motion.div
              animate={cogVariants[numberAnimation]}
              transition={{ duration: 0.5 }}
            >
              <HiCog className="text-slate-950/50 text-[300px]" />
            </motion.div>
          </motion.div>

          <motion.div animate={cog3[numberAnimation]} className="absolute">
            <motion.div
              animate={cogVariants[numberAnimation]}
              transition={{ duration: 0.5 }}
            >
              <HiCog className="text-slate-950/50 text-[500px]" />
            </motion.div>
          </motion.div>

          {/*  */}
          <div className="h-40 w-[110vw] bg-slate-700 absolute bottom-40 left-1/2 -translate-x-1/2">
            <div className="grid grid-cols-3 gap-5 justify-start w-fit h-full ms-52 items-center">
              <div className="w-40 h-full flex flex-col justify-center items-center">
                <div className="bg-slate-400 text-3xl w-16 h-16 rounded-full flex justify-center items-center">
                  <PiCertificate/>
                </div>
                <p>Certified Alumni</p>
              </div>
              <div className="w-40 h-full flex flex-col justify-center items-center">
                <div className="bg-slate-400 text-3xl w-16 h-16 rounded-full flex justify-center items-center">
                  <PiUsersThreeFill/>
                </div>
                <p>34.000 Alumni</p>
              </div>
              <div className="w-40 h-full flex flex-col justify-center items-center">
                <div className="bg-slate-400 text-3xl w-16 h-16 rounded-full flex justify-center items-center">
                  <IoIosPin/>
                </div>
                <p>22 Training place</p>
              </div>
            </div>
          </div>

          <Button variants="outline" size="lg" className={` ${numberAnimation >= 4 && 'hidden'} absolute z-50 flex justify-center items-center bottom-20 left-20 border-2 border-slate-600 text-slate-600 rounded-full font-medium hover:bg-slate-600 hover:text-slate-200`}>
            Daftar Disini
            <GoTriangleRight size={20} className="ms-4" />
          </Button>

          <Button variants="outline" size="lg" className={` ${numberAnimation < 4 && 'hidden'} absolute z-[100] flex justify-center items-center top-32 left-[45%] border-2 border-slate-600 text-slate-600 rounded-full font-medium hover:bg-slate-600 hover:text-slate-200`}>
            Daftar Disini
            <GoTriangleRight size={20} className="ms-4" />
          </Button>

          <Img src="/images/asset/5.png" className={` ${numberAnimation < 4 && 'hidden' } w-40 z-50 absolute left-24 top-24`} />

          {/* white shilhoute */}
          <motion.div className="absolute z-50" animate={kakBila[numberAnimation]}>
            {
              (numberAnimation == 4 || numberAnimation == 5) ? (
                <Img src="/images/asset/4.png" className="w-80" />
              ) :(
                <Img src="/images/asset/3.png" className="w-80" />
              )

            }
          </motion.div>
          <motion.div>
            <Img src="/images/asset/2.png" className="z-40 absolute right-10 top-[150px] w-80" />
          </motion.div>
        </div>
      </header>
    </div>
  )
}