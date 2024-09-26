"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../molecules/globe").then((m) => m.World), {
    ssr: false,
});

export function GlobeDemo() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#333333",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#333333",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: -5.2088, lng: 146.8456 }, // Jakarta, Indonesia
        autoRotate: false,
        autoRotateSpeed: 0,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

    const sampleArcs = [
        {
            order: 1,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -7.7972, // Yogyakarta, Pulau Jawa
            endLng: 110.3688,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 2,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -8.4095, // Denpasar, Pulau Bali
            endLng: 115.1889,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 3,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -5.1477, // Bandar Lampung, Pulau Sumatra
            endLng: 105.2278,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 4,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -3.5952, // Palembang, Pulau Sumatra
            endLng: 104.9176,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 5,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -0.7893, // Pontianak, Pulau Kalimantan
            endLng: 109.3443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 6,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -5.1521, // Ambon, Pulau Maluku
            endLng: 119.4388,
            arcAlt: 0.6,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 7,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -0.9145, // Manado, Pulau Sulawesi
            endLng: 122.973,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 8,
            startLat: -6.2088, // Jakarta, Pulau Jawa
            startLng: 106.8456,
            endLat: -2.5489, // Jayapura, Pulau Papua
            endLng: 140.7181,
            arcAlt: 0.8,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
    ];
    return (
        <div className="relative w-full h-[80vh]">
            <motion.div

                className="w-full h-full absolute transform-gpu "
            >
                <World data={sampleArcs} globeConfig={globeConfig} />
            </motion.div>


        </div>
    );
}
