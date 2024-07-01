import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/kobiowuquadri" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/quadri-kobiowu-955313233" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="mailto:kobiowuq@gmail.com" className="hover:text-gray-400 transition-colors duration-300">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © {currentYear} Quadri Kobiowu (DevQuat). All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
