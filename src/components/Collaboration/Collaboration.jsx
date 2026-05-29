import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const opportunities = [
  "Freelance Projects",
  "Contract Roles",
  "Startup Partnerships",
  "Technical Consulting",
  "Software Engineering Opportunities",
  "Open Source Collaboration"
];

const Collaboration = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collaboration" className="bg-secondary-bg text-primary-text py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-accent/20 bg-primary-bg p-5 sm:p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-10 items-center">
            <div>
              <p className="mb-4 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#2DD4BF]">Available now</p>
              <h2 className="mb-5 text-2xl sm:text-3xl md:text-5xl font-bold font-poppins leading-tight">
                Available for Collaboration
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                I am currently open to meaningful software work, technical partnerships,
                consulting engagements, and engineering roles where strong product execution
                matters.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {opportunities.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border-color bg-secondary-bg p-3 sm:p-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF]">
                      <FaCheck size={12} />
                    </span>
                    <span className="text-sm leading-snug text-secondary-text">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-accent px-5 sm:px-7 py-3 text-sm sm:text-base font-bold text-primary-bg transition-colors duration-300 hover:bg-white"
              >
                Start a Conversation <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
