"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-heading">
        <span className="prompt">$</span> ls -la ./projects
      </h2>
      <p className="section-subtitle">
        <span className="comment">// Loaded from projects.json — edit to update</span>
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`project-card ${project.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              rotateX: -2,
              rotateY: 2,
              transition: { duration: 0.2 },
            }}
            style={{ transformPerspective: 1000 }}
          >
            <TerminalWindow
              title={`sumeet@portfolio:~/projects/${project.id}`}
              delay={index * 0.08}
            >
              <div className="terminal-line">
                <span className="keyword">export</span>{" "}
                <span className="keyword">default</span>{" "}
                <span className="variable">Project</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              {project.featured && (
                <span className="project-badge">featured</span>
              )}
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  → github
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    → live demo
                  </a>
                )}
              </div>
            </TerminalWindow>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
