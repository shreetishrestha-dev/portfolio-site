"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.6 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.6 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateCardX = ((y / rect.height) - 0.5) * -10;
    const rotateCardY = ((x / rect.width) - 0.5) * 12;

    rotateX.set(rotateCardX);
    rotateY.set(rotateCardY);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={isTouchDevice ? undefined : { y: -6 }}
      style={{
        rotateX: isTouchDevice ? 0 : smoothRotateX,
        rotateY: isTouchDevice ? 0 : smoothRotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
