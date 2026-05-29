import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import myCV from '../../assets/QUADRI_ KOBIOWU_ CV.pdf';

const scrollToSection = (sectionId, onComplete) => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  const headerOffset = 88;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.history.pushState(null, '', `#${sectionId}`);
  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  });

  if (onComplete) {
    onComplete();
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-bg/80 backdrop-blur-md text-primary-text fixed w-full z-50 font-sans border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={'/'} className="flex items-center gap-3">
          <span className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
            QK.
          </span>
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-accent focus:outline-none p-2 rounded-md hover:bg-white/5 transition-colors"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
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
            className="fixed top-0 right-0 bg-secondary-bg/95 backdrop-blur-xl border-l border-white/10 p-8 w-[min(75vw,400px)] h-screen z-50 shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="flex justify-end mb-12">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close navigation menu"
              >
                <FaTimes size={24} className="text-accent" />
              </motion.button>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              <div className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center">
                <SocialIcons mobile />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
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
  <ul className={`flex ${mobile ? 'flex-col space-y-6 w-full' : 'space-x-8'} items-center`}>
    {[
      { name: 'About', number: '01' },
      { name: 'Projects', number: '02' },
      { name: 'Experience', number: '03' },
      { name: 'Services', number: '04' },
      { name: 'Skills', number: '05' },
      { name: 'Collaboration', number: '06' },
      { name: 'Contact', number: '07' }
    ].map(({ name, number }) => (
      <motion.li
        key={name}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={mobile ? 'w-full text-center' : ''}
      >
        <a
          href={`#${name.toLowerCase()}`}
          className={`group flex items-center ${mobile ? 'justify-center text-lg py-2' : 'space-x-1 text-sm'} font-mono`}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(name.toLowerCase(), () => mobile && setIsMenuOpen(false));
          }}
        >
          <span className="text-accent opacity-80 group-hover:opacity-100 transition-opacity">{number}.</span>
          <span className="text-primary-text group-hover:text-accent transition-colors duration-300 ml-2">
            {name}
          </span>
        </a>
      </motion.li>
    ))}
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={mobile ? 'pt-4' : ''}
    >
      <a
        href={myCV}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-accent text-accent px-6 py-2 rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-300"
      >
        Resume
      </a>
    </motion.li>
  </ul>
);

const SocialIcons = ({ mobile }) => (
  <div className={`flex ${mobile ? 'space-x-8' : 'space-x-5'} items-center`}>
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
        className="text-secondary-text hover:text-accent transition-colors duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={mobile ? 24 : 20} />
      </motion.a>
    ))}
  </div>
);

export default Header;
