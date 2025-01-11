import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import estatengImg from '../../assets/estateng.png'
import danritImg from '../../assets/danrit2.png'
import expressStarterImg from '../../assets/expressStarterFile.png'

const projects = [
  {
    title: "DanRit Beauty Salon",
    description: "Led the development of a modern, responsive web platform for DanRit Beauty Salon, implementing sophisticated UI/UX design patterns and ensuring optimal performance across all devices.",
    image: danritImg,
    technologies: ["React.js", "SASS", "Module CSS", "TailwindCSS"],
    liveLink: "https://danritbeautysalon.com",
    role: "Technical Lead"
  },
  {
    title: "EstateNG",
    description: "Architected and implemented a scalable real estate platform, featuring robust property management systems, secure payment integration, and advanced search functionality. Significantly improved market reach and operational efficiency.",
    image: estatengImg,
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS"],
    liveLink: "https://myestate.ng",
    role: "System Architect"
  },
  {
    title: "Express MVC Starter",
    description: "Developed an enterprise-grade Node.js boilerplate implementing best practices, design patterns, and security measures. Accelerates development workflow while maintaining code quality and consistency.",
    image: expressStarterImg,
    technologies: ["Node.js", "Express", "MVC", "MongoDB"],
    githubLink: "https://github.com/kobiowuquadri/express-mvc-starter",
    role: "Lead Developer"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0A192F] text-[#CCD6F6] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#64FFDA] font-mono">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Notable Projects</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </motion.div>

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
      className="bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:translate-y-[-10px] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-[#64FFDA]/10 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-poppins text-[#64FFDA]">{project.title}</h3>
          <div className="flex space-x-4">
            {project.githubLink && (
              <motion.a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
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
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-[#8892B0] mb-4 font-poppins text-sm">{project.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-[#64FFDA] bg-[#64FFDA]/10 text-xs font-mono px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-[#8892B0] text-sm font-mono">
            Role: <span className="text-[#64FFDA]">{project.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
