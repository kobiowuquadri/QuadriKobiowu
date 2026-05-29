import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaMobileAlt,
  FaDatabase,
  FaCode,
  FaServer,
  FaLinux,
  FaGithub,
  FaAws
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiExpo,
  SiNestjs,
  SiRedis,
  SiNginx,
  SiPm2,
  SiRedux,
  SiVite,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiGraphql,
  SiPostman,
  SiVercel
} from 'react-icons/si';

const SkillCard = ({ title, icon: Icon, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-secondary-bg p-6 rounded-lg border border-border-color hover:border-accent transition-colors duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary-bg rounded-lg text-accent">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold font-poppins text-primary-text">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
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
      title: "Frontend Engineering",
      icon: FaCode,
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
        { name: "Zustand", icon: FaCode },
        { name: "Vite", icon: SiVite }
      ]
    },
    {
      title: "Mobile Development",
      icon: FaMobileAlt,
      skills: [
        { name: "React Native", icon: FaReact },
        { name: "Expo", icon: SiExpo },
        { name: "NativeWind", icon: SiTailwindcss },
        { name: "EAS Build", icon: FaMobileAlt }
      ]
    },
    {
      title: "Backend Engineering",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "NestJS", icon: SiNestjs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: FaServer },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Prisma", icon: SiPrisma },
        { name: "JWT/Auth", icon: FaServer }
      ]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Redis", icon: SiRedis },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "Supabase", icon: SiSupabase }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaServer,
      skills: [
        { name: "Linux", icon: FaLinux },
        { name: "Nginx", icon: SiNginx },
        { name: "PM2", icon: SiPm2 },
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: FaAws },
        { name: "VPS", icon: FaServer },
        { name: "Vercel", icon: SiVercel },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-primary-bg text-primary-text py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex items-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Skills</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
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
