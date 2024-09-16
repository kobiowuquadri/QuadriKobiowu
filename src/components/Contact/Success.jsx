import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <section className="bg-green-100 text-green-900 h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Success!</h1>
        <p className="text-lg mb-8">Thank you for reaching out. I will get back to you soon!</p>
        <Link to="/" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300">Go Back to Home</Link>
      </motion.div>
    </section>
  );
};

export default Success;
