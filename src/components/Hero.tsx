"use client";

import { motion } from "framer-motion";
import TypingText from "./TypingText";
import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const command = `whoami && cat profile.txt`;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, z: -50 }}
        animate={{ opacity: 1, z: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-command">
          <span className="prompt">guest@portfolio:~$</span>{" "}
          <TypingText text={command} speed={40} />
        </p>

        <motion.h1
          id="hero-heading"
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="comment">// </span>
          {profile.title}
        </motion.p>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <a href="#projects" className="btn btn-primary">
            ls ./projects
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            git clone --profile
          </a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            linkedin
          </a>
          <span className="separator">|</span>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            github
          </a>
          <span className="separator">|</span>
          <a
            href={profile.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
          >
            leetcode
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
