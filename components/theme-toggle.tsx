"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="h-11 w-11 rounded-full border border-[var(--border)] bg-[var(--surface)]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass-panel group relative flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11"
      whileHover={{ scale: 1.04, rotate: isDark ? -8 : 8 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Toggle theme"
    >
      <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {isDark ? <SunMedium className="relative h-5 w-5" /> : <MoonStar className="relative h-5 w-5" />}
    </motion.button>
  );
}
