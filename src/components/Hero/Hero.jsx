import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const bubbles = Array.from({ length: 20 }, (_, i) => i); // Increased number of bubbles

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
      <div className="container mx-auto px-4 py-16 z-10">
        {/* Your existing content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Hi, I am <span className="text-gray-400">Quadri Kobiowu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-poppins text-gray-300">
              Fullstack Developer | Backend Engineer & Problem Solver
            </h2>
            <p className="text-lg mb-8 font-poppins text-gray-400">
              I create elegant solutions to complex problems, bringing ideas to life through code.
            </p>
            <p className="text-lg mb-8 font-poppins text-gray-400">
              Hobby: Watching Movies... 
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#333' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-bold py-3 px-6 rounded-full inline-flex items-center font-poppins transition-colors duration-300"
            >
              View My Work
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
                duration: Math.random() * 20 + 30, // Longer duration for more subtle movement
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
