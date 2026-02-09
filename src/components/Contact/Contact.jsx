import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" className="bg-primary-bg text-primary-text py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Get In Touch</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary-bg p-8 md:p-10 rounded-2xl border border-border-color shadow-2xl order-2 lg:order-1"
          >
            <h3 className="text-accent text-2xl font-bold mb-2 font-poppins">Send a Message</h3>
            <p className="text-secondary-text mb-8 font-poppins text-sm">Have a project in mind or just want to say hi?</p>

            <form
              action="https://formsubmit.co/kobiowuq@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins transition-all duration-300"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins transition-all duration-300"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins resize-none transition-all duration-300"
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent text-primary-bg py-4 px-6 rounded-lg font-bold hover:bg-accent/90 transition duration-300 font-poppins shadow-lg shadow-accent/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-primary-text leading-tight">
                Let's Build Something <span className="text-accent">Amazing</span> Together
              </h3>
              <p className="text-secondary-text text-lg leading-relaxed font-poppins">
                I'm currently available for freelance work and open to full-time opportunities.
                If you have a project that needs some creative touch, or just want to discuss technology,
                my inbox is always open.
              </p>
            </div>

            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-color">
              <h4 className="text-xl font-bold mb-6 font-poppins text-accent">Connect with me</h4>
              <div className="space-y-6">
                <a href="mailto:kobiowuq@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-primary-bg rounded-lg flex items-center justify-center text-secondary-text group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-secondary-text uppercase tracking-wider font-semibold">Email</p>
                    <span className="text-primary-text font-poppins group-hover:text-accent transition-colors duration-300">kobiowuq@gmail.com</span>
                  </div>
                </a>

                <a href="https://linkedin.com/in/quadri-kobiowu-955313233" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-primary-bg rounded-lg flex items-center justify-center text-secondary-text group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-secondary-text uppercase tracking-wider font-semibold">LinkedIn</p>
                    <span className="text-primary-text font-poppins group-hover:text-accent transition-colors duration-300">Connect on LinkedIn</span>
                  </div>
                </a>

                <a href="https://github.com/kobiowuquadri" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-primary-bg rounded-lg flex items-center justify-center text-secondary-text group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    <FaGithub className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-secondary-text uppercase tracking-wider font-semibold">GitHub</p>
                    <span className="text-primary-text font-poppins group-hover:text-accent transition-colors duration-300">Follow on GitHub</span>
                  </div>
                </a>

                <a href="https://x.com/quadrikobiowu" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-primary-bg rounded-lg flex items-center justify-center text-secondary-text group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    <FaTwitter className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-secondary-text uppercase tracking-wider font-semibold">Twitter</p>
                    <span className="text-primary-text font-poppins group-hover:text-accent transition-colors duration-300">Follow on Twitter</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
