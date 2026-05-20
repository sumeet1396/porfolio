"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TerminalWindow({
  title = "sumeet@portfolio:~",
  children,
  className = "",
  delay = 0,
}: TerminalWindowProps) {
  return (
    <motion.div
      className={`terminal-window ${className}`}
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
    >
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </motion.div>
  );
}
