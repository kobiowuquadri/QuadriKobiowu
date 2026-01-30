import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-[#050505] min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#1a1a1a] to-[#050505] opacity-50"></div>

      <div className="z-10 text-center max-w-5xl mx-auto space-y-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl font-poppins font-light text-[#E6D5B8] tracking-tight leading-tight"
        >
          Hi, I&apos;m <span className="font-semibold block md:inline">QUADRI KOBIOWU</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-7xl font-light text-[#E6D5B8] opacity-90"
        >
          Software Engineer <span className="hidden md:inline text-secondary-text opacity-40">|</span> <span className="block md:inline mt-2 md:mt-0 opacity-80 decoration-[#E6D5B8] underline-offset-8">Mobile Developer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#E6D5B8] text-lg sm:text-xl md:text-2xl mt-8 max-w-2xl mx-auto font-light opacity-80 leading-relaxed"
        >
          Premium Web & Mobile Apps developed for your needs.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="w-12 h-12 rounded-full border border-[#E6D5B8]/30 flex items-center justify-center group-hover:border-[#E6D5B8] transition-colors duration-300">
          <FaArrowDown className="text-[#E6D5B8] text-sm animate-bounce" />
        </div>
        <span className="text-[#E6D5B8] text-xs tracking-[0.2em] font-mono uppercase opacity-70 group-hover:opacity-100 transition-opacity">My Projects</span>
      </motion.div>
    </section>
  );
};

export default Hero;
