import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Model2 from "./Model2"; 

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 min-h-screen pt-[70px] text-white overflow-hidden">
      {/* Left Content */}
      <div className="z-10 max-w-lg text-center md:text-left">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight"
        >
          HI, I'M <span className="text-white">RAJEEV SINGH</span>
          <br />
          CREATIVE <span className="text-emerald-400">PLAYER</span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base"
        >
          🚀 “I’m a Full Stack Java Developer driven by the passion to craft
          seamless, high-performing digital experiences. With expertise in both
          backend architecture and intuitive front-end design, I bridge the gap
          between complex ideas and user-friendly solutions that inspire,
          engage, and deliver real impact.”
        </motion.p>

        <motion.a
          href="/RajeevSinghCV.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mt-8 px-5 sm:px-6 py-3 bg-emerald-400 text-black font-semibold rounded-lg shadow-md text-sm sm:text-base"
        >
          <Download size={20} /> Download CV
        </motion.a>
      </div>

      {/* Right Content - Hexagon Image */}
      <div className="z-10 mt-10 md:mt-0 relative flex justify-center">
        <div className="relative w-48 h-56 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 hex-wrapper">
          <img
            src="/images/R1logo.png" 
            alt="profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Background 3D Model */}
      <div className="absolute inset-0 z-0">
        <Model2 />
      </div>
    </section>
  );
};

export default HeroSection;
