/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
<header className="relative w-full h-screen overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
  >
    <source src="/videos/header.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div></div>
</header>

  );
}
