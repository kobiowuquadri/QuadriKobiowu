import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt, FaApple, FaGooglePlay, FaTimes, FaExpand } from 'react-icons/fa';
import { projects } from '../../data/projectsData';

const ProjectDetails = () => {
    const { id } = useParams();
    const projectIndex = projects.findIndex(p => p.id === id);
    const project = projectIndex === -1 ? undefined : projects[projectIndex];
    const [lightboxIndex, setLightboxIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLightboxIndex(null);
    }, [id]);

    useEffect(() => {
        if (lightboxIndex === null) return undefined;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setLightboxIndex(null);
            if (event.key === 'ArrowRight') {
                setLightboxIndex((current) => (current + 1) % project.gallery.length);
            }
            if (event.key === 'ArrowLeft') {
                setLightboxIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [lightboxIndex, project]);

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

    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(projectIndex + 1) % projects.length];

    return (
        <div className="min-h-screen bg-primary-bg text-primary-text pb-20 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(135deg,rgba(230,213,184,0.08)_0%,rgba(5,5,5,0)_45%),linear-gradient(315deg,rgba(45,212,191,0.07)_0%,rgba(5,5,5,0)_40%)]"></div>

            <nav className="relative p-6 md:px-12 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-secondary-text hover:text-accent transition-colors duration-300"
                >
                    <FaArrowLeft /> Back to Home
                </Link>
                <Link
                    to="/projects"
                    className="hidden sm:flex items-center gap-2 text-secondary-text hover:text-accent transition-colors duration-300 font-mono text-sm"
                >
                    All Projects
                </Link>
            </nav>

            <div className="relative container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    {project.category && (
                        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">{project.category}</p>
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4 text-primary-text">
                        {project.title}
                    </h1>
                    <p className="text-xl text-secondary-text font-mono mb-6">
                        {project.role}
                    </p>

                    <div className="flex gap-4 mb-8 flex-wrap">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent hover:border-accent/60 transition-colors bg-secondary-bg border border-border-color px-4 py-2 rounded-lg">
                                <FaGithub /> Source Code
                            </a>
                        )}
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent hover:border-accent/60 transition-colors bg-secondary-bg border border-border-color px-4 py-2 rounded-lg">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {project.appStoreLink && (
                            <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent hover:border-accent/60 transition-colors bg-secondary-bg border border-border-color px-4 py-2 rounded-lg">
                                <FaApple /> App Store
                            </a>
                        )}
                        {project.playStoreLink && (
                            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:text-accent hover:border-accent/60 transition-colors bg-secondary-bg border border-border-color px-4 py-2 rounded-lg">
                                <FaGooglePlay /> Play Store
                            </a>
                        )}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
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

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {project.problem && (
                                <div className="rounded-lg border border-border-color bg-secondary-bg p-5">
                                    <h3 className="text-lg font-bold mb-3 text-accent">Problem Solved</h3>
                                    <p className="text-secondary-text leading-relaxed">{project.problem}</p>
                                </div>
                            )}
                            {project.impact && (
                                <div className="rounded-lg border border-border-color bg-secondary-bg p-5">
                                    <h3 className="text-lg font-bold mb-3 text-accent">Impact</h3>
                                    <p className="text-secondary-text leading-relaxed">{project.impact}</p>
                                </div>
                            )}
                        </div>

                        {project.highlight && (
                            <div className="bg-secondary-bg/50 border-l-4 border-accent p-6 rounded-r-lg mb-10">
                                <p className="text-lg italic text-primary-text">&ldquo;{project.highlight}&rdquo;</p>
                            </div>
                        )}

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-primary-text">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features && project.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-secondary-text">
                                        <span className="text-accent mt-1">&gt;</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {project.contributions && (
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 text-primary-text">
                                    {project.contributionsTitle || "My Contributions"}
                                </h3>
                                <ul className="space-y-3">
                                    {project.contributions.map((contribution) => (
                                        <li key={contribution} className="flex items-start gap-3 text-secondary-text">
                                            <span className="text-accent mt-1">&gt;</span>
                                            {contribution}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-primary-text">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-secondary-bg border border-border-color text-accent px-4 py-2 rounded-full font-mono text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:sticky lg:top-24 lg:self-start"
                    >
                        {project.gallery && project.gallery.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {project.gallery.map((img, idx) => (
                                    <button
                                        key={img}
                                        type="button"
                                        onClick={() => setLightboxIndex(idx)}
                                        className="group relative bg-secondary-bg rounded-xl p-2 shadow-2xl overflow-hidden h-fit text-left"
                                        aria-label={`Expand ${project.title} screenshot ${idx + 1}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <span className="absolute inset-2 flex items-center justify-center rounded-lg bg-black/0 group-hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <FaExpand className="text-primary-text" />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-border-color bg-secondary-bg p-8">
                                <div className="rounded-lg border border-white/10 bg-primary-bg p-8">
                                    <p className="mb-4 font-mono text-sm uppercase tracking-widest" style={{ color: project.accent || '#E6D5B8' }}>
                                        {project.visualLabel || project.title}
                                    </p>
                                    <h3 className="text-2xl font-bold text-primary-text">{project.title}</h3>
                                    <p className="mt-4 text-secondary-text leading-relaxed">
                                        Project visuals are being prepared. The summary, problem, features,
                                        technologies, and impact are available here.
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 border-t border-border-color pt-10">
                    <Link
                        to={`/project/${prevProject.id}`}
                        className="group flex flex-col rounded-lg border border-border-color bg-secondary-bg p-5 transition-colors duration-300 hover:border-accent/60"
                    >
                        <span className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary-text">
                            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" /> Previous Project
                        </span>
                        <span className="text-lg font-bold text-primary-text group-hover:text-accent transition-colors">
                            {prevProject.title}
                        </span>
                    </Link>
                    <Link
                        to={`/project/${nextProject.id}`}
                        className="group flex flex-col items-end rounded-lg border border-border-color bg-secondary-bg p-5 text-right transition-colors duration-300 hover:border-accent/60"
                    >
                        <span className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary-text">
                            Next Project <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="text-lg font-bold text-primary-text group-hover:text-accent transition-colors">
                            {nextProject.title}
                        </span>
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {lightboxIndex !== null && project.gallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setLightboxIndex(null)}
                            aria-label="Close image preview"
                            className="absolute top-5 right-5 text-primary-text hover:text-accent transition-colors"
                        >
                            <FaTimes size={28} />
                        </button>

                        {project.gallery.length > 1 && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
                                }}
                                aria-label="Previous screenshot"
                                className="absolute left-3 sm:left-6 text-primary-text hover:text-accent transition-colors"
                            >
                                <FaArrowLeft size={24} />
                            </button>
                        )}

                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            src={project.gallery[lightboxIndex]}
                            alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                            className="max-h-full max-w-full rounded-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {project.gallery.length > 1 && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((current) => (current + 1) % project.gallery.length);
                                }}
                                aria-label="Next screenshot"
                                className="absolute right-3 sm:right-6 text-primary-text hover:text-accent transition-colors"
                            >
                                <FaArrowRight size={24} />
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
