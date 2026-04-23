"use client";

import { motion } from "framer-motion";

export function Marquee({
  items,
  duration = 30,
}: {
  items: string[];
  duration?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((n, i) => (
          <span
            key={i}
            className="text-lg font-medium tracking-tight text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
