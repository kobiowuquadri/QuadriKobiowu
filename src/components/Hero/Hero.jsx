import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaBriefcase, FaHandshake, FaRocket } from 'react-icons/fa';
import { projects } from '../../data/projectsData';

const Hero = () => {
  const projectCount = projects.length;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary-bg min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-28 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(230,213,184,0.08)_0%,rgba(5,5,5,0)_42%),linear-gradient(315deg,rgba(45,212,191,0.09)_0%,rgba(5,5,5,0)_38%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="z-10 container mx-auto">
        <div className="mx-auto max-w-6xl text-center space-y-7 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 sm:space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-poppins font-light text-primary-text tracking-normal leading-tight">
              Quadri Kobiowu
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-light text-primary-text/90 leading-tight">
              Software Engineer
              <span className="hidden md:inline text-secondary-text/40"> | </span>
              <span className="block md:inline text-primary-text/75">Full-Stack Developer</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-[#A7F3D0]">
              Mobile App Engineer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-secondary-text text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-poppins leading-relaxed"
          >
            I build scalable web applications, mobile applications, backend systems, APIs,
            business platforms, and digital products that solve real-world problems.
            From startups to enterprise solutions, I help businesses transform ideas into
            reliable and impactful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mx-auto grid max-w-2xl grid-cols-3 gap-2 sm:gap-3"
          >
            {[
              { value: `${projectCount}+`, label: "Projects Delivered" },
              { value: "5+", label: "Client Industries" },
              { value: "3", label: "Core Platforms" }
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border-color bg-secondary-bg/60 px-2 py-3 backdrop-blur-sm sm:px-4"
              >
                <p className="font-mono text-xl font-bold text-accent sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-[10px] uppercase leading-snug tracking-widest text-secondary-text sm:text-xs">{metric.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3 font-semibold text-primary-bg hover:bg-white transition-colors duration-300"
            >
              <FaRocket /> View Projects
            </button>
            <button
              onClick={() => scrollToSection('collaboration')}
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#2DD4BF]/50 px-6 py-3 font-semibold text-[#A7F3D0] hover:bg-[#2DD4BF]/10 transition-colors duration-300"
            >
              <FaHandshake /> Let&apos;s Collaborate
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-accent/40 px-6 py-3 font-semibold text-primary-text hover:bg-accent/10 transition-colors duration-300"
            >
              <FaBriefcase /> Hire Me
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-12 h-12 rounded-full border border-[#E6D5B8]/30 flex items-center justify-center group-hover:border-[#E6D5B8] transition-colors duration-300">
          <FaArrowDown className="text-[#E6D5B8] text-sm animate-bounce" />
        </div>
        <span className="text-[#E6D5B8] text-xs tracking-[0.2em] font-mono uppercase opacity-70 group-hover:opacity-100 transition-opacity">About Me</span>
      </motion.div>
    </section>
  );
};

export default Hero;
