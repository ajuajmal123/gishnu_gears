"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, Shield, X, ArrowRight, Construction } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UrlConfigurator({ setActivePortal }: { setActivePortal: (val: "portal" | "gearboxes") => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("portal") === "false" || window.location.hash) {
      setActivePortal("gearboxes");
      if (window.location.hash) {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [searchParams, setActivePortal]);

  return null;
}
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

// Main Site Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activePortal, setActivePortal] = useState<"portal" | "gearboxes">("portal");
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const router = useRouter();

  const handleEnterGearboxes = () => {
    setActivePortal("gearboxes");
    window.scrollTo({ top: 0 });
  };

  const handleBackToPortal = () => {
    setActivePortal("portal");
    window.scrollTo({ top: 0 });
  };

  const portals = [
    {
      id: "standard",
      title: "Standard Gearboxes",
      description: "High-end industrial transmission units engineered for maximum power.",
      image: "/standard_gearbox.png",
      icon: <Settings className="w-5 h-5" />,
      action: () => {
        router.push("/products?category=standard");
      },
      badge: "Enter Division",
      color: "hover:border-brand-gold",
      iconColor: "text-brand-gold"
    },
    {
      id: "custom",
      title: "Customized Gearboxes",
      description: "Bespoke multi-stage high-torque drives engineered to your exact specifications.",
      image: "/custom_gearbox.png",
      icon: <Cpu className="w-5 h-5" />,
      action: () => {
        router.push("/products?category=custom");
      },
      badge: "Enter Division",
      color: "hover:border-brand-gold",
      iconColor: "text-brand-gold"
    },
    {
      id: "components",
      title: "Gears & Components",
      description: "Exclusive machined components and customized spare gears for domestic and international applications.",
      image: "/precision_gears.png",
      icon: <Shield className="w-5 h-5" />,
      action: () => {
        router.push("/products?category=components");
      },
      badge: "Enter Division",
      color: "hover:border-brand-gold",
      iconColor: "text-brand-gold"
    }
  ];

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden w-full font-sans select-none">
      <Suspense fallback={null}>
        <UrlConfigurator setActivePortal={setActivePortal} />
      </Suspense>

      {/* Cinematic Portal Selection Screen - Ultra-Minimal Light Layout */}
      <AnimatePresence mode="wait">
        {activePortal === "portal" && (
          <motion.div
            key="portal-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto w-full"
          >
            {/* Main Portal Content Area */}
            <div className="flex flex-col items-center justify-between min-h-[90vh] py-16 px-6 max-w-7xl mx-auto w-full">
              {/* Top Logo Area */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 flex flex-col items-center gap-1 mt-4"
              >
                <Logo className="h-20 md:h-24" showSubtitle={true} />
              </motion.div>

              {/* Central Portal Cards - Redesigned 3-Column Layout with Premium Images */}
              <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 my-auto py-8">
                {portals.map((portal, index) => (
                  <motion.div
                    key={portal.id}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 * (index + 1) }}
                    whileHover={{ y: -6 }}
                    onClick={portal.action}
                    className={`glass-card rounded-2xl cursor-pointer relative group border border-slate-200 ${portal.color} bg-white shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col overflow-hidden h-[380px]`}
                  >
                    {/* Card Image Area with Zoom effect */}
                    <div className="relative w-full h-60 overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                      <img
                        src={portal.image}
                        alt={portal.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/60 transition-all duration-300" />

                      {/* Premium floating icon badge */}
                      <div className={`absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-100/50 ${portal.iconColor} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        {portal.icon}
                      </div>

                      {/* Mini overlay badge on bottom left of image */}
                      <span className="absolute bottom-3 left-4 text-[10px] font-bold text-white uppercase tracking-wider bg-brand-navy/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                        {portal.badge}
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col justify-center flex-grow">
                      <h3 className="text-lg sm:text-xl font-sora font-extrabold text-brand-navy tracking-tight group-hover:text-brand-gold transition-colors duration-200">
                        {portal.title}
                      </h3>
                      <p className="text-brand-navy/60 text-xs sm:text-sm mt-2 leading-relaxed font-sans font-medium">
                        {portal.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

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
                      className="absolute top-4 right-4 p-2 rounded-lg bg-bg-light hover:bg-brand-gold/10 hover:text-brand-gold border border-slate-100 hover:border-brand-gold/20 text-brand-navy/50 transition-all duration-200 cursor-pointer shadow-sm"
                      aria-label="Close Modal"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Industrial Symbol */}
                    <div className="w-16 h-16 rounded-full bg-brand-gold/10 border-2 border-brand-gold flex items-center justify-center text-brand-gold mb-6">
                      <Construction className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-mono text-brand-gold tracking-widest uppercase mb-2 font-bold">
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

          {/* Page Sections */}
          <About />
          <Certifications />
          <Team />
          <Contact />

          {/* Footer */}
          <Footer
            onBackToPortal={handleBackToPortal}
            activePortal={activePortal}
            onEnterGearboxes={() => setActivePortal("gearboxes")}
          />
        </motion.div>
      )}

    </main>
  );
}
