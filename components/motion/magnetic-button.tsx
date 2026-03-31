"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type AnchorButtonProps = SharedProps & {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
};

type NativeButtonProps = SharedProps & {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

function useMagnet() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return {
    reduceMotion,
    x: useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 }),
    y: useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 }),
    set(xValue: number, yValue: number) {
      x.set(xValue);
      y.set(yValue);
    },
  };
}

export function MagneticButton(props: AnchorButtonProps | NativeButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const magnet = useMagnet();

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const element = anchorRef.current ?? buttonRef.current;
    if (magnet.reduceMotion || !element) return;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    magnet.set(offsetX * 0.16, offsetY * 0.16);
  };

  const sharedProps = {
    onMouseMove: handleMove,
    onMouseLeave: () => magnet.set(0, 0),
    whileHover: { y: -3, scale: 1.01 },
    whileTap: { y: 1, scale: 0.98 },
    style: { x: magnet.x, y: magnet.y },
    className: props.className,
  };

  if ("href" in props) {
    return (
      <motion.a
        ref={anchorRef}
        href={props.href}
        target={props.target}
        rel={props.rel}
        download={props.download}
        {...sharedProps}
      >
        {props.children}
      </motion.a>
    );
  }

  return (
    <motion.button ref={buttonRef} type={props.type ?? "button"} onClick={props.onClick} {...sharedProps}>
      {props.children}
    </motion.button>
  );
}
