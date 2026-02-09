import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        title: "Software Engineer",
        company: "Mastering Backend",
        location: "Remote",
        period: "November 2025 – Present",
        type: "work",
        responsibilities: [
            "Implement application features and business logic",
            "Integrate frontend applications with backend APIs",
            "Debug, test, and optimize application performance",
            "Collaborate with engineers to deliver scalable solutions",
            "Maintain clean, maintainable, and well-documented code"
        ]
    },
    {
        title: "Software Engineer",
        company: "NAGIDA",
        location: "Hybrid",
        period: "December 2024 – December 2025",
        type: "work",
        responsibilities: [
            "Stepped into the role of Technical Team Lead at NAGIDA Foods, responsible for shaping and executing technology strategy to support core business operations",
            "Leading a skilled engineering team, improving system architecture, and delivering scalable, efficient solutions that align with long-term goals",
            "Implementing practical, high-impact technologies that drive performance and support organizational growth"
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "E-AMBITION, France",
        location: "Remote",
        period: "August 2024 – November 2024",
        type: "work",
        responsibilities: [
            "Worked in the APP department at E-AMBITION, a leading IT and digital marketing company",
            "Developed the app for WORCAL, a project to enhance business efficiency through innovative solutions",
            "Designed and built key features, ensuring seamless user experience",
            "Collaborated with a talented team to deliver a high-quality product",
            "Gained hands-on experience in app development, contributing to transforming ideas into impactful technological solutions"
        ]
    },
    {
        title: "Backend Engineer",
        company: "Zealight Innovation Labs, Lagos",
        location: "Remote",
        period: "March 2024 – August 2024",
        type: "work",
        responsibilities: [
            "Innovated server-side solutions and microservices, improving application scalability and enhancing application efficiency",
            "Created comprehensive technical documentation, facilitating knowledge sharing and reducing onboarding time by 10%",
            "Led collaboration with frontend and backend teams to deliver software solutions that enhanced business owner satisfaction by 25%",
            "Contributed to codebases, improving software functionality and performance, resulting in a 20% increase in efficiency",
            "Reduced vulnerabilities by enhancing security measures and ensuring compliance with industry standards"
        ]
    },
    {
        title: "Backend Developer (Node.js) Intern",
        company: "CapacityBay, United States",
        location: "Remote",
        period: "August 2023 – January 2024",
        type: "work",
        responsibilities: [
            "Architected clean, modular server-side solutions using Node.js, Express.js, and MySQL to improve system robustness",
            "Utilized Sequelize for efficient database integration, reducing query times by 45%",
            "Implemented best practices for scalable and maintainable code, contributing to a 5% reduction in bug reports",
            "Conducted unit and integration testing, ensuring code reliability and achieving a 98% pass rate"
        ]
    },
    {
        title: "Frontend Developer (ReactJS) Intern",
        company: "CapacityBay, United States",
        location: "Remote",
        period: "June 2022 – July 2023",
        type: "work",
        responsibilities: [
            "Developed software solutions with ReactJS, Next.js, and Redux to improve application performance",
            "Styled user interfaces with Tailwind CSS and Bootstrap, resulting in a 40% increase in user satisfaction",
            "Leveraged ReactJS, Next.js, and Redux to develop scalable applications, improving frontend performance by 80%",
            "Collaborated with frontend teams to deliver high-quality, user-centric applications, increasing user retention by 20%"
        ]
    }
];

const education = {
    degree: "Bachelor of Science – Computer Science",
    institution: "University of Ibadan",
    type: "education"
};

const Experience = () => {
    return (
        <section id="experience" className="bg-primary-bg text-primary-text py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="flex items-center gap-2 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent font-mono">03.</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins">Work Experience</h2>
                    <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-border-color"></div>

                    {/* Experience Items */}
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12 md:pl-24 pb-12 last:pb-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-8px] md:left-[24px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary-bg"></div>

                            {/* Content Card */}
                            <div className="bg-secondary-bg rounded-xl p-6 md:p-8 hover:border-accent border border-border-color transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">{exp.title}</h3>
                                        <p className="text-lg text-primary-text font-semibold">{exp.company}</p>
                                        <p className="text-sm text-secondary-text">{exp.location}</p>
                                    </div>
                                    <span className="text-sm font-mono text-accent mt-2 md:mt-0 bg-accent/10 px-4 py-2 rounded-full w-fit">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-3 mt-6">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-secondary-text leading-relaxed">
                                            <span className="text-accent mt-1 flex-shrink-0">▹</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="relative pl-12 md:pl-24"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-8px] md:left-[24px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary-bg"></div>

                        {/* Education Card */}
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
