import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import headerImg from '../../assets/my_pics2-modified.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white text-black shadow-md fixed w-full z-20 font-sans">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
        <h1 className="text-xl font-bold font-poppins">DevQuat</h1>
      </div>

        {/* Hamburger menu icon with animation */}
        <motion.button 
          onClick={toggleMenu} 
          className="md:hidden text-black focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Navigation and social icons for larger screens */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <SocialIcons />
        </nav>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white py-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col items-center">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              <SocialIcons mobile />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLinks = ({ mobile, setIsMenuOpen }) => (
  <ul className={`flex ${mobile ? 'flex-col items-center space-y-2' : 'space-x-4'}`}>
    {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
      <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a 
          href={`#${item.toLowerCase()}`} 
          className="hover:text-gray-600 transition-colors duration-300 font-poppins"
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          {item}
        </a>
      </motion.li>
    ))}
  </ul>
);

const SocialIcons = ({ mobile }) => (
  <div className={`flex ${mobile ? 'mt-4 space-x-6' : 'space-x-4'}`}>
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
        className="text-gray-600 hover:text-black transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={mobile ? 28 : 20} />
      </motion.a>
    ))}
  </div>
);

export default Header;
