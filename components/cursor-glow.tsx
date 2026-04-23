"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 80, damping: 18, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[600px] w-[600px] rounded-full opacity-40 dark:opacity-60 mix-blend-screen blur-3xl"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.35),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(163,230,53,0.5),transparent_60%)]" />
    </motion.div>
  );
}
