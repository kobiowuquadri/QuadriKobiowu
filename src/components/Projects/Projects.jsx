import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import estatengImg from '../../assets/estateng.png'
import danritImg from '../../assets/danrit2.png'
import expressStarterImg from '../../assets/expressStarterFile.png'

// const projects = [
//   {
//     title: "MyEstate",
//     description: "A comprehensive real estate platform for property listings, management, and transactions in Nigeria.",
//     iframeSrc: "https://myestate.ng/",
//     technologies: ["React", "Node.js", "MongoDB", "Express"],
//     githubLink: "",
//     liveLink: "https://myestate.ng/"
//   },
//   {
//     title: "Express MVC Starter",
//     description: "A boilerplate for quickly setting up a Node.js web application using Express framework with MVC architecture.",
//     iframeSrc: "https://github.com/kobiowuquadri/express-mvc-starter",
//     technologies: ["Node.js", "Express", "MVC", "MongoDB"],
//     githubLink: "https://github.com/kobiowuquadri/express-mvc-starter",
//     liveLink: ""
//   }
// ];

const projects = [
  {
    title: "DanRit Beauty Salon",
    description: "DanRit Beauty Salon is a family-owned business in the United State, dedicated to exceptional beauty services. Our trained beauticians provide bespoke treatments that leave every customer who visits us satisfied and happy.",
    image: danritImg,
    technologies: ["React.js", "SASS", "Module CSS", "TailwindCSS"],
    liveLink: "https://danritbeautysalon.com",
    role: "Frontend Developer"
  },
  {
    title: "EstateNG",
    description: "MyEstate is a comprehensive real estate platform designed for property listings, management, and transactions in Nigeria. User-friendly features and robust functionalities revolutionize the real estate market in Nigeria.",
    image: estatengImg,
    technologies: ["Node.js", "Express.js", "MongoDB"],
    liveLink: "https://myestate.ng",
    role: "Backend Engineer"
  },
  {
    title: "Express MVC Starter",
    description: "A boilerplate for quickly setting up a Node.js web application using Express framework with MVC architecture.",
    image: expressStarterImg,
    technologies: ["Node.js", "Express", "MVC", "MongoDB"],
    githubLink: "https://github.com/kobiowuquadri/express-mvc-starter",
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
      <img src={project.image} alt={project.title} className="w-full h-100 object-cover" />
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
