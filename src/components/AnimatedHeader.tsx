"use client";

import { motion } from "framer-motion";

interface AnimatedHeaderProps {
  title: string;
  subtitle: string;
}

export default function AnimatedHeader({ title, subtitle }: AnimatedHeaderProps) {
  return (
    <>
      <motion.h1 className="font-heading uppercase text-5xl font-bold text-center text-white" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        {title}
      </motion.h1>

      <motion.p className="font-body text-center text-white mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        {subtitle}
      </motion.p>
    </>
  );
}
