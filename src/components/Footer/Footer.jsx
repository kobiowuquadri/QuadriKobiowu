import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaCoffee } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-bg text-secondary-text py-12 border-t border-border-color">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h3 className="text-center text-accent font-mono text-sm mb-2">
              Let's Connect
            </h3>
            <div className="flex space-x-6">
              {[
                { icon: FaGithub, href: "https://github.com/kobiowuquadri", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/quadri-kobiowu-955313233", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://x.com/quadrikobiowu", label: "Twitter" },
                { icon: FaEnvelope, href: "mailto:kobiowuq@gmail.com", label: "Email" },
                { icon: FaCoffee, href: "https://buymeacoffee.com/quarikobiowu", label: "Buy Me a Coffee" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-text hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://buymeacoffee.com/quarikobiowu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFDD00] text-[#000000] px-4 py-2 rounded-lg font-bold hover:bg-[#FFDD00]/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCoffee size={20} />
              <span>Buy me a coffee</span>
            </motion.a>
            
            <p className="font-mono text-sm pt-4">
              Designed & Built by Quadri Kobiowu
            </p>
            <p className="text-xs">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          <motion.p 
            className="mt-6 text-center text-xs max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineer at{' '}
            <a 
              href="https://nagidafoods.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Nagida Foods
            </a>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
