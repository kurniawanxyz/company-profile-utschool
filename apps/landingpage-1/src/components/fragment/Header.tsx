/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import { Button } from "../element";

type Props = {};

export default function Header({}: Props) {
  return (
<header className="fixed w-full h-screen overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
  >
    <source src="/videos/header.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute bottom-20 left-20 ">
    <h1 className="text-4xl font-extrabold w-2/3">LEMBAGA PENDIDIKAN KETERAMPILAN BERWAWASAN INTERNASIONAL</h1>
    <Button variants="outline" className="mt-3" >Lebih lanjut</Button>
  </div>
</header>

  );
}
