import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server or an email service
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white text-black rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2 font-poppins">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-poppins"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2 font-poppins">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-poppins"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2 font-poppins">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-poppins"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              className="bg-white text-black rounded-lg p-8 shadow-lg h-full flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">Contact Information</h3>
                <p className="mb-4 font-poppins">Feel free to reach out to me through any of the following channels:</p>
                <ul className="space-y-2">
                  <li className="flex items-center font-poppins">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
                  </li>
                  <li className="flex items-center font-poppins">
                    <FaLinkedin className="mr-2" />
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                  </li>
                  <li className="flex items-center font-poppins">
                    <FaGithub className="mr-2" />
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
                  </li>
                  <li className="flex items-center font-poppins">
                    <FaTwitter className="mr-2" />
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter Profile</a>
                  </li>
                </ul>
              </div>
              <p className="mt-8 text-sm text-gray-600 font-poppins">I am always open to new opportunities and collaborations. Do not hesitate to get in touch!</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
