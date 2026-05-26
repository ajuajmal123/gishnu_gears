"use client";

import React from "react";
import Button from "../ui/Button";
import { Globe, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-extrabold tracking-tight text-brand-navy leading-[1.1] max-w-4xl">
            Engineering Motion <br />
            <span className="gradient-text-orange font-black">With Precision</span>
          </h1>

          {/* Description - Shortened Catchy 10-Word brand statement */}
          <p className="text-brand-navy/70 text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-sans font-medium">
            Custom-engineered high-precision gearboxes designed for global industrial, automotive, and aquaculture sectors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button
              variant="primary"
              showIcon
              onClick={() => {
                const el = document.querySelector("#products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Gearbox Series
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Inquire Now
            </Button>
          </div>

          {/* Core B2B statistics indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 mt-10 pt-8 border-t border-slate-100 w-full text-brand-navy/60 text-xs font-semibold tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-brand-orange" />
              <span>30+ Years of Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4.5 h-4.5 text-brand-orange" />
              <span>Exports to 20+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4.5 h-4.5 text-brand-orange" />
              <span>China Plus One Advantage</span>
            </div>
          </div>
        </div>

        {/* Right Graphic Column - Bold Asymmetric Product Collage */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full flex items-center justify-center mt-10 lg:mt-0">
          {/* Decorative background soft glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-navy/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />

          {/* Underlayer Shadow Base */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-2xl bg-slate-100 border border-slate-200/50 shadow-inner -z-10" />

          {/* Picture 1: Standard Gearbox (Central High Impact Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, zIndex: 30 }}
            className="absolute z-20 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl cursor-pointer"
          >
            <img
              src="/standard_gearbox.png"
              alt="Gishnu Standard Gearbox"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-3 right-3 py-1 px-2 rounded bg-black/60 backdrop-blur-sm text-[8px] font-mono text-white text-left uppercase font-bold tracking-wider">
              Standard Series
            </div>
          </motion.div>

          {/* Picture 2: Custom Gearbox (Bottom Right Shuffled Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03, zIndex: 30 }}
            className="absolute z-10 bottom-4 right-4 sm:bottom-8 sm:right-8 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer transform translate-x-4 translate-y-4"
          >
            <img
              src="/custom_gearbox.png"
              alt="Gishnu Custom Gearbox"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-3 right-3 py-1 px-2 rounded bg-black/60 backdrop-blur-sm text-[8px] font-mono text-white text-left uppercase font-bold tracking-wider">
              Custom-Built
            </div>
          </motion.div>

          {/* Picture 3: Precision Gears (Top Left Shuffled Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20, y: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.03, zIndex: 30 }}
            className="absolute z-10 top-4 left-4 sm:top-8 sm:left-8 w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer transform -translate-x-4 -translate-y-4"
          >
            <img
              src="/precision_gears.png"
              alt="Gishnu Precision Gears"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-3 right-3 py-1 px-2 rounded bg-black/60 backdrop-blur-sm text-[8px] font-mono text-white text-left uppercase font-bold tracking-wider">
              Precision Space
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
