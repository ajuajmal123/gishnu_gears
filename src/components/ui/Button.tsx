"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  showIcon?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  showIcon = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-sora font-semibold text-sm tracking-wide px-6 py-3 rounded-lg transition-all duration-200 select-none outline-none cursor-pointer border";

  const variants = {
    primary:
      "bg-brand-orange border-brand-orange text-white hover:bg-orange-600 hover:border-orange-600 shadow-sm",
    secondary:
      "bg-transparent border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5 hover:border-brand-navy/40",
    glass:
      "bg-white border-slate-200 text-brand-navy hover:text-brand-orange hover:border-brand-orange/30 shadow-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showIcon && (
          <motion.span
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 1, y: -1 }}
            className="inline-block transition-transform"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}
