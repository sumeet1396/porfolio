"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InitialLoader from "./InitialLoader";
import Scene3DBackground from "./Scene3DBackground";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import type {
  Profile,
  Project,
  Skill,
  Experience as ExperienceEntry,
} from "@/types";

interface PortfolioShellProps {
  profile: Profile;
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
}

export default function PortfolioShell({
  profile,
  skills,
  experience,
  projects,
}: PortfolioShellProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Scene3DBackground />
          <div className="page-wrapper">
            <Navbar />
            <main>
              <Hero profile={profile} />
              <About profile={profile} />
              <Skills skills={skills} />
              <Experience experience={experience} />
              <Projects projects={projects} />
              <Contact profile={profile} />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}
