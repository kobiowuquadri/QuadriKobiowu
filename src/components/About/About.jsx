import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import profileImg from '../../assets/Remove-bg.ai_1727789628937.png'
import myCV from '../../assets/QUADRI_ KOBIOWU_ CV.pdf'

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
              data-aos="zoom-in-right"
              alt="Quadri Kobiowu"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 font-poppins">
              Hello! I am Quadri Kobiowu, a Backend Engineer at <a target='_blank' style={{color: 'blue'}} href="https://zealightlabs.com/">Zealight Innovation Labs</a> and a passionate fullstack developer with a keen interest in creating efficient, scalable, and user-friendly web applications. With 3 years of experience in the field, I have had the opportunity to work on a diverse range of projects, from small business websites to complex enterprise applications.
            </p>
            <p className="text-lg mb-6 font-poppins">
              My journey in tech began in 2020. Since then, I have been constantly learning and adapting to new technologies and methodologies in the ever-evolving world of web development.
            </p>
            <p className="text-lg mb-6 font-poppins">
              Coming from an average background family with little hope for the future, learning to code changed my life for the better. I'm truly grateful for the opportunities it has provided me, and I'm passionate about helping children from poor families transform their lives through coding and technology.
            </p>
            <p className="text-lg mb-6 font-poppins">
             Thank you.
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
              className="bg-black text-white font-bold py-2 px-4 rounded-full inline-flex items-center font-poppins transition-colors duration:300"
            >
              <a href={myCV} target='_blank'>Download CV</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
