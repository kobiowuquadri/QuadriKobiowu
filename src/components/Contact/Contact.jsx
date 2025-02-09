import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#64FFDA] font-mono">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Get In Touch</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </motion.div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
             <motion.form 
              action="https://formsubmit.co/kobiowuq@gmail.com"
              method="POST"
              className="bg-[#112240] text-[#CCD6F6] rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2 font-poppins">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] font-poppins"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2 font-poppins">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] font-poppins"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2 font-poppins">Message</label>
                <textarea
                  id="message"
                  name="Message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-3 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] font-poppins"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#64FFDA] text-[#0A192F] py-2 px-4 rounded-md hover:bg-[#64FFDA]/90 transition duration-300 font-bold font-poppins"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              className="bg-[#112240] text-[#CCD6F6] rounded-lg p-8 shadow-lg h-full flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 font-poppins text-[#64FFDA]">Contact Information</h3>
                <p className="mb-4 font-poppins">Feel free to reach out to me through any of the following channels:</p>
                <ul className="space-y-4">
                  <li className="flex items-center font-poppins">
                    <FaEnvelope className="mr-2 text-[#64FFDA]" />
                    <a href="mailto:kobiowuq@gmail.com" className="hover:text-[#64FFDA] transition-colors duration-300">kobiowuq@gmail.com</a>
                  </li>
                  <li className="flex items-center font-poppins">
                    <FaLinkedin className="mr-2 text-[#64FFDA]" />
                    <a href="https://linkedin.com/in/quadri-kobiowu-955313233" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors duration-300">LinkedIn Profile</a>
                  </li>
                  <li className="flex items-center font-poppins">
                    <FaGithub className="mr-2 text-[#64FFDA]" />
                    <a href="https://github.com/kobiowuquadri" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors duration-300">GitHub Profile</a>
                  </li>
                  <li className="flex items-center font-poppins">
                    <FaTwitter className="mr-2 text-[#64FFDA]" />
                    <a href="https://x.com/quadrikobiowu" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors duration-300">Twitter Profile</a>
                  </li>
                </ul>
              </div>
              <p className="mt-8 text-sm text-[#8892B0] font-poppins">I am always open to new opportunities and collaborations. Do not hesitate to get in touch!</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
