"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import type { Experience as ExperienceEntry } from "@/types";

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="section-heading">
        <span className="prompt">$</span> cat experience.log
      </h2>
      <p className="section-subtitle">
        <span className="comment">
          // Loaded from experience.json — edit to update
        </span>
      </p>

      <TerminalWindow title="sumeet@portfolio:~/experience — timeline.log">
        <div className="terminal-line">
          <span className="prompt">$</span> git log --experience --graph --reverse
        </div>
        <div className="terminal-line">
          <span className="comment">
            # Professional timeline — newest first
          </span>
        </div>

        <ol className="exp-timeline" role="list">
          {experience.map((job, index) => (
            <motion.li
              key={job.id}
              className="exp-timeline-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <time className="exp-time" dateTime={job.period}>
                {job.period}
              </time>

              <div className="exp-rail" aria-hidden="true">
                <span
                  className={`exp-dot ${index === 0 ? "exp-dot-current" : ""}`}
                />
              </div>

              <div className="exp-body">
                <div className="terminal-line exp-header-line">
                  <span className="keyword">commit</span>{" "}
                  <span className="variable">{job.id}</span>
                </div>
                <h3 className="exp-role">
                  <span className="string">{job.company}</span>
                  <span className="comment"> | </span>
                  {job.role}
                </h3>
                <p className="exp-desc">{job.description}</p>
                <ul className="exp-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>
                      <span className="highlight-prefix">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="terminal-line exp-footer-line">
          <span className="prompt">$</span>{" "}
          <span className="comment">
            // {experience.length} entries · end of timeline
          </span>
        </div>
      </TerminalWindow>
    </section>
  );
}
