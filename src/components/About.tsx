"use client";

import TerminalWindow from "./TerminalWindow";
import type { Profile } from "@/types";

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-heading">
        <span className="prompt">$</span> cat about.md
      </h2>
      <TerminalWindow title="sumeet@portfolio:~/about" delay={0.1}>
        <div className="terminal-line">
          <span className="keyword">const</span>{" "}
          <span className="variable">engineer</span> = {"{"}
        </div>
        <div className="terminal-line indent">
          <span className="property">name:</span>{" "}
          <span className="string">&quot;{profile.name}&quot;</span>,
        </div>
        <div className="terminal-line indent">
          <span className="property">location:</span>{" "}
          <span className="string">&quot;{profile.location}&quot;</span>,
        </div>
        <div className="terminal-line indent">
          <span className="property">email:</span>{" "}
          <a href={`mailto:${profile.email}`} className="string link">
            &quot;{profile.email}&quot;
          </a>
          ,
        </div>
        <div className="terminal-line indent">
          <span className="property">role:</span>{" "}
          <span className="string">&quot;{profile.title}&quot;</span>
        </div>
        <div className="terminal-line">{"};"}</div>
        <br />
        <div className="terminal-line">
          <span className="comment">/* Professional Summary */</span>
        </div>
        <p className="bio-text">{profile.bio}</p>
      </TerminalWindow>
    </section>
  );
}
