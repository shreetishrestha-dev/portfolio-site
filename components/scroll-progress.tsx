"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[var(--accent-secondary)] via-[var(--accent)] to-[var(--accent-tertiary)]"
      style={{ scaleX }}
    />
  );
}
