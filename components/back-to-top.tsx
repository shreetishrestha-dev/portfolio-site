"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const trackedSections = ["top", "about", "skills", "experience", "projects", "media", "contact"];

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const updateVisibility = () => {
      const focusLine = 160;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= focusLine) {
          currentSection = section;
        }
      });

      setVisible(currentSection.id !== "top");
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateVisibility();
        ticking = false;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          className="glass-panel fixed bottom-5 right-4 z-[65] flex h-12 w-12 items-center justify-center rounded-full text-[var(--foreground)] shadow-[var(--shadow)] sm:bottom-6 sm:right-6"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
