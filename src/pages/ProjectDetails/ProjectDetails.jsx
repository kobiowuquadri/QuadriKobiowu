import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaApple, FaGooglePlay } from 'react-icons/fa';
import { projects } from '../../data/projectsData';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-primary-bg text-primary-text flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary-bg text-primary-text pb-20">
            {/* Navigation */}
            <nav className="p-6 md:px-12 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-secondary-text hover:text-accent transition-colors duration-300"
                >
                    <FaArrowLeft /> Back to Home
                </Link>
            </nav>

            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4 text-accent">
                        {project.title}
                    </h1>
                    <p className="text-xl text-secondary-text font-mono mb-6">
                        {project.role}
                    </p>

                    <div className="flex gap-4 mb-8 flex-wrap">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent transition-colors bg-secondary-bg px-4 py-2 rounded-lg">
                                <FaGithub /> Source Code
                            </a>
                        )}
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent transition-colors bg-secondary-bg px-4 py-2 rounded-lg">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {project.appStoreLink && (
                            <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent transition-colors bg-secondary-bg px-4 py-2 rounded-lg">
                                <FaApple /> App Store
                            </a>
                        )}
                        {project.playStoreLink && (
                            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent transition-colors bg-secondary-bg px-4 py-2 rounded-lg">
                                <FaGooglePlay /> Play Store
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Description & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="max-w-none mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-primary-text">Overview</h3>
                            <p className="whitespace-pre-line text-secondary-text leading-relaxed text-lg">
                                {project.fullDescription}
                            </p>
                        </div>

                        {project.highlight && (
                            <div className="bg-secondary-bg/50 border-l-4 border-accent p-6 rounded-r-lg mb-10">
                                <p className="text-lg italic text-primary-text">"{project.highlight}"</p>
                            </div>
                        )}

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-primary-text">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features && project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-secondary-text">
                                        <span className="text-accent mt-1">▹</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-primary-text">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-secondary-bg text-accent px-4 py-2 rounded-full font-mono text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {project.gallery && project.gallery.map((img, idx) => (
                            <div key={idx} className="bg-secondary-bg rounded-xl p-2 shadow-2xl overflow-hidden group h-fit">
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Workflow Section */}
                {project.workflow && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary-bg rounded-2xl p-8 md:p-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center font-poppins">How it Works</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {project.workflow.map((step, idx) => (
                                <div key={idx} className="relative p-6 pt-10 border border-border-color rounded-xl bg-primary-bg hover:border-accent transition-colors duration-300">
                                    <span className="absolute -top-5 left-6 bg-accent text-primary-bg font-bold text-xl py-2 px-4 rounded-lg shadow-lg">
                                        {step.step}
                                    </span>
                                    <h4 className="text-xl font-bold mb-3 mt-2">{step.title}</h4>
                                    <p className="text-secondary-text text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
