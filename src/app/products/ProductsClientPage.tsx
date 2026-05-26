"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, Shield, Train, ChevronRight, ChevronDown, Calendar, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

interface SubProduct {
  id: string;
  name: string;
  specs: string[];
  description: string;
  illustration: React.ReactNode;
  image?: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subProducts: SubProduct[];
}

export default function ProductsClientPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "standard";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const catParam = searchParams.get("category");
    if (catParam) {
      setActiveCategory(catParam);
    }
  }, [searchParams]);

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
          image: "/standard_gearbox.png",
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
          image: "/standard_gearbox.png",
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
          image: "/standard_gearbox.png",
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
          image: "/custom_gearbox.png",
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
          image: "/custom_gearbox.png",
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
          image: "/railway_gearbox.png",
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
          image: "/railway_gearbox.png",
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
          image: "/defence_gearbox.png",
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
          image: "/defence_gearbox.png",
        },
      ],
    },
  ];

  const activeCatData = categories.find((cat) => cat.id === activeCategory) || categories[0];
  const dropdownOptions = categories.filter((cat) => cat.id !== activeCategory);

  const handleSelectCategory = (id: string) => {
    setActiveCategory(id);
    setIsDropdownOpen(false);
    // Sync browser URL search parameter
    window.history.pushState(null, "", `/products?category=${id}`);
  };

  const handleInquiryClick = () => {
    router.push("/#contact");
  };

  const handleBackToPortal = () => {
    router.push("/?portal=true");
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden w-full font-sans select-none flex flex-col justify-between">
      
      {/* Translucent Navigation Header */}
      <Navbar onBackToPortal={handleBackToPortal} />

      {/* Main Page Area */}
      <div id="products" className="relative pt-36 pb-24 bg-slate-50 overflow-hidden flex-grow">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Header Row: Heading on the left, compact Dropdown on the right */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight">
                Specialized <span className="text-brand-orange">Product Divisions</span>
              </h2>
            </div>

            {/* Premium UI/UX Compact Dropdown Category Selector - Aligned Right */}
            <div className="relative w-full md:w-72 z-30 text-left">
              {/* Active Display Panel Trigger */}
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="glass-card rounded-xl px-4 py-3 bg-white border border-slate-200 hover:border-brand-orange flex items-center justify-between cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="text-brand-orange">
                    {activeCatData.icon}
                  </div>
                  <span className="text-sm font-sora font-extrabold text-brand-navy">
                    {activeCatData.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-brand-navy/55 hover:text-brand-orange p-1"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Dropdown Options Overlay */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    {/* Backdrop closer */}
                    <div
                      onClick={() => setIsDropdownOpen(false)}
                      className="fixed inset-0 z-10 cursor-default"
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-20 flex flex-col divide-y divide-slate-100"
                    >
                      {dropdownOptions.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleSelectCategory(option.id)}
                          className="flex items-center gap-3 p-4 text-left cursor-pointer hover:bg-slate-50 transition-colors duration-150 group"
                        >
                          <div className="text-brand-navy/50 group-hover:text-brand-orange transition-colors">
                            {option.icon}
                          </div>
                          <span className="text-sm font-sora font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors">
                            {option.title}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Centered Products Grid */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {activeCatData.subProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="glass-card rounded-xl p-4 sm:p-5 bg-white border border-slate-200 shadow-sm flex flex-col justify-between text-left hover:border-brand-orange/20 hover:shadow-md transition-all duration-200"
                  >
                    {/* Schematic / Product Image Header */}
                    <div className="w-full h-28 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50 mb-3 shadow-inner overflow-hidden">
                      {prod.image ? (
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      ) : (
                        prod.illustration
                      )}
                    </div>

                    {/* Product Details & Specs */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm sm:text-base font-sora font-extrabold text-brand-navy line-clamp-1">
                          {prod.name}
                        </h4>
                        <p className="text-brand-navy/60 text-[11px] sm:text-xs mt-1.5 leading-snug font-sans font-medium line-clamp-2 min-h-[32px]">
                          {prod.description}
                        </p>
                      </div>

                      {/* Specification bullets */}
                      <div className="flex flex-col gap-1 mt-2.5 pt-2.5 border-t border-slate-100 mb-3.5">
                        {prod.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-1 text-[10px] sm:text-[11px] text-brand-navy/70 font-semibold font-sans">
                            <ChevronRight className="w-2.5 h-2.5 text-brand-orange flex-shrink-0" />
                            <span className="line-clamp-1">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="primary" onClick={handleInquiryClick} className="w-full text-[10px] py-1.5 px-3">
                        Submit Technical Inquiry
                      </Button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <Footer onBackToPortal={handleBackToPortal} />

    </main>
  );
}
