"use client";

import { motion } from "framer-motion";

export function DataFlowGraphic() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="dfg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a3e635" />
          <stop offset="100%" stopColor="#65a30d" />
        </linearGradient>
        <filter id="dfgblur"><feGaussianBlur stdDeviation="18" /></filter>
      </defs>
      <circle cx="200" cy="130" r="70" fill="url(#dfg1)" opacity="0.35" filter="url(#dfgblur)" />
      {/* concentric rings */}
      {[40, 65, 95, 130].map((r, i) => (
        <motion.circle
          key={r}
          cx="200" cy="130" r={r}
          stroke="url(#dfg1)" strokeOpacity={0.35 - i * 0.06}
          strokeWidth="1" fill="none"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.7, 1, 0.7], opacity: [0, 0.8, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "200px 130px" }}
        />
      ))}
      {/* center node */}
      <circle cx="200" cy="130" r="18" fill="#a3e635" />
      <circle cx="200" cy="130" r="18" fill="url(#dfg1)" />
      <text x="200" y="135" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2e05">AI</text>
      {/* satellite nodes with connecting paths */}
      {[
        { cx: 60, cy: 60, label: "Data" },
        { cx: 340, cy: 60, label: "Notes" },
        { cx: 60, cy: 200, label: "Programs" },
        { cx: 340, cy: 200, label: "Insights" },
      ].map((n) => (
        <g key={n.label}>
          <path
            d={`M ${n.cx} ${n.cy} Q ${(n.cx + 200) / 2} ${(n.cy + 130) / 2 - 10} 200 130`}
            stroke="url(#dfg1)" strokeWidth="1.2" strokeOpacity="0.6" fill="none" strokeDasharray="4 4"
          />
          <circle cx={n.cx} cy={n.cy} r="22" fill="white" className="dark:fill-neutral-900" stroke="#a3e635" strokeWidth="1.5" />
          <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize="9" fontWeight="600" fill="#3f6212" className="dark:fill-lime-300">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function WaveGraphic() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="wvg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a3e635" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wvg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#65a30d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#65a30d" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 170 Q50 120 100 140 T200 130 T300 115 T400 120 L400 220 L0 220 Z"
        fill="url(#wvg2)"
        animate={{ d: [
          "M0 170 Q50 120 100 140 T200 130 T300 115 T400 120 L400 220 L0 220 Z",
          "M0 160 Q50 140 100 120 T200 140 T300 125 T400 110 L400 220 L0 220 Z",
          "M0 170 Q50 120 100 140 T200 130 T300 115 T400 120 L400 220 L0 220 Z",
        ]}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 185 Q60 150 120 160 T240 150 T360 140 T400 150 L400 220 L0 220 Z"
        fill="url(#wvg1)"
        animate={{ d: [
          "M0 185 Q60 150 120 160 T240 150 T360 140 T400 150 L400 220 L0 220 Z",
          "M0 175 Q60 165 120 145 T240 160 T360 150 T400 130 L400 220 L0 220 Z",
          "M0 185 Q60 150 120 160 T240 150 T360 140 T400 150 L400 220 L0 220 Z",
        ]}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* data points */}
      {[60, 120, 180, 240, 300, 360].map((x, i) => (
        <motion.circle
          key={x} cx={x} cy={130 - i * 3} r="4" fill="#a3e635"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
        />
      ))}
    </svg>
  );
}

export function GridBloom() {
  return (
    <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="gb1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a3e635" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="150" fill="url(#gb1)" />
      <g stroke="#a3e635" strokeOpacity="0.18" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="300" y2={i * 30} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" />
        ))}
      </g>
    </svg>
  );
}
