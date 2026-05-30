"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import type { Skill } from "@/types";

interface SkillsProps {
  skills: Skill[];
}

function proficiencyLabel(value: number): string {
  if (value >= 90) return "expert";
  if (value >= 75) return "advanced";
  if (value >= 60) return "intermediate";
  return "familiar";
}

export default function Skills({ skills = [] }: SkillsProps) {
  if (skills.length === 0) return null;
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-heading">
        <span className="prompt">$</span> npm list --skills
      </h2>
      <p className="section-subtitle">
        <span className="comment">
          // Loaded from skills.json — edit proficiency & icons to update
        </span>
      </p>

      <TerminalWindow title="sumeet@portfolio:~/skills" delay={0.15}>
        <div className="terminal-line">
          <span className="comment"># Installed packages with proficiency ratings</span>
        </div>

        <ul className="skills-grid" role="list">
          {skills.map((skill, index) => (
            <motion.li
              key={skill.id}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 4,
                boxShadow: "0 0 24px rgba(0, 255, 136, 0.2)",
              }}
            >
              <div className="skill-card-header">
                <span className="skill-icon-wrap">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={28}
                    height={28}
                    style={{ width: 28, height: 28, objectFit: "contain" }}
                    className={
                      skill.id === "express" || skill.id === "nextjs"
                        ? "skill-icon-light"
                        : undefined
                    }
                  />
                </span>
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-level skill-level-${proficiencyLabel(skill.proficiency)}`}>
                    {proficiencyLabel(skill.proficiency)}
                  </span>
                </div>
                <span className="skill-pct" aria-hidden="true">
                  {skill.proficiency}%
                </span>
              </div>

              <div
                className="skill-bar-track"
                role="meter"
                aria-valuenow={skill.proficiency}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05 + 0.2,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </TerminalWindow>
    </section>
  );
}
