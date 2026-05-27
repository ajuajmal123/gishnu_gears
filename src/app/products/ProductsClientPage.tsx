"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, Shield, Train, ChevronRight, ChevronDown, Calendar, Phone, X } from "lucide-react";
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
  const [selectedProduct, setSelectedProduct] = useState<SubProduct | null>(null);

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
                    onClick={() => setSelectedProduct(prod)}
                    className="glass-card rounded-xl p-5 bg-white border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-brand-orange/40 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden h-[360px] text-left"
                  >
                    {/* Schematic / Product Image Header - scaled grander layout */}
                    <div className="w-full h-56 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50 mb-3.5 shadow-inner overflow-hidden flex-shrink-0">
                      {prod.image ? (
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="transition-transform duration-500 group-hover:scale-110">
                          {prod.illustration}
                        </div>
                      )}
                      
                      {/* Premium hovering badge overlay */}
                      <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="text-[11px] font-sora font-extrabold text-white bg-brand-orange px-3.5 py-2 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                          View Details
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Product Name only - grander size centered in remaining space */}
                    <div className="flex-grow flex items-center mt-1">
                      <h4 className="text-sm sm:text-base md:text-lg font-sora font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors duration-250 line-clamp-2 leading-tight">
                        {prod.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dynamic Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop click closer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-brand-navy/40 backdrop-blur-md z-40"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row z-50 max-h-[90vh] md:max-h-[80vh] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/95 border border-slate-200 text-brand-navy hover:text-brand-orange hover:border-brand-orange/30 shadow-sm transition-all duration-200 z-50 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Image Showcase */}
              <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-100 relative min-h-[200px] md:min-h-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  {selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-[160px] md:max-h-[280px] w-full object-contain drop-shadow-md rounded-lg"
                    />
                  ) : (
                    <div className="scale-125 md:scale-150">
                      {selectedProduct.illustration}
                    </div>
                  )}
                </div>

                {/* Floating category badge inside modal */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-slate-200 flex items-center gap-1.5 shadow-sm">
                  <span className="text-brand-orange">
                    {activeCatData.icon}
                  </span>
                  <span className="text-[10px] sm:text-xs font-sora font-extrabold text-brand-navy">
                    {activeCatData.title}
                  </span>
                </div>
              </div>

              {/* Right Side: Specifications & Description */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="flex-grow">
                  {/* Title Indicator */}
                  <span className="text-[10px] font-mono font-bold text-brand-orange tracking-wider uppercase mb-1 block">
                    Product Specifications
                  </span>
                  
                  {/* Product Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-sora font-extrabold text-brand-navy leading-tight mb-3">
                    {selectedProduct.name}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-navy/70 text-xs sm:text-sm leading-relaxed font-sans font-medium mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-slate-100 my-4" />

                  {/* Tech Specs */}
                  <h4 className="text-xs sm:text-sm font-sora font-extrabold text-brand-navy mb-3">
                    Technical Specifications
                  </h4>
                  <div className="flex flex-col gap-2.5 mb-6">
                    {selectedProduct.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-brand-navy/80 font-semibold font-sans bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <ChevronRight className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Inquiry Button */}
                <div className="flex justify-center mt-4">
                  <Button
                    variant="primary"
                    size="xs"
                    onClick={() => {
                      setSelectedProduct(null);
                      handleInquiryClick();
                    }}
                    className="w-auto px-6 shadow-md hover:shadow-brand-orange/15"
                  >
                    Submit Technical Inquiry
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer onBackToPortal={handleBackToPortal} />

    </main>
  );
}
