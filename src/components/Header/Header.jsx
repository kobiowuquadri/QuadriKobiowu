import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A192F]/90 backdrop-blur-sm text-[#CCD6F6] fixed w-full z-20 font-sans">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={'/'} className="text-2xl font-bold font-mono text-[#64FFDA]">
          QK.
        </Link>

        <motion.button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-[#64FFDA] focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </AnimatePresence>
        </motion.button>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <SocialIcons />
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed top-0 right-0 bg-[#112240] p-8 w-[min(75vw,400px)] h-screen z-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="flex justify-end mb-8">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes size={24} className="text-[#64FFDA]" />
              </motion.button>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              <SocialIcons mobile />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

const NavLinks = ({ mobile, setIsMenuOpen }) => (
  <ul className={`flex ${mobile ? 'flex-col items-center space-y-6' : 'space-x-8'}`}>
    {[
      { name: 'About', number: '01' },
      { name: 'Skills', number: '02' },
      { name: 'Projects', number: '03' },
      { name: 'Contact', number: '04' }
    ].map(({ name, number }) => (
      <motion.li 
        key={name}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href={`#${name.toLowerCase()}`} 
          className="group flex items-center space-x-2 font-mono text-sm"
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          <span className="text-[#64FFDA]">{number}.</span>
          <span className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300">
            {name}
          </span>
        </a>
      </motion.li>
    ))}
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a 
        href="/resume.pdf"
        target="_blank"
        className="border border-[#64FFDA] text-[#64FFDA] px-4 py-2 rounded hover:bg-[#64FFDA]/10 transition-colors duration-300"
      >
        Resume
      </a>
    </motion.li>
  </ul>
);

const SocialIcons = ({ mobile }) => (
  <div className={`flex ${mobile ? 'mt-8 space-x-6' : 'space-x-4'}`}>
    {[
      { icon: FaGithub, href: "https://github.com/kobiowuquadri" },
      { icon: FaLinkedin, href: "https://www.linkedin.com/in/quadri-kobiowu-955313233" },
      { icon: FaEnvelope, href: "mailto:kobiowuq@gmail.com" }
    ].map(({ icon: Icon, href }, index) => (
      <motion.a 
        key={index}
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={mobile ? 24 : 20} />
      </motion.a>
    ))}
  </div>
);

export default Header;