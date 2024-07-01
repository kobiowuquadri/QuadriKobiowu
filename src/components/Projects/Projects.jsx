import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1. This could be a web app, mobile app, or any other significant project you've worked on.",
    image: "https://via.placeholder.com/300",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "Description of Project 2. Highlight the problem it solves and your role in its development.",
    image: "https://via.placeholder.com/300",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "Details about Project 3. Mention any unique challenges you overcame or innovative features you implemented.",
    image: "https://via.placeholder.com/300",
    technologies: ["React Native", "Firebase"],
    githubLink: "https://github.com/yourusername/project3",
    liveLink: "https://project3.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-poppins">{project.title}</h3>
        <p className="text-gray-600 mb-4 font-poppins">{project.description}</p>
        <div className="flex flex-wrap mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-sm font-semibold mr-2 mb-2 px-2 py-1 rounded font-poppins">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <motion.a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt size={24} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
