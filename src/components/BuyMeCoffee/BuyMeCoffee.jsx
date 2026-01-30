import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const BuyMeCoffee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonVariants = {
    initial: { 
      opacity: 0, 
      x: 100 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      x: 100 
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-4 z-50 flex flex-col items-end"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={buttonVariants}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Mobile Text Popup */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="bg-primary-bg text-accent px-4 py-2 rounded-lg mb-2 text-sm font-mono shadow-lg"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Support my work! ☕
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href="https://buymeacoffee.com/quarikobiowu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#FFDD00] text-[#000000] px-4 py-3 rounded-full font-bold shadow-lg hover:bg-[#FFDD00]/90 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaCoffee size={20} className="animate-bounce" />
            <span className="hidden md:inline">Buy me a coffee</span>
            <span className="inline md:hidden">Buy me a coffee</span>
          </motion.a>

          {/* Mobile Floating Coffee Icons */}
          <AnimatePresence>
            {isHovered && (
              <div className="absolute bottom-full right-0 mb-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-[#FFDD00]"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      y: -50,
                      x: Math.sin(i * Math.PI/3) * 20
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <FaCoffee size={16} />
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BuyMeCoffee; 