import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <section className="bg-[#0A192F] text-[#CCD6F6] h-screen flex items-center justify-center">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-[#64FFDA] font-poppins">Message Sent!</h1>
        <p className="text-lg mb-8 font-poppins">Thank you for reaching out. I will get back to you soon!</p>
        <Link 
          to="/" 
          className="bg-[#64FFDA] text-[#0A192F] px-6 py-3 rounded font-bold hover:bg-[#64FFDA]/90 transition duration-300 font-poppins"
        >
          Return to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default Success;
