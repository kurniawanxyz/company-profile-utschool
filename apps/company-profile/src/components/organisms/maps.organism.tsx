"use client"
import { useEffect } from "react";
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

// Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_KEY || 'your-default-access-token';
Cesium.Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_KEY as string;


export default function MapsCesium() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const initializeViewer = async () => {
                try {
                    const viewer = new Cesium.Viewer('maps', {
                        terrainProvider: await Cesium.createWorldTerrainAsync(),
                    });

                    return () => viewer.destroy(); // Cleanup saat komponen di-unmount
                } catch (error) {
                    console.error("Failed to initialize Cesium viewer:", error);
                }
            };

            initializeViewer();
        }
    }, []);

    return (
        <div id="maps"></div>
    );
}