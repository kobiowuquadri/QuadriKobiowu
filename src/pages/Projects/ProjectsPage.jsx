import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { projects } from '../../data/projectsData';
import { ProjectCard } from '../../components/Projects/Projects';

const filters = [
  "All",
  "Backend",
  "Mobile",
  "Websites",
  "Full Software",
  "Education"
];

const getProjectGroups = (project) => {
  const tech = project.technologies.join(" ").toLowerCase();
  const role = project.role.toLowerCase();
  const title = project.title.toLowerCase();
  const groups = ["All"];

  if (role.includes("backend") || tech.includes("node") || tech.includes("express")) {
    groups.push("Backend");
  }

  if (role.includes("mobile") || tech.includes("react native") || tech.includes("expo")) {
    groups.push("Mobile");
  }

  if (role.includes("frontend") || role.includes("website") || tech.includes("html") || tech.includes("css") || title.includes("website")) {
    groups.push("Websites");
  }

  if (project.contributions?.some((item) => item.toLowerCase().includes("entire software") || item.toLowerCase().includes("entire product"))) {
    groups.push("Full Software");
  }

  if (role.includes("instructor") || tech.includes("education") || title.includes("kodelift")) {
    groups.push("Education");
  }

  return groups;
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => getProjectGroups(project).includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-primary-bg text-primary-text pb-20">
      <nav className="px-6 py-6 md:px-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary-text transition-colors duration-300 hover:text-accent"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </nav>

      <section className="container mx-auto px-4 pt-8">
        <motion.div
          className="mx-auto mb-12 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">Selected Work</p>
          <h1 className="mb-5 text-4xl font-bold font-poppins md:text-6xl">All Projects</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary-text sm:text-lg">
            A broader look at products, platforms, mobile apps, backend systems,
            websites, and community work I have built or contributed to.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-mono transition-colors duration-300 ${
                activeFilter === filter
                  ? "border-accent bg-accent text-primary-bg"
                  : "border-border-color bg-secondary-bg text-secondary-text hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
