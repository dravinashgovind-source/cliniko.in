"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

type Props = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Quiet, single-purpose entrance: fade + rise once when scrolled into view. */
export function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Headline with an italic serif accent, e.g. <Accent>seen</Accent>. */
export function Accent({ children }: { children: React.ReactNode }) {
  return <em className="accent">{children}</em>;
}

export function Eyebrow({ children, tone }: { children: React.ReactNode; tone?: "light" }) {
  return <p className={`eyebrow${tone === "light" ? " eyebrow--light" : ""}`}>{children}</p>;
}
