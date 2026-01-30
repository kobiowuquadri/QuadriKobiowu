import React from 'react';
import { motion } from 'framer-motion';
import myCV from '../../assets/QUADRI_ KOBIOWU_ CV.pdf';
import profileImage from '../../assets/quadri_kobiowu_profile.png';

const AboutMe = () => {
  return (
    <section id="about" className="bg-secondary-bg text-primary-text py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">About Me</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary-text font-poppins leading-relaxed">
              I&apos;m a passionate Frontend Engineer currently contributing to production systems at <a href="http://masteringbackend.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary-text transition-colors duration-300">Mastering Backend</a>. My journey in software engineering has been driven by a commitment to building exceptional user experiences and scalable applications.
            </p>
            <p className="text-secondary-text font-poppins leading-relaxed">
              I specialize in implementing application features and business logic, integrating frontend applications with backend APIs, and optimizing performance to deliver clean, maintainable code. My work focuses on creating production-ready solutions that meet real-world business needs.
            </p>
            <p className="text-secondary-text font-poppins leading-relaxed">
              With expertise in modern frontend technologies and a strong foundation in full-stack development, I collaborate with engineering teams to deliver scalable solutions. I&apos;m dedicated to writing well-documented code and following best practices to ensure long-term maintainability.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h3 className="text-accent font-mono text-sm">Frontend</h3>
                <ul className="space-y-2 text-secondary-text">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>React.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>TailwindCSS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>JavaScript/TypeScript</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-accent font-mono text-sm">Backend</h3>
                <ul className="space-y-2 text-secondary-text">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>Node.js/Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>MongoDB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>RESTful APIs</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-accent text-accent px-6 py-3 rounded font-mono mt-6 hover:bg-accent/10 transition-colors duration-300"
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
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-accent rounded-tl-lg opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-accent rounded-br-lg opacity-50"></div>
            
            {/* Animated background gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
            
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                color: '#3B82F6'
              }}></div>
            </div>
            
            {/* Main image container */}
            <div className="relative bg-secondary-bg rounded-lg p-4 border-2 border-border-color group-hover:border-accent transition-colors duration-500">
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent"></div>
              
              {/* Image wrapper with clip path effect */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={profileImage} 
                  alt="Quadri Kobiowu" 
                  className="w-full h-auto max-h-[500px] object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay with scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner accent dots */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-accent rounded-full"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-accent rounded-full"></div>
              </div>
              
              {/* Tech-inspired bottom bar */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-secondary-text">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Software Engineer</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-8 h-1 bg-border-color rounded"></div>
                  <div className="w-12 h-1 bg-accent/50 rounded"></div>
                  <div className="w-6 h-1 bg-border-color rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
