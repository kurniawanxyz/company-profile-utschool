import React from 'react';
import { Img } from '../atoms';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="min-h-[40vh] bg-center bg-cover flex flex-col justify-between bg-slate-800/60 text-white"
      style={{ backgroundImage: "url('/images/assets/bg-footer.png')" }}
    >
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 gap-8">
        {/* Contact Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg md:text-2xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt ab consequuntur in,
            maiores alias corrupti minima accusantium quae aspernatur!
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Social Media */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-2">Sosial Media</h3>
              <div className="flex items-center gap-3">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaTiktok />
                <FaYoutube />
              </div>
            </div>

            {/* LMS Online */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-2">LMS Online</h3>
              <Img width={120} src="/images/assets/vocatic.png" />
            </div>

            {/* Partner */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-2">Our Partner</h3>
              <p className="text-sm md:text-base">Partner information here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Container */}
      <div className="w-full flex justify-center mt-4 bg-black/90 p-2">
        <Img src="/images/logos/2.png" alt="Logo" className="w-14 md:w-32 object-cover" />
      </div>
    </footer>
  );
}
