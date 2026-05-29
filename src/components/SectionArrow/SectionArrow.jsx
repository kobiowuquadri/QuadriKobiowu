import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const SectionArrow = ({ targetId, label, className = 'bg-primary-bg' }) => {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${className} flex justify-center pb-8`}>
      <motion.button
        type="button"
        onClick={scrollToTarget}
        className="group flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        aria-label={`Scroll to ${label}`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
          <FaArrowDown className="text-sm text-accent animate-bounce" />
        </span>
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent/70 transition-opacity group-hover:text-accent">
          {label}
        </span>
      </motion.button>
    </div>
  );
};

export default SectionArrow;
