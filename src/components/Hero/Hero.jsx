import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-[#0A192F] text-[#CCD6F6] min-h-screen flex items-center relative overflow-hidden pt-14">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-20">
        {Array.from({ length: 64 }).map((_, index) => (
          <motion.div
            key={index}
            className="bg-[#64FFDA] rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Keywords */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {['JavaScript', 'React', 'Node.js', 'AWS', 'Architecture', 'Leadership', 'Innovation', 'Strategy'].map((word, index) => (
          <motion.div
            key={index}
            className="absolute text-[#64FFDA] font-mono whitespace-nowrap"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-24 md:py-28 lg:py-32 z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#64FFDA] font-mono mb-4 block">Hi, my name is</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
              Quadri Kobiowu
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-poppins text-[#8892B0]">
              Software Engineer at Nagida
            </h2>
            <p className="text-lg sm:text-xl mb-6 font-poppins text-[#8892B0] max-w-2xl">
              I'm a passionate software engineer who started from humble beginnings and found my path through CapacityBay's training program. Currently, I'm leading development projects and building impactful solutions at {' '}
              <a 
                href="https://nagidafoods.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#64FFDA] hover:underline"
              >
                Nagida Foods
              </a>.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#64FFDA] text-[#64FFDA] font-mono py-3 px-6 rounded hover:bg-[#64FFDA]/10 transition-colors duration-300"
              >
                <a href="#projects">View My Work</a>
              </motion.button>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/kobiowuquadri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/quadri-kobiowu-955313233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-[#112240] p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 font-poppins text-[#64FFDA]">Leadership & Expertise</h3>
            <ul className="space-y-4 text-[#8892B0]">
              <li className="flex items-center space-x-3">
                <span className="text-[#64FFDA]">▹</span>
                <span>Technical Strategy & Vision</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#64FFDA]">▹</span>
                <span>Team Leadership & Mentorship</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#64FFDA]">▹</span>
                <span>Architecture & System Design</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#64FFDA]">▹</span>
                <span>Innovation & Digital Transformation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
