import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPython,
  FaJava,
  FaMobileAlt,
  FaDatabase,
  FaCode,
  FaTools
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
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiExpo,
  SiSupabase,
  SiGraphql,
  SiPrisma,
  SiNestjs
} from 'react-icons/si';

const SkillCard = ({ title, icon: Icon, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-secondary-bg p-6 rounded-xl border border-border-color hover:border-accent transition-colors duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary-bg rounded-lg text-accent">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold font-poppins text-primary-text">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-primary-bg px-3 py-2 rounded-lg text-secondary-text hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
          >
            <skill.icon size={16} />
            <span className="text-sm font-mono">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: FaMobileAlt,
      skills: [
        { name: "React Native", icon: FaReact },
        { name: "Expo", icon: SiExpo },
        { name: "NativeWind", icon: SiTailwindcss },
        { name: "iOS & Android", icon: FaMobileAlt }
      ]
    },
    {
      title: "Frontend Development",
      icon: FaCode,
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux }
      ]
    },
    {
      title: "Backend Development",
      icon: FaDatabase,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Prisma", icon: SiPrisma }
      ]
    },
    {
      title: "Database & Cloud",
      icon: FaDatabase,
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "Supabase", icon: SiSupabase },
        { name: "Vercel", icon: SiVercel }
      ]
    },
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: FaTools,
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "Postman", icon: SiPostman },
        { name: "Figma", icon: FaFigma }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-primary-bg text-primary-text py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex items-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Technical Arsenal</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
