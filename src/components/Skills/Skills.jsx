import React, { useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaTools, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    skills: ["Node.js", "Express", "RESTful APIs"]
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "DevOps",
    icon: FaServer,
    skills: ["Docker", "AWS", "CI/CD", "Nginx"]
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: ["Git", "Webpack", "Babel", "Jest", "Postman"]
  },
  {
    title: "Other",
    icon: FaCode,
    skills: [ "Agile Methodologies", "Problem Solving" ]
  }
];

const Skills = () => {


  return (
    <section id="skills" className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins"
        >
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ category }) => {
  return (
    <div 
      className="bg-gray-100 rounded-lg p-6 shadow-lg"
      data-aos="zoom-in-up" 
    >
      <div className="flex items-center mb-4">
        <category.icon size={24} className="mr-2" />
        <h3 className="text-xl font-bold font-poppins">{category.title}</h3>
      </div>
      <ul className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-center">
            <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
            <span className="font-poppins">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
