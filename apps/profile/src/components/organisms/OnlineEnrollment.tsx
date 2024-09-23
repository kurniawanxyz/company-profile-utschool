import { Button, Img } from "../atoms";

type Props = {};

export default function OnlineEnrollment({}: Props) {
  return (
    <div className="relative w-full h-screen bg-black flex overflow-hidden">
      {/* Div Gambar untuk layar besar */}
      <div
        className="w-1/2 bg-cover bg-center hidden md:block" // Gambar akan disembunyikan di layar kecil
        style={{
          backgroundImage: "url('/images/students/1.jpg')",
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)", // Potongan diagonal untuk gambar
        }}
      ></div>

      {/* Div Konten */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-black">
        {/* Overlay diagonal hanya di layar besar */}
        <div
          className="absolute inset-0 bg-black hidden md:block"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)", // Efek diagonal di latar belakang konten
          }}
        ></div>

        {/* Konten tetap berada di atas */}
        <div className="relative z-10 left-0 flex flex-col md:left-10 px-5 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Pendaftaran Online</h2>
          <p className="w-full md:w-2/3 text-slate-200 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            velit dolor repellendus omnis vero iusto minima beatae repellat
            libero aut.
          </p>
          <Button className="w-full md:w-40 mt-4">Daftar</Button>
        </div>
      </div>
    </div>
  );
}
