import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import estatengImg from '../../assets/estateng.png'
import danritImg from '../../assets/danrit2.png'
import expressStarterImg from '../../assets/Screenshot 2025-02-09 at 11.59.12.png'
import codeVortexImg from '../../assets/Screenshot 2025-02-09 at 11.58.06.png'
import docifyImg from '../../assets/Screenshot 2025-02-09 at 12.30.48.png'
import brainwaveImg from '../../assets/Screenshot 2025-02-09 at 12.36.49.png'

const projects = [
  {
    title: "Code Vortex Academy",
    description: "Built an educational platform that empowers aspiring developers. Features include course management, interactive learning modules, and a responsive design. The platform has helped numerous students transition into tech careers.",
    image: codeVortexImg,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://codevortexacademy.vercel.app/",
    role: "Founder & Lead Developer"
  },
  {
    title: "Docify Health",
    description: "Developed the backend infrastructure for an AI-powered health companion platform. Implemented real-time health monitoring, personalized recommendations, and secure data handling using Node.js and MongoDB. Integrated DeepseekAI for intelligent health insights.",
    image: docifyImg,
    technologies: ["Node.js", "Express.js", "MongoDB", "DeepseekAI"],
    liveLink: "https://docify-health.vercel.app/",
    role: "Backend Engineer"
  },
  {
    title: "DanRit Beauty Salon",
    description: "Built a modern, responsive website for DanRit Beauty Salon using React.js and TailwindCSS. Implemented user-friendly booking features and a dynamic service catalog that helped increase their online presence.",
    image: danritImg,
    technologies: ["React.js", "TailwindCSS", "SASS", "MODULE CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://danritbeautysalon.com",
    role: "Frontend Developer"
  },
  {
    title: "EstateNG",
    description: "Developed a real estate platform that helps connect property buyers with sellers. Built the backend with Node.js and Express, implemented secure user authentication, and created a responsive frontend with React.",
    image: estatengImg,
    technologies: ["Node.js", "Express.js", "MongoDB"],
    liveLink: "https://myestate.ng",
    role: "Backend Engineer"
  },
  {
    title: "Brainwave Consultancy",
    description: "Developed a full-stack website for an AI consultancy firm that offers custom AI training and hackathons. Built with modern technologies to showcase their services, facilitate workshop bookings, and demonstrate AI capabilities. The platform helps organizations prepare for future digital challenges.",
    image: brainwaveImg,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://brainwaveconsultancy.vercel.app/",
    role: "Full Stack Developer"
  },
  {
    title: "QuickServe",
    description: "Created a robust Node.js starter template with advanced features including JWT authentication, Cloudinary integration, email services, and Swagger documentation. Built to help developers quickly bootstrap production-ready backend applications.",
    image: expressStarterImg,
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubLink: "https://github.com/kobiowuquadri/quick-serve",
    role: "Developer & Maintainer"
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
          <span className="text-[#64FFDA] font-mono">02.</span>
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
