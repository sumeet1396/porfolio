"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { delay: 0, text: "[ OK ] Initializing portfolio kernel v2.6.0" },
  { delay: 800, text: "[ OK ] Mounting /dev/portfolio" },
  { delay: 1600, text: "[ .. ] Loading profile.json" },
  { delay: 2400, text: "[ OK ] profile.json — parsed successfully" },
  { delay: 2800, text: "[ .. ] Loading skills.json" },
  { delay: 3200, text: "[ OK ] skills.json — 12 packages with ratings" },
  { delay: 3600, text: "[ .. ] Loading experience.json" },
  { delay: 4400, text: "[ OK ] experience.json — 4 entries found" },
  { delay: 4800, text: "[ .. ] Loading projects.json" },
  { delay: 5400, text: "[ OK ] projects.json — 4 modules found" },
  { delay: 5600, text: "[ .. ] Compiling React components" },
  { delay: 6400, text: "[ .. ] Initializing Three.js scene" },
  { delay: 7200, text: "[ OK ] WebGL context acquired" },
  { delay: 8000, text: "[ .. ] Applying terminal theme" },
  { delay: 8800, text: "[ OK ] Framer Motion animations ready" },
  { delay: 9200, text: "[ .. ] Starting dev server on :3000" },
  { delay: 9600, text: "[ OK ] Portfolio ready — launching UI" },
];

const DURATION_MS = 10000;

interface InitialLoaderProps {
  onComplete: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);
      if (elapsed >= DURATION_MS) {
        clearInterval(progressInterval);
      }
    }, 50);

    const timeouts = BOOT_LINES.map((line) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
      }, line.delay)
    );

    const completeTimeout = setTimeout(() => {
      setDone(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        onComplete();
      }, 600);
    }, DURATION_MS);

    return () => {
      clearInterval(progressInterval);
      timeouts.forEach(clearTimeout);
      clearTimeout(completeTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="loader-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">boot@portfolio — system init</span>
            </div>

            <div className="loader-body">
              <p className="loader-banner">
                <span className="prompt">$</span> ./boot.sh --init
              </p>

              <div className="loader-log" aria-hidden="false">
                {visibleLines.map((line, i) => (
                  <motion.p
                    key={`${line}-${i}`}
                    className="loader-line"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {line.includes("[ .. ]") ? (
                      <>
                        <span className="loader-pending">[ .. ]</span>
                        {line.replace("[ .. ] ", "")}
                      </>
                    ) : line.includes("[ OK ]") ? (
                      <>
                        <span className="loader-ok">[ OK ]</span>
                        {line.replace("[ OK ] ", "")}
                      </>
                    ) : (
                      line
                    )}
                  </motion.p>
                ))}
                <p className="loader-line loader-active">
                  <span className="cursor-blink">▊</span>
                </p>
              </div>

              <div className="loader-progress-wrap">
                <div className="loader-progress-label">
                  <span>Loading</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="loader-progress-track">
                  <motion.div
                    className="loader-progress-bar"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <p className="loader-hint">
                <span className="comment">// Boot sequence — please wait ~10s</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
