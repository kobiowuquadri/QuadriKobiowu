import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import profileImg from '../../assets/20240613_105504.jpg'


const AboutMe = () => {
  return (
    <section id="about" className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={profileImg}
              alt="Your Name"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 font-poppins">
              Hello! I am Quadri Kobiowu, a passionate fullstack developer with a keen interest in creating efficient, scalable, and user-friendly web applications. With 3 years of experience in the field, I have had the opportunity to work on a diverse range of projects, from small business websites to complex enterprise applications.
            </p>
            <p className="text-lg mb-6 font-poppins">
              My journey in tech began 2020. Since then, I have been constantly learning and adapting to new technologies and methodologies in the ever-evolving world of web development.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: FaCode, text: "Clean Code" },
                { icon: FaLaptopCode, text: "Full Stack" },
                { icon: FaUserGraduate, text: "Continuous Learning" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon size={40} className="mb-2" />
                  <span className="font-poppins">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#333' }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white font-bold py-2 px-4 rounded-full inline-flex items-center font-poppins transition-colors duration-300"
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
