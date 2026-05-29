import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaSitemap, FaComments } from 'react-icons/fa';

const services = [
  {
    title: "Full-Stack Development",
    description: "Custom web applications, SaaS platforms, dashboards, portals, and business tools built end to end.",
    icon: FaCode
  },
  {
    title: "Mobile App Development",
    description: "Android and iOS applications using React Native and Expo, with practical product workflows and clean interfaces.",
    icon: FaMobileAlt
  },
  {
    title: "Backend Engineering",
    description: "Scalable APIs, authentication systems, integrations, database design, and production-ready server logic.",
    icon: FaServer
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, product planning, technical strategy, and guidance for teams making important build decisions.",
    icon: FaComments
  },
  {
    title: "System Design",
    description: "Scalable software architecture, infrastructure planning, deployment strategy, and maintainable engineering foundations.",
    icon: FaSitemap
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-secondary-bg text-primary-text py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-2 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">04.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">Services</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full rounded-lg border border-border-color bg-primary-bg/70 p-5 sm:p-6 transition-colors duration-300 hover:border-accent"
            >
              <div className="mb-5 sm:mb-6 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <service.icon size={22} />
              </div>
              <h3 className="mb-3 text-lg sm:text-xl font-bold font-poppins text-primary-text">{service.title}</h3>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
