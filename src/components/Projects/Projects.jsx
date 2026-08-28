/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';

const FEATURED_PROJECT_LIMIT = 6;

const Projects = () => {
  const featuredProjects = projects.slice(0, FEATURED_PROJECT_LIMIT);

  return (
    <section id="projects" className="bg-primary-bg text-primary-text py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Featured Projects</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-accent bg-accent px-7 py-3 font-bold text-primary-bg transition-colors duration-300 hover:bg-white"
          >
            See More Projects <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-secondary-bg rounded-lg overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_rgba(230,213,184,0.25)] transition-all duration-300 flex flex-col h-full border border-border-color hover:border-accent/70"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.id}`}
        aria-label={`View details for ${project.title}`}
        className="relative group block overflow-hidden aspect-[4/3] bg-primary-bg sm:aspect-auto sm:h-72 md:h-80"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain sm:object-cover object-top transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary-bg p-8">
            <div className="w-full rounded-lg border border-white/10 bg-secondary-bg p-6" style={{ boxShadow: `0 0 0 1px ${project.accent || '#E6D5B8'}22` }}>
              <div className="mb-8 flex items-center justify-between">
                <div className="h-3 w-24 rounded-full" style={{ backgroundColor: project.accent || '#E6D5B8' }}></div>
                <div className="h-8 w-8 rounded-lg border border-white/10"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 rounded-full bg-white/15"></div>
                <div className="h-4 w-1/2 rounded-full bg-white/10"></div>
                <div className="grid grid-cols-3 gap-3 pt-5">
                  <div className="h-16 rounded-lg bg-white/[0.06]"></div>
                  <div className="h-16 rounded-lg bg-white/[0.08]"></div>
                  <div className="h-16 rounded-lg bg-white/[0.06]"></div>
                </div>
              </div>
              <p className="mt-8 font-mono text-sm uppercase tracking-widest" style={{ color: project.accent || '#E6D5B8' }}>
                {project.visualLabel}
              </p>
            </div>
          </div>
        )}

        {project.category && (
          <span className="absolute top-3 left-3 rounded-full border border-accent/40 bg-primary-bg/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent backdrop-blur-sm">
            {project.category}
          </span>
        )}

        {/* Hover scrim + action, only visible on hover so the image stays clear at rest */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-accent text-primary-bg px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-3">
          <h3 className="text-xl font-bold font-poppins text-accent">
            <Link to={`/project/${project.id}`} className="hover:underline underline-offset-4 decoration-accent/50">
              {project.title}
            </Link>
          </h3>
          <div className="flex shrink-0 space-x-4">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="text-primary-text hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={20} />
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-primary-text hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
            {project.appStoreLink && (
              <motion.a
                href={project.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on the App Store`}
                className="text-primary-text hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaApple size={20} />
              </motion.a>
            )}
            {project.playStoreLink && (
              <motion.a
                href={project.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on Google Play`}
                className="text-primary-text hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGooglePlay size={20} />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-secondary-text mb-6 font-poppins text-base leading-relaxed flex-grow whitespace-pre-line line-clamp-3">
          {project.shortDescription}
        </p>

        {project.problem && (
          <div className="mb-6 rounded-lg border border-border-color bg-primary-bg/60 p-4">
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-accent">Problem solved</p>
            <p className="text-sm leading-relaxed text-secondary-text line-clamp-3">{project.problem}</p>
          </div>
        )}

        <div className="space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className="text-accent bg-accent/10 text-xs font-mono px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-accent bg-accent/10 text-xs font-mono px-3 py-1 rounded-full">...</span>
            )}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-border-color">
            <div className="text-secondary-text text-sm font-mono">
              Role: <span className="text-accent">{project.role}</span>
            </div>
            <Link
              to={`/project/${project.id}`}
              className="flex items-center gap-2 text-primary-text hover:text-accent font-bold text-sm transition-colors group/link"
            >
              Read More <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
