"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -3 }}
      className={`glass-card relative rounded-xl p-8 bg-white border border-slate-200 shadow-sm ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
