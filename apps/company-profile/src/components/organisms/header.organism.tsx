/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useAnimate } from "framer-motion";
import { Img } from "../atoms";
import AlumniSection from "./alumni.organism";
import TrainingProgramSection from "./trainingprogram.organism";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [scopeMainImage, animateMainImage] = useAnimate();
    const [scopeSeconImage, animateSecondImage] = useAnimate();
    const [scopeThirdImage, animateThirdImage] = useAnimate();
    const [scopeFourthImage, animateFourthImage] = useAnimate();

    useLayoutEffect(() => {
        // Pastikan referensi valid sebelum melakukan animasi
        if (scopeMainImage.current && scopeSeconImage.current && scopeThirdImage.current && scopeFourthImage.current) {
            animateMainImage(
                scopeMainImage.current,
                {
                    y: [300, 0],
                    opacity: [0, 1],
                },
                {
                    duration: 0.5,
                    ease: "easeInOut",
                }
            );
            animateSecondImage(
                scopeSeconImage.current,
                {
                    y: [300, -100],
                    opacity: [0, 1],
                    rotate: [0, -25],
                },
                {
                    duration: 0.5,
                    ease: "easeInOut",
                }
            );
            animateThirdImage(
                scopeThirdImage.current,
                {
                    y: [300, 20],
                    opacity: [0, 1],
                    rotate: [0, 25],
                },
                {
                    duration: 0.5,
                    ease: "easeInOut",
                }
            );
            animateFourthImage(
                scopeFourthImage.current,
                {
                    y: [300, -250],
                    opacity: [0, 1],
                    rotate: [0, -15],
                },
                {
                    duration: 0.5,
                    ease: "easeInOut",
                }
            );
        }
    }, [scopeMainImage, scopeSeconImage, scopeThirdImage, scopeFourthImage]);

    return (
        <div
            className="bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/assets/bg-atas.png')",
            }}
        >
            <header className="p-10 lg:p-20 flex flex-col md:flex-row lg:min-h-[80vh]">
                <div className="w-full md:w-7/12">
                    <div className="mb-10 relative">
                        <Img src="/images/assets/excavator.png" className="w-12 h-12 lg:w-20 lg:h-20 mb-4 rounded-lg shadow-xl" quality={100} />
                        <Img src="/images/assets/panahitam.png" className="absolute -bottom-5 lg:-bottom-10 right-0 lg:right-10 -rotate-[55deg] lg:-rotate-45 object-contain w-24 lg:w-40" quality={100} />
                        <Img src="/images/assets/panahoranye.png" className="absolute top-8 right-0 lg:top-0 lg:right-0 rotate-[25deg] lg:rotate-0 object-contain w-20 lg:w-40 " quality={100} />
                        <h1 className="flex flex-col text-slate-700">
                            <span className="text-2xl lg:text-6xl font-bold">Lembaga Pendidikan</span>
                            <span className=" lg:text-3xl font-bold">Keterampilan Berwawasan Internasional</span>
                        </h1>
                        <p className="w-5/6 mt-4 text-xs line-clamp-4 lg:line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae esse, sapiente explicabo est quaerat mollitia incidunt dolorum saepe aut cupiditate porro deleniti, eligendi in praesentium vero architecto excepturi at possimus voluptas. Nobis hic, sed tenetur exercitationem mollitia magni eligendi eaque, veniam in accusantium unde, quisquam nostrum reprehenderit blanditiis eos.</p>
                    </div>
                    <div className="mt-14 px-5">
                        <AlumniSection />
                    </div>
                </div>
                <div className="w-full md:w-5/12 relative mt-20 lg:mt-0">
                    <div ref={scopeMainImage} className="w-40 h-40 lg:w-[250px] lg:h-[250px] bg-primary rounded-xl shadow-md -rotate-12 mx-auto opacity-0"></div>
                    <motion.img
                        animate={{ y: [-100, -95, -100] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.25 }}
                        ref={scopeSeconImage}
                        src="/images/assets/excavator.png"
                        className="w-12 h-12 z-10 lg:w-20 lg:h-20 rounded-lg shadow-xl absolute opacity-0"
                    />
                    <motion.img
                        ref={scopeThirdImage}
                        src="/images/assets/excavator.png"
                        className="w-12 h-12 z-10 lg:w-20 lg:h-20 rounded-lg shadow-xl absolute right-1/3 opacity-0"
                        animate={{ y: [20, 25, 20] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.img
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.75 }}
                        animate={{ y: [-230, -225, -230] }} ref={scopeFourthImage} 
                        src="/images/assets/excavator.png" 
                        className="w-12 h-12 z-10 lg:w-20 lg:h-20 rounded-lg shadow-xl absolute right-5 lg:right-0 opacity-0"
                         />
                </div>
            </header>
            <div className="mt-10">
                <TrainingProgramSection />
            </div>
        </div>
    );
}
