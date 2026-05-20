"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-heading">
        <span className="prompt">$</span> npm list --skills
      </h2>
      <TerminalWindow title="sumeet@portfolio:~/skills" delay={0.15}>
        <div className="terminal-line">
          <span className="comment"># Installed packages</span>
        </div>
        <ul className="skills-grid" role="list">
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              className="skill-chip"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
              }}
            >
              <span className="skill-prefix">▸</span> {skill}
            </motion.li>
          ))}
        </ul>
      </TerminalWindow>
    </section>
  );
}
