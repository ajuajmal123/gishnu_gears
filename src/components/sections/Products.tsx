"use client";

import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Settings, Cpu, Shield, Train, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SubProduct {
  id: string;
  name: string;
  specs: string[];
  description: string;
  illustration: React.ReactNode;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subProducts: SubProduct[];
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("standard");

  const categories: Category[] = [
    {
      id: "standard",
      title: "Standard Gearboxes",
      icon: <Settings className="w-5 h-5" />,
      description: "Helical, bevel, and worm transmission gearsets engineered for high durability.",
      subProducts: [
        {
          id: "std-1",
          name: "A Series - Aquaculture Aerator Gearbox",
          specs: ["Salinity epoxy coat", "Dual-oil seals", "Efficiency: 98.2%", "Designed for harsh coastal environments"],
          description: "High-integrity multi-stage gear unit optimized for intense paddlewheel aerators and commercial fish/shrimp farming ponds.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="45" r="20" />
              <path d="M30 65 Q50 75 70 65" />
              <line x1="50" y1="25" x2="50" y2="65" strokeDasharray="2 2" />
            </svg>
          ),
        },
        {
          id: "std-2",
          name: "B Series - Bevel Steering Gearbox",
          specs: ["Ratios: 1:1 to 1:5", "Accurate right-angle steering", "High mechanical capacity"],
          description: "Spiral bevel steering transmission system built for precise angular torque transfer and B2B industrial machinery.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="35" y="35" width="30" height="30" rx="2" />
              <circle cx="50" cy="50" r="8" />
              <line x1="50" y1="15" x2="50" y2="85" strokeDasharray="3 3" />
            </svg>
          ),
        },
        {
          id: "std-3",
          name: "H Series - Inline Helical Reducer",
          specs: ["Inline coaxial layout", "Output speed: up to 400 RPM", "Torque: up to 12,000 Nm"],
          description: "Robust helical speed reducer engineered for heavy industrial conveyor rollers, lifts, and packaging aggregates.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="25" y="35" width="50" height="30" rx="3" />
              <circle cx="40" cy="50" r="8" />
              <circle cx="60" cy="50" r="8" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "custom",
      title: "Custom Gearboxes",
      icon: <Cpu className="w-5 h-5" />,
      description: "Tailored multi-stage high-torque drives engineered for custom applications.",
      subProducts: [
        {
          id: "cst-1",
          name: "Sugar Mill High-Torque Drive",
          specs: ["Torque: up to 480,000 Nm", "Integrated force lubrication", "Multi-stage helical gearsets"],
          description: "Bespoke heavy-duty gearbox configured to withstand the massive loads and grinding stresses of sugar cane crushing mills.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="28" />
              <circle cx="50" cy="50" r="14" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="6" />
            </svg>
          ),
        },
        {
          id: "cst-2",
          name: "Integrated Thrust Extruder Drive",
          specs: ["High thrust load capacity", "Direct motor coupling", "Cooling coil integration"],
          description: "Custom-configured speed reducer engineered for chemical compounding and plastics manufacturing extruders.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="20" y="30" width="60" height="40" rx="4" />
              <line x1="40" y1="30" x2="40" y2="70" />
              <line x1="60" y1="30" x2="60" y2="70" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "railway",
      title: "Railway Gearboxes",
      icon: <Train className="w-5 h-5" />,
      description: "Locomotive rolling stock and high-speed metro axle-hung traction drives.",
      subProducts: [
        {
          id: "rlw-1",
          name: "Metro Rolling Stock Helical Drive",
          specs: ["Acoustic rating: < 73 dBA", "Synthetic high-mileage oil reservoir", "Vibration damping mounts"],
          description: "Axle-hung helical traction gear unit designed specifically for rapid transit metro coaches and city railway lines.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="25" y="40" width="50" height="20" rx="2" />
              <circle cx="38" cy="60" r="8" />
              <circle cx="62" cy="60" r="8" />
            </svg>
          ),
        },
        {
          id: "rlw-2",
          name: "High-Speed Axle-Hung Locomotive Gearset",
          specs: ["Designed for 250 km/h locomotives", "Hardened case-carburized gears", "Low-maintenance housing"],
          description: "Axle traction gear systems built to handle extreme thermal expansions and dynamic cyclic stresses of inter-city railways.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="50,15 90,80 10,80" />
              <circle cx="50" cy="55" r="10" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "defence",
      title: "Defence & Aerospace",
      icon: <Shield className="w-5 h-5" />,
      description: "Ultra-precise transmission components meeting stringent military standards.",
      subProducts: [
        {
          id: "def-1",
          name: "Marine Auxiliary Propulsion Transmission",
          specs: ["Corrosion-proof titanium alloy housing", "Extreme impact duty", "Integrated clutch mechanism"],
          description: "Highly robust, lightweight auxiliary propulsion gearbox built for military patrol crafts and naval vessels.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 50 15 L 85 85 L 50 72 L 15 85 Z" />
            </svg>
          ),
        },
        {
          id: "def-2",
          name: "Zero-Backlash Satellite Actuator",
          specs: ["Backlash: < 1 arc-minute", "Space-grade dry lubrication", "High torsional stiffness"],
          description: "Micro-planetary gearset engineered for high-precision satellite orbital solar arrays and tracking actuators.",
          illustration: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="28" />
              <circle cx="50" cy="50" r="6" />
              <circle cx="32" cy="50" r="4" />
              <circle cx="68" cy="50" r="4" />
              <circle cx="50" cy="32" r="4" />
              <circle cx="50" cy="68" r="4" />
            </svg>
          ),
        },
      ],
    },
  ];

  const activeCatData = categories.find((cat) => cat.id === activeCategory);

  const handleInquiryClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="relative pt-36 pb-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header and Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-brand-navy font-semibold tracking-wider uppercase shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>Industrial Product Catalog</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            Interactive <span className="text-brand-orange">Product Categories</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Click on a product category below to immediately view the corresponding transmission models, technical ratios, and specific industrial blueprints.
          </p>
        </div>

        {/* 4-Category Clickable Tab Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -2 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass-card rounded-xl p-6 cursor-pointer border text-left flex flex-col justify-between h-[180px] transition-all duration-200 ${
                  isActive
                    ? "border-brand-orange bg-white shadow-md"
                    : "border-slate-200 bg-white shadow-sm hover:border-slate-350"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div
                    className={`p-3 rounded-lg border shadow-sm ${
                      isActive
                        ? "bg-brand-orange/5 border-brand-orange/10 text-brand-orange"
                        : "bg-slate-50 border-slate-100 text-brand-navy/60"
                    }`}
                  >
                    {cat.icon}
                  </div>
                </div>

                <div className="mt-4">
                  <h3
                    className={`text-base sm:text-lg font-sora font-extrabold transition-colors duration-200 ${
                      isActive ? "text-brand-orange" : "text-brand-navy"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-brand-navy/55 text-xs mt-1.5 leading-snug font-sans font-medium line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sub-Products Lists Section under Active Category - Small cards aligned horizontally */}
        <div className="relative w-full pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeCatData?.subProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="glass-card rounded-xl p-6 bg-white border border-slate-200 shadow-sm flex flex-col justify-between text-left hover:border-brand-orange/20 hover:shadow-md transition-all duration-200"
                >
                  {/* Schematic Illustration Header */}
                  <div className="w-full h-36 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50 mb-5 shadow-sm">
                    {prod.illustration}
                  </div>

                  {/* Product Details & Specs */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-sora font-extrabold text-brand-navy line-clamp-2">
                        {prod.name}
                      </h4>
                      <p className="text-brand-navy/60 text-xs sm:text-sm mt-2 leading-relaxed font-sans font-medium line-clamp-3 min-h-[54px]">
                        {prod.description}
                      </p>
                    </div>

                    {/* Specification bullets */}
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100 mb-5">
                      {prod.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-xs text-brand-navy/70 font-semibold font-sans">
                          <ChevronRight className="w-3 h-3 text-brand-orange flex-shrink-0" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="primary" onClick={handleInquiryClick} className="w-auto self-center text-[11px] py-2 px-4">
                      Submit Technical Inquiry
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
