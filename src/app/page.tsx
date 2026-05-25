"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, X, ArrowRight, Construction } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

// Main Site Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";
import Team from "@/components/sections/Team";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activePortal, setActivePortal] = useState<"portal" | "gearboxes">("portal");
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const handleEnterGearboxes = () => {
    setActivePortal("gearboxes");
    window.scrollTo({ top: 0 });
  };

  const handleBackToPortal = () => {
    setActivePortal("portal");
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden w-full font-sans select-none">
      
      {/* Cinematic Portal Selection Screen - Ultra-Minimal Light Layout */}
      <AnimatePresence mode="wait">
        {activePortal === "portal" && (
          <motion.div
            key="portal-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-between py-20 px-6 overflow-hidden"
          >
            {/* Top Logo Area */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10 flex flex-col items-center gap-1"
            >
              <Logo className="h-16 md:h-20" showSubtitle={true} />
            </motion.div>

            {/* Central Portal Cards - Simplified B2B Cards */}
            <div className="relative z-10 w-full max-w-4xl grid sm:grid-cols-2 gap-8 my-auto">
              
              {/* Option 1: Gearboxes */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -4 }}
                onClick={handleEnterGearboxes}
                className="glass-card rounded-xl p-8 cursor-pointer relative group border border-slate-200 hover:border-brand-orange bg-white shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between h-[260px]"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-bg-light border border-slate-100 text-brand-orange shadow-sm">
                    <Settings className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors duration-200">
                    Gearboxes
                  </h3>
                  <p className="text-brand-navy/60 text-sm mt-2 leading-relaxed font-sans font-medium">
                    Explore our standard and custom industrial gearboxes designed for aquaculture, steering, and heavy B2B manufacturing.
                  </p>
                </div>

                <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-[10px] font-semibold text-brand-orange uppercase pl-1 flex items-center gap-1">
                    Enter Portal <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>

              {/* Option 2: Precision Gears */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -4 }}
                onClick={() => setShowUnderConstruction(true)}
                className="glass-card rounded-xl p-8 cursor-pointer relative group border border-slate-200 hover:border-brand-navy-light bg-white shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between h-[260px]"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-bg-light border border-slate-100 text-brand-navy-light shadow-sm">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight group-hover:text-brand-navy-light transition-colors duration-200">
                    Precision Gears
                  </h3>
                  <p className="text-brand-navy/60 text-sm mt-2 leading-relaxed font-sans font-medium">
                    High-tolerance spur, helical, ground, and planet carrier components engineered for aerospace, defence, and space applications.
                  </p>
                </div>

                <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-[10px] font-semibold text-brand-navy/80 uppercase pl-1 flex items-center gap-1">
                    Under Construction <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Bottom Footer Credits */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-10 flex flex-col items-center gap-2 text-brand-navy/35 text-[10px] font-mono tracking-widest uppercase font-bold"
            >
              <span>Gishnu Gears Redesign Concept</span>
              <span>© {new Date().getFullYear()} // ALL RIGHTS RESERVED</span>
            </motion.div>

            {/* Under Construction Modal */}
            <AnimatePresence>
              {showUnderConstruction && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-brand-navy/40 flex items-center justify-center p-6 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.95, y: 15 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 15 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="glass-card relative max-w-lg w-full rounded-xl p-8 sm:p-10 border border-slate-200 text-center flex flex-col items-center bg-white shadow-lg"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowUnderConstruction(false)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-bg-light hover:bg-brand-orange/10 hover:text-brand-orange border border-slate-100 hover:border-brand-orange/20 text-brand-navy/50 transition-all duration-200 cursor-pointer shadow-sm"
                      aria-label="Close Modal"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Industrial Symbol */}
                    <div className="w-16 h-16 rounded-full bg-brand-orange/10 border-2 border-brand-orange flex items-center justify-center text-brand-orange mb-6">
                      <Construction className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-mono text-brand-orange tracking-widest uppercase mb-2 font-bold">
                      Section Under Construction
                    </span>

                    <h4 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy mb-4">
                      Committed to Precision
                    </h4>

                    <p className="text-brand-navy/60 text-sm leading-relaxed mb-6 font-sans">
                      Our Precision Gears division focuses on micron-tolerances (under 0.001mm) for defence and aerospace actuators. This sector portal is undergoing system alignment and updates.
                    </p>

                    <Button variant="primary" onClick={() => setShowUnderConstruction(false)}>
                      Return to Selection
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Corporate Gearboxes Redesign Site */}
      {activePortal === "gearboxes" && (
        <motion.div
          key="main-gearbox-site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative min-h-screen flex flex-col bg-white"
        >
          {/* Header */}
          <Navbar onBackToPortal={handleBackToPortal} />

          {/* Page Sections - Products is placed FIRST, followed by Team */}
          <Products />
          <Team />
          <About />
          <Leadership />
          <Certifications />
          <Contact />

          {/* Footer */}
          <Footer onBackToPortal={handleBackToPortal} />
        </motion.div>
      )}

    </main>
  );
}
