"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#" className="navbar-logo">
        <span className="prompt">$</span> srane
      </a>

      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="navbar-links desktop-only">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">
              ./{link.label}
            </a>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="nav-menu"
            className="navbar-links mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setOpen(false)}
                >
                  ./{link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
