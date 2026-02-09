import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaCoffee } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-bg text-secondary-text py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10 text-center">
            <h3 className="text-xl font-bold font-poppins text-accent mb-6">
              Connect With Me
            </h3>
            <div className="flex space-x-8">
              {[
                { icon: FaGithub, href: "https://github.com/kobiowuquadri", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/quadri-kobiowu-955313233", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://x.com/quadrikobiowu", label: "Twitter" },
                { icon: FaEnvelope, href: "mailto:kobiowuq@gmail.com", label: "Email" },
                // { icon: FaCoffee, href: "https://buymeacoffee.com/quarikobiowu", label: "Buy Me a Coffee" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-accent transition-colors duration-300 transform p-2 hover:bg-white/5 rounded-full"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://buymeacoffee.com/quarikobiowu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFDD00] text-[#000000] px-6 py-3 rounded-xl font-bold hover:bg-[#FFDD00]/90 transition-all duration-300 shadow-lg hover:shadow-[#FFDD00]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCoffee size={20} />
              <span>Buy me a coffee</span>
            </motion.a>

            <div className="pt-8 space-y-2">
              <p className="font-poppins text-sm text-secondary-text">
                Designed & Built with <span className="text-accent">♥</span> by Quadri Kobiowu
              </p>
              <p className="text-xs text-secondary-text opacity-60">
                © {currentYear} All rights reserved
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-mono px-4 py-2 border border-white/5 rounded-full bg-white/5 inline-block">
              Software Engineer at{' '}
              <a
                href="http://masteringbackend.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors font-semibold"
              >
                Mastering Backend
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
