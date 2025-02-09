import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaNpm,
  FaDocker,
  FaFigma,
  FaSlack,
  FaCode,
  FaPython,
  FaJava,
  FaPhp,
  FaSass,
  FaDiscord
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiRedux,
  SiPostman,
  SiVercel,
  SiSwagger,
  SiJest,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiCss3,
  SiNotion,
  SiRender
} from 'react-icons/si';

const techCategories = [
  {
    title: "Programming Languages",
    tools: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: FaPhp }
    ]
  },
  {
    title: "Frontend",
    tools: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "SCSS", icon: FaSass },
      { name: "Module CSS", icon: SiCss3 }
    ]
  },
  {
    title: "Backend",
    tools: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase }
    ]
  },
  {
    title: "Development Tools",
    tools: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "npm", icon: FaNpm },
      { name: "Docker", icon: FaDocker }
    ]
  },
  {
    title: "Testing & API Tools",
    tools: [
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "Jest", icon: SiJest }
    ]
  },
  {
    title: "Deployment & Collaboration",
    tools: [
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Figma", icon: FaFigma },
      { name: "Notion", icon: SiNotion },
      { name: "Slack", icon: FaSlack },
      { name: "Discord", icon: FaDiscord }
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
          <span className="text-[#64FFDA] font-mono">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Tools & Technologies</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-[#0A192F] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-[#64FFDA] font-poppins">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="flex items-center gap-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                  >
                    <tool.icon className="text-xl" />
                    <span className="text-sm font-poppins">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
