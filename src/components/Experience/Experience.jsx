import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        title: "Independent Software Engineer",
        company: "Self-Directed Practice",
        location: "Nigeria / Remote",
        period: "Present",
        responsibilities: [
            "Build software solutions for startups, businesses, NGOs, educational organizations, and technology companies",
            "Deliver web applications, mobile applications, API platforms, dashboards, and operational business systems",
            "Design backend architecture, database models, authentication flows, integrations, and deployment pipelines",
            "Provide technical consulting, architecture reviews, product planning, and engineering execution",
            "Collaborate with founders, product owners, designers, engineers, and community teams to ship practical solutions"
        ]
    },
    {
        title: "Former CTO",
        company: "NAGIDA Foods",
        location: "Hybrid",
        period: "2024 - 2025",
        responsibilities: [
            "Led technical strategy for a food and operations-driven business platform",
            "Worked with leadership and engineering collaborators to align product delivery with business goals",
            "Improved system planning, team coordination, and delivery processes for scalable internal operations"
        ]
    },
    {
        title: "Program Coordinator & Instructor",
        company: "Kodelift Initiative",
        location: "Ibadan, Nigeria",
        period: "2025",
        responsibilities: [
            "Coordinated a grassroots technology education program for secondary school students",
            "Designed practical learning paths, mentorship structures, and real-world software development activities",
            "Mentored young developers on engineering fundamentals, project building, and problem-solving discipline"
        ]
    }
];

const education = {
    degree: "Bachelor of Science - Computer Science",
    institution: "University of Ibadan"
};

const Experience = () => {
    return (
        <section id="experience" className="bg-primary-bg text-primary-text py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex items-center gap-2 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent font-mono">03.</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins">Experience</h2>
                    <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-border-color"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.title}-${exp.company}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12 md:pl-24 pb-12 last:pb-0"
                        >
                            <div className="absolute left-[-8px] md:left-[24px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary-bg"></div>

                            <div className="bg-secondary-bg rounded-xl p-6 md:p-8 hover:border-accent border border-border-color transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex gap-4">
                                        <FaBriefcase className="mt-1 flex-shrink-0 text-accent text-xl" />
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">{exp.title}</h3>
                                            <p className="text-lg text-primary-text font-semibold">{exp.company}</p>
                                            <p className="text-sm text-secondary-text">{exp.location}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono text-accent bg-accent/10 px-4 py-2 rounded-full w-fit">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-3 mt-6">
                                    {exp.responsibilities.map((resp) => (
                                        <li key={resp} className="flex items-start gap-3 text-secondary-text leading-relaxed">
                                            <span className="text-accent mt-1 flex-shrink-0">&gt;</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="relative pl-12 md:pl-24"
                    >
                        <div className="absolute left-[-8px] md:left-[24px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary-bg"></div>

                        <div className="bg-secondary-bg rounded-xl p-6 md:p-8 border border-border-color hover:border-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <FaGraduationCap className="text-accent text-3xl flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">Education</h3>
                                    <p className="text-lg text-primary-text font-semibold">{education.degree}</p>
                                    <p className="text-secondary-text">{education.institution}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
