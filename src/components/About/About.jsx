import React from 'react';
import { motion } from 'framer-motion';
import myCV from '../../assets/Quadri_Kobiowu_CV.pdf';
import profileImage from '../../assets/quadri_kobiowu_profile.png';

const AboutMe = () => {
  return (
    <section id="about" className="bg-secondary-bg text-primary-text py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">About Me</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary-text font-poppins leading-relaxed text-lg">
              I am a results-driven Software Engineer with extensive experience in building scalable web and mobile applications. Currently working as a Software Engineer at <a href="http://masteringbackend.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary-text transition-colors duration-300 font-semibold">Mastering Backend</a>, I specialize in creating robust production systems.
            </p>
            <p className="text-secondary-text font-poppins leading-relaxed text-lg">
              My expertise spans across the full development lifecycle—from architectural design to deployment. I excel at integrating complex frontend interfaces with powerful backend APIs, debugging intricate issues, and optimizing application performance for speed and efficiency.
            </p>
            <p className="text-secondary-text font-poppins leading-relaxed text-lg">
              Previously, as a Technical Team Lead at <span className="text-accent">NAGIDA</span>, I shaped technology strategies and led engineering teams to deliver high-impact solutions. My background also includes contributing to innovative projects at E-AMBITION (France) and zealight Innovation Labs, where I focused on enhancing system scalability and security.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h3 className="text-accent font-mono text-sm tracking-widest uppercase">Mobile & Web</h3>
                <ul className="space-y-2 text-secondary-text font-mono text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>React Native / Expo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>React.js / Next.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>TypeScript</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-accent font-mono text-sm tracking-widest uppercase">Backend & Cloud</h3>
                <ul className="space-y-2 text-secondary-text font-mono text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>Node.js / Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>PostgreSQL / MongoDB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>AWS / Firebase</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.a
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-accent text-accent px-8 py-3 rounded font-mono mt-6 hover:bg-accent/10 transition-colors duration-300"
            >
              View Full Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group max-w-md mx-auto"
          >
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-accent rounded-br-lg opacity-60"></div>

            {/* Main image container */}
            <div className="relative bg-secondary-bg rounded-lg p-2 border border-border-color group-hover:border-accent transition-colors duration-500 shadow-2xl">

              {/* Image wrapper */}
              <div className="relative overflow-hidden rounded-lg bg-primary-bg/50">
                <img
                  src={profileImage}
                  alt="Quadri Kobiowu"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale hover:grayscale-0"
                />

                {/* Overlay with subtle tint */}
                <div className="absolute inset-0 bg-accent/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
