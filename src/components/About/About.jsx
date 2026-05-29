import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import myCV from '../../assets/QUADRI_ KOBIOWU_ CV.pdf';
import profileImage from '../../assets/devquat-profile.jpg';

const strengths = [
  "Software engineering and product development",
  "Full-stack web application delivery",
  "Mobile development with React Native and Expo",
  "Backend architecture, APIs, and database design",
  "System design, deployment, and infrastructure planning",
  "Team leadership, developer mentoring, and technical direction"
];

const technologyGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Redux", "Zustand", "Vite"]
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "NativeWind", "EAS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "Prisma", "JWT/Auth"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Firebase", "Supabase"]
  },
  {
    title: "Cloud & DevOps",
    items: ["VPS", "Linux", "Nginx", "PM2", "Docker", "AWS", "Vercel", "Git", "GitHub", "Postman"]
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="bg-secondary-bg text-primary-text py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">About Me</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary-text font-poppins leading-relaxed text-lg">
              I am an independent Software Engineer based in Nigeria, building reliable
              web, mobile, and backend systems for startups, businesses, NGOs,
              educational organizations, and technology teams.
            </p>
            <p className="text-secondary-text font-poppins leading-relaxed text-lg">
              My work spans the full product lifecycle: understanding the problem,
              designing the system, building the interface, engineering the API,
              shaping the database, deploying the product, and improving it with real
              user feedback.
            </p>
            <p className="text-secondary-text font-poppins leading-relaxed text-lg">
              I bring a practical blend of engineering depth, product thinking, team
              leadership, and developer mentoring. I enjoy turning early ideas into
              useful software, improving existing systems, and helping teams make better
              technical decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {strengths.map((strength) => (
                <div key={strength} className="flex items-start gap-3 rounded-lg border border-border-color bg-primary-bg/60 p-3">
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-[#2DD4BF]" />
                  <span className="text-sm leading-relaxed text-secondary-text">{strength}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {technologyGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-border-color bg-primary-bg/60 p-4">
                  <h3 className="text-accent font-mono text-xs tracking-widest uppercase">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-text">
                    {group.items.join(" / ")}
                  </p>
                </div>
              ))}
            </div>

            <motion.a
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-accent text-accent px-8 py-3 rounded font-mono mt-6 hover:bg-accent/10 transition-colors duration-300"
            >
              View Full Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group max-w-md mx-auto"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-accent rounded-br-lg opacity-60"></div>

            <div className="relative bg-secondary-bg rounded-lg p-2 border border-border-color group-hover:border-accent transition-colors duration-500 shadow-2xl">
              <div className="relative overflow-hidden rounded-lg bg-primary-bg/50">
                <img
                  src={profileImage}
                  alt="Quadri Kobiowu"
                  className="aspect-square w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  width="720"
                  height="720"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
