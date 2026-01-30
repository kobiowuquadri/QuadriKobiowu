import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <section className="bg-primary-bg text-primary-text h-screen flex items-center justify-center">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-accent font-poppins">Message Sent!</h1>
        <p className="text-lg mb-8 font-poppins">Thank you for reaching out. I will get back to you soon!</p>
        <Link 
          to="/" 
          className="bg-accent text-primary-bg px-6 py-3 rounded font-bold hover:bg-accent/90 transition duration-300 font-poppins"
        >
          Return to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default Success;
