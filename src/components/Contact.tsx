"use client";

import TerminalWindow from "./TerminalWindow";
import type { Profile } from "@/types";

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-heading">
        <span className="prompt">$</span> ./connect.sh
      </h2>
      <TerminalWindow title="sumeet@portfolio:~/contact" delay={0.1}>
        <div className="terminal-line">
          <span className="comment"># Reach out — channels open</span>
        </div>
        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="contact-item">
            <span className="contact-label">email</span>
            <span className="contact-value">{profile.email}</span>
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">linkedin</span>
            <span className="contact-value">/in/sumeet-rane-530a4644</span>
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">github</span>
            <span className="contact-value">/sumeet1396</span>
          </a>
          <a
            href={profile.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">leetcode</span>
            <span className="contact-value">/u/sumeet1396</span>
          </a>
        </div>
        <div className="terminal-line contact-prompt">
          <span className="prompt">sumeet@portfolio:~$</span>{" "}
          <span className="cursor-blink">▊</span>
        </div>
      </TerminalWindow>
    </section>
  );
}
