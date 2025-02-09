import React from 'react';
import { motion } from 'framer-motion';
import myCV from '../../assets/QUADRI_ KOBIOWU_ CV.pdf';

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#112240] text-[#CCD6F6] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#64FFDA] font-mono">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">About Me</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#8892B0] font-poppins leading-relaxed">
              Coming from a humble background in Nigeria, I refused to let financial constraints define my future. Despite the challenges, I held onto a burning desire to create a better life for myself and my family through technology.
            </p>
            <p className="text-[#8892B0] font-poppins leading-relaxed">
              My breakthrough came when I was accepted into <a href="https://capacitybay.org/" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA] hover:text-[#CCD6F6] transition-colors duration-300">CapacityBay's training program</a>. This opportunity wasn't just about learning to code – it was about transforming my life. Through countless late nights of studying and practicing, I turned my dreams of becoming a software engineer into reality.
            </p>
            <p className="text-[#8892B0] font-poppins leading-relaxed">
              Today, I'm proud to lead the technical team at <a href="https://nagidafoods.com" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA] hover:text-[#CCD6F6] transition-colors duration-300">Nagida Foods</a>, proving that your background doesn't determine your future. My journey from struggling to make ends meet to becoming a software engineer drives me to mentor others from similar backgrounds, showing them that with determination and the right support, anything is possible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h3 className="text-[#64FFDA] font-mono text-sm">Frontend</h3>
                <ul className="space-y-2 text-[#8892B0]">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#64FFDA]">▹</span>
                    <span>React.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#64FFDA]">▹</span>
                    <span>TailwindCSS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#64FFDA]">▹</span>
                    <span>JavaScript/TypeScript</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-[#64FFDA] font-mono text-sm">Backend</h3>
                <ul className="space-y-2 text-[#8892B0]">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#64FFDA]">▹</span>
                    <span>Node.js/Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#64FFDA]">▹</span>
                    <span>MongoDB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#64FFDA]">▹</span>
                    <span>RESTful APIs</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded font-mono mt-6 hover:bg-[#64FFDA]/10 transition-colors duration-300"
            >
              <a href={myCV} target="_blank" rel="noopener noreferrer">View Resume</a>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-[#0A192F] rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square bg-[#233554] rounded-lg hover:bg-[#64FFDA]/20 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  ))}
                </div>
                <motion.div 
                  className="mt-8 text-center font-mono text-sm text-[#64FFDA]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="block mb-2">Technical Leadership</span>
                  <span className="text-[#8892B0] text-xs">
                    Building the future of technology, one team at a time
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
