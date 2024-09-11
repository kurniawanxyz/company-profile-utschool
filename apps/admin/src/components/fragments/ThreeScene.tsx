"use client"
// components/Earth.js
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Earth = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/images/illustration/1.png');

    // Create a sphere (Earth)
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: earthTexture,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth damping for a better experience
    controls.dampingFactor = 0.25;
    controls.enableZoom = true; // Enable pinch to zoom
    controls.enablePan = false; // Disable panning for better touch experience

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      earth.rotation.y += 0.001; // Optional: Rotate Earth slightly
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      controls.dispose(); // Cleanup controls on unmount
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Earth;
