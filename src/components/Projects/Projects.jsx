import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';

const Projects = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Notable Projects</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-secondary-bg rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative group overflow-hidden h-72 md:h-80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

        {/* Overlay Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/project/${project.id}`}
            className="bg-accent text-primary-bg px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-poppins text-accent">{project.title}</h3>
          <div className="flex space-x-4">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
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
