import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaServer, 
  FaTools, 
  FaCode,
  FaUsers,
  FaLightbulb,
  FaChartLine
} from 'react-icons/fa';

const skillCategories = [
  {
    title: "Technical Leadership",
    icon: FaUsers,
    skills: [
      "Engineering Team Management",
      "Technical Mentorship",
      "Agile Leadership",
      "Cross-functional Collaboration"
    ]
  },
  {
    title: "Strategy & Innovation",
    icon: FaLightbulb,
    skills: [
      "Technology Roadmapping",
      "Digital Transformation",
      "Innovation Management",
      "Technical Vision"
    ]
  },
  {
    title: "Architecture",
    icon: FaServer,
    skills: [
      "System Design",
      "Cloud Architecture",
      "Scalable Solutions",
      "Microservices"
    ]
  },
  {
    title: "Development",
    icon: FaCode,
    skills: [
      "Full Stack Development",
      "React/Node.js Ecosystem",
      "API Design",
      "Performance Optimization"
    ]
  },
  {
    title: "Infrastructure",
    icon: FaTools,
    skills: [
      "AWS Cloud Services",
      "CI/CD Pipelines",
      "Docker/Kubernetes",
      "DevOps Practices"
    ]
  },
  {
    title: "Business Impact",
    icon: FaChartLine,
    skills: [
      "Strategic Planning",
      "Resource Optimization",
      "KPI Management",
      "ROI Analysis"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#112240] text-[#CCD6F6] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#64FFDA] font-mono">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Skills & Expertise</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, index }) => {
  const Icon = category.icon;
  
  return (
    <motion.div 
      className="bg-[#0A192F] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-[#64FFDA] text-2xl" />
        <h3 className="text-xl font-bold font-poppins text-[#64FFDA]">
          {category.title}
        </h3>
      </div>
      
      <ul className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.li 
            key={skillIndex}
            className="flex items-center space-x-2 text-[#8892B0]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
          >
            <span className="text-[#64FFDA]">▹</span>
            <span className="font-poppins text-sm">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
