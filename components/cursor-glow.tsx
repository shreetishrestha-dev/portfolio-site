"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.8 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.8 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,138,253,0.18),rgba(127,209,197,0.12),transparent_68%)] blur-3xl md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
