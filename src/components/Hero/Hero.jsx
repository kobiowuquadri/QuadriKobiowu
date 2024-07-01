import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const bubbles = Array.from({ length: 20 }, (_, i) => i);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getRandomPosition = () => ({
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
  });

  return (
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 sm:py-24 md:py-28 lg:py-32 z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
              Hi, I am <span className="text-gray-400">Quadri Kobiowu</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 font-poppins text-gray-300">
              Fullstack Developer | Backend Engineer & Problem Solver
            </h2>
            <p className="text-base sm:text-lg mb-4 font-poppins text-gray-400">
              I create elegant solutions to complex problems, bringing ideas to life through code.
            </p>
            <p className="text-base sm:text-lg mb-4 font-poppins text-gray-400">
              Specializing in: NodeJS, ExpressJS, MongoDB and Cloud Technologies
            </p>
            <p className="text-base sm:text-lg mb-8 font-poppins text-gray-400">
              Hobby: Watching Movies and Exploring New Technologies
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-flex items-center font-poppins transition-colors duration-300 text-sm sm:text-base"
              >
                View My Work
                <FaArrowRight className="ml-2" />
              </motion.button>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white p-2 sm:p-3 rounded-full"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white p-2 sm:p-3 rounded-full"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-poppins">What I Offer</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 font-poppins text-sm sm:text-base">
              <li>Fullstack web application development</li>
              <li>Scalable backend solutions</li>
              <li>API design and integration</li>
              <li>Database optimization</li>
              <li>Cloud deployment and DevOps</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#4a5568' }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center font-poppins transition-colors duration-300 text-sm sm:text-base"
            >
              Let's Collaborate
              <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {bubbles.map((_, index) => {
        const initialPosition = getRandomPosition();
        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gray-700 opacity-20"
            initial={{
              ...initialPosition,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [initialPosition.x, getRandomPosition().x, getRandomPosition().x, initialPosition.x],
              y: [initialPosition.y, getRandomPosition().y, getRandomPosition().y, initialPosition.y],
              transition: {
                duration: Math.random() * 20 + 30,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "linear"
              },
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        );
      })}
    </section>
  );
};

export default Hero;
