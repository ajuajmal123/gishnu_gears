"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, Layers, ChevronRight, ChevronLeft, Calendar, Phone, X, ChevronDown, Check, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import EnquiryModal from "@/components/ui/EnquiryModal";

interface Product {
  id: string;
  name: string;
  specs: string[];
  description: string;
  illustration?: React.ReactNode;
  image?: string;
  models?: string[];
}

interface Series {
  id: string;
  name: string;
  specs: string[];
  description: string;
  illustration?: React.ReactNode;
  image?: string;
  products: Product[];
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  series: Series[];
}

export default function ProductsClientPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "standard";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSeries, setActiveSeries] = useState<Series | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalData, setEnquiryModalData] = useState<{
    category?: string;
    product?: string;
    specs?: string[];
    models?: string[];
  }>({});
  const [selectedModel, setSelectedModel] = useState<string>("");

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
      series: [
        {
          id: "std-b1",
          name: "B1-SERIES",
          specs: ["Heavy-duty housing", "High mechanical capability", "Optimal torque transfer"],
          description: "Industrial standard gearbox designed for seamless power transmission across manufacturing machinery.",
          image: "/products/B1 Series/WhatsApp Image 2026-10-24 at 12.42.12 PM.jpeg",
          products: [
            {
              id: 'gb1-65-260',
              name: 'GB1 65 to 260',
              specs: ['Size Range: 65 to 260', 'Heavy-duty housing', 'Optimal torque transfer'],
              description: 'GB1 model standard industrial gearbox series spanning sizes 65 to 260.',
              image: '/products/B1 Series/WhatsApp Image 2026-10-24 at 12.42.12 PM.jpeg',
              models: ['GB1 - 65', 'GB1 - 90', 'GB1 - 120', 'GB1 - 140', 'GB1 - 260'],
            }
          ],
        },
        {
          id: "std-g",
          name: "G-SERIES",
          specs: ["Compact footprint", "High efficiency design", "Low-noise operation"],
          description: "Precision-machined standard gearbox optimized for smooth and reliable variable speed applications.",
          image: "/products/G Series/WhatsApp Image 2026-10-23 at 6.21.45 PM.jpeg",
          products: [
            {
              id: 'gu-162-337',
              name: 'GU - 162 - 337',
              specs: ['Size Range: 162 to 337', 'Compact footprint', 'High efficiency design'],
              description: 'GU model standard industrial gearbox series spanning sizes 162 to 337.',
              image: '/products/G Series/G Series GU 162 to 337 - 3.jpeg',
              models: ['GU - 162', 'GU - 200', 'GU - 237', 'GU - 287', 'GU - 300', 'GU - 337'],
            },
            {
              id: 'gu-400-1000',
              name: 'GU - 400 - 1000',
              specs: ['Size Range: 400 to 1000', 'Compact footprint', 'Low-noise operation'],
              description: 'GU model standard industrial gearbox series spanning sizes 400 to 1000.',
              image: '/products/G Series/WhatsApp Image 2026-10-23 at 6.21.45 PM.jpeg',
              models: ['GU - 400', 'GU - 500', 'GU - 600', 'GU - 700', 'GU - 800', 'GU - 1000'],
            },
            {
              id: 'gv-400-900',
              name: 'GV - 400 - 900',
              specs: ['Size Range: 400 to 900', 'Vertical mounting design', 'High efficiency'],
              description: 'GV model standard vertical gearbox series spanning sizes 400 to 900.',
              image: '/products/G Series/G Series GV 400 to 900.jpeg',
              models: ['GV - 400', 'GV - 500', 'GV - 600', 'GV - 700', 'GV - 800', 'GV - 900'],
            },
          ],
        },
        {
          id: "std-gal",
          name: "GAL-SERIES",
          specs: ["Extended durability", "Vibration damping", "Enhanced thermal dissipation"],
          description: "Advanced standard gearbox unit featuring superior heat management for continuous load bearing environments.",
          image: "/products/GAL Series/GAL Series GAL 40 to 90 - blue painted Powder coat.png",
          products: [
            { id: 'gal-gmrv', name: 'GMRV 30 - 150', specs: ['Size Range: 30 - 150', 'Extended durability', 'Enhanced thermal dissipation'], description: 'GMRV model standard gearbox series spanning sizes 30 to 150.', image: '/products/GAL Series/GAL Series GAL 40 to 90 - blue painted Powder coat.png', models: ['GMRV - 30', 'GMRV - 40', 'GMRV - 50', 'GMRV - 63', 'GMRV - 75', 'GMRV - 90', 'GMRV - 110', 'GMRV - 130', 'GMRV - 150'] }
          ],
        },
        {
          id: "std-h",
          name: "H-SERIES",
          specs: ["Inline coaxial layout", "Output speed: up to 400 RPM", "Torque: up to 12,000 Nm"],
          description: "Robust helical speed reducer engineered for heavy industrial conveyor rollers, lifts, and packaging aggregates.",
          image: "/products/H Series/H Series GH 20 to 80 - rear.png",
          products: [
            { id: 'h-0', name: 'GH - 20 (ALM)', specs: ['Size: 20 (ALM)', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 20 (ALM).', image: '/products/H Series/H Series GH 20 to 80 - rear.png' },
            { id: 'h-25-80', name: 'GH 25 - 80', specs: ['Size Range: 25 - 80', 'Inline coaxial layout'], description: 'GH model helical speed reducer series spanning sizes 25 to 80.', image: '/products/H Series/H Series GH 20 to 80 - rear.png', models: ['GH - 25', 'GH - 30', 'GH - 35', 'GH - 40', 'GH - 50', 'GH - 60', 'GH - 80'] }
          ],
        },
        {
          id: "std-a",
          name: "A-SERIES",
          specs: ["Salinity epoxy coat", "Dual-oil seals", "Efficiency: 98.2%"],
          description: "High-integrity gear unit built to endure harsh external environments and heavy duty cycles.",
          image: "/products/A Series/A Series A3.png",
          products: [
            {
              id: 'a3h-105-130',
              name: 'A3H 105 - 130 RPM',
              specs: ['RPM Range: 105 - 130 RPM', 'Salinity epoxy coat', 'Dual-oil seals'],
              description: 'A3H model standard gearbox series spanning 105 to 130 RPM.',
              image: '/products/A Series/A Series A3.png',
              models: ['A3H - 105 RPM', 'A3H - 115 RPM', 'A3H - 130 RPM'],
            },
            {
              id: 'a3ha-105-115',
              name: 'A3HA 105 - 115 RPM',
              specs: ['RPM Range: 105 - 115 RPM', 'Salinity epoxy coat', 'Dual-oil seals'],
              description: 'A3HA model standard gearbox series spanning 105 to 115 RPM.',
              image: '/products/A Series/A Series A3.png',
              models: ['A3HA - 105 RPM', 'A3HA - 115 RPM'],
            },
            {
              id: 'gbh-200-105-115',
              name: 'GBH 200 105 - 115 RPM',
              specs: ['RPM Range: 105 - 115 RPM', 'Salinity epoxy coat', 'High mechanical strength'],
              description: 'GBH 200 model standard gearbox series spanning 105 to 115 RPM.',
              image: '/products/A Series/A Series GBH 200 Gearbox.png',
              models: ['GBH 200 - 105 RPM', 'GBH 200 - 115 RPM'],
            },
            {
              id: 'gbh-300-105-115',
              name: 'GBH 300 105 - 115 RPM',
              specs: ['RPM Range: 105 - 115 RPM', 'Salinity epoxy coat', 'High mechanical strength'],
              description: 'GBH 300 model standard gearbox series spanning 105 to 115 RPM.',
              image: '/products/A Series/A Series GBH 200 Gearbox.png',
              models: ['GBH 300 - 105* RPM', 'GBH 300 - 115* RPM'],
            },
            {
              id: 'a-addn-0',
              name: 'A4 - 105 RPM*',
              specs: ['RPM: 105*', 'Salinity epoxy coat'],
              description: 'A4 model with 105 RPM*.',
              image: '',
            },
            {
              id: 'a-addn-1',
              name: 'A1 - 105 RPM',
              specs: ['RPM: 105', 'Salinity epoxy coat'],
              description: 'A1 model with 105 RPM.',
              image: '/products/A Series/A Series A1 Gearbox.png',
            },
          ],
        },
        {
          id: "std-t",
          name: "T-SERIES",
          specs: ["High-ratio capabilities", "Universal mounting options", "High overload capacity"],
          description: "Modular standard gearbox providing extreme adaptability for complex industrial transmission routing.",
          image: "",
          products: [
            { id: 't-0', name: '1 HP Motor', specs: ['Power: 1 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 1 HP.', image: '' },
            { id: 't-1', name: '1.5 HP Motor', specs: ['Power: 1.5 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 1.5 HP.', image: '' },
            { id: 't-2', name: '2 HP Motor', specs: ['Power: 2 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 2 HP.', image: '' },
            { id: 't-3', name: '3 HP Motor', specs: ['Power: 3 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 3 HP.', image: '' },
            { id: 't-4', name: '5 HP Motor', specs: ['Power: 5 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 5 HP.', image: '' },
            { id: 't-5', name: '7.5 HP Motor', specs: ['Power: 7.5 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 7.5 HP.', image: '' },
            { id: 't-6', name: '10 HP Motor', specs: ['Power: 10 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 10 HP.', image: '' }
          ],
        },
        {
          id: "std-l",
          name: "L-SERIES",
          specs: ["Right angle orientation", "Compact structural design", "High static load rating"],
          description: "Right-angle transmission system built for precise angular torque transfer in space-constrained layouts.",
          image: "/products/L Series/WhatsApp Image 2026-10-23 at 5.57.39 PM.jpeg",
          products: [{ id: 'l-slew', name: 'Slew Drive Series', specs: ['Right angle orientation', 'High static load'], description: 'Slew Drive right-angle transmission system.', image: '/products/L Series/WhatsApp Image 2026-10-23 at 5.57.39 PM.jpeg' }],
        },
      ],
    },
    {
      id: "custom",
      title: "Customized Gearboxes",
      icon: <Cpu className="w-5 h-5" />,
      description: "Tailored multi-stage high-torque drives engineered for custom applications.",
      series: [
        {
          id: "cst-b0",
          name: "B0-SERIES",
          specs: ["Customizable ratios", "High mechanical capability"],
          description: "Customized standard gearbox designed for precision requirements.",
          image: "/products/BO Series/B Series Sprial Bevel -1 copy.png",
          products: [
            { id: 'b0-0', name: 'B01', specs: ['Model: B01', 'Custom built'], description: 'B0-Series customized gearbox, model B01.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-1', name: 'B02*', specs: ['Model: B02*', 'Custom built'], description: 'B0-Series customized gearbox, model B02*.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-2', name: 'B03*', specs: ['Model: B03*', 'Custom built'], description: 'B0-Series customized gearbox, model B03*.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-3', name: 'B03A', specs: ['Model: B03A', 'Custom built'], description: 'B0-Series customized gearbox, model B03A.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-4', name: 'B03M', specs: ['Model: B03M', 'Custom built'], description: 'B0-Series customized gearbox, model B03M.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-5', name: 'B04*', specs: ['Model: B04*', 'Custom built'], description: 'B0-Series customized gearbox, model B04*.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-6', name: 'B04A', specs: ['Model: B04A', 'Custom built'], description: 'B0-Series customized gearbox, model B04A.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-7', name: 'B04M', specs: ['Model: B04M', 'Custom built'], description: 'B0-Series customized gearbox, model B04M.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-8', name: 'B05', specs: ['Model: B05', 'Custom built'], description: 'B0-Series customized gearbox, model B05.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-9', name: 'B05JS', specs: ['Model: B05JS', 'Custom built'], description: 'B0-Series customized gearbox, model B05JS.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-10', name: 'B06', specs: ['Model: B06', 'Custom built'], description: 'B0-Series customized gearbox, model B06.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-11', name: 'B07A', specs: ['Model: B07A', 'Custom built'], description: 'B0-Series customized gearbox, model B07A.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-12', name: 'B07M', specs: ['Model: B07M', 'Custom built'], description: 'B0-Series customized gearbox, model B07M.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' },
            { id: 'b0-13', name: 'B08', specs: ['Model: B08', 'Custom built'], description: 'B0-Series customized gearbox, model B08.', image: '/products/BO Series/B Series Sprial Bevel -1 copy.png' }
          ],
        },
        {
          id: "cst-z",
          name: "Z-SERIES",
          specs: ["Project Based", "Tailored specifications"],
          description: "Project Based Products — Customized Gear Box.",
          image: "/products/Z Series/WhatsApp Image 2026-10-23 at 6.02.03 PM (1).jpeg",
          products: [
            { id: 'z-1', name: 'Customized Project Gearbox', specs: ['Type: Project Based', 'Custom limits'], description: 'Project based customized gearbox solutions.', image: '/products/Z Series/WhatsApp Image 2026-10-23 at 6.02.03 PM (1).jpeg' },
            { id: 'z-2', name: 'Customized Project Gearbox', specs: ['Type: Project Based', 'Custom limits'], description: 'Project based customized gearbox solutions.', image: '/products/Z Series/WhatsApp Image 2026-10-23 at 6.02.03 PM (2).jpeg' },
            { id: 'z-3', name: 'Customized Project Gearbox', specs: ['Type: Project Based', 'Custom limits'], description: 'Project based customized gearbox solutions.', image: '/products/Z Series/WhatsApp Image 2026-10-23 at 6.02.03 PM.jpeg' }
          ],
        },
        {
          id: "cst-m",
          name: "M-SERIES",
          specs: ["Multiple Types", "Versatile deployment"],
          description: "Customized Gearbox solutions including Parallel Helical, Bevel Helical, and more.",
          image: "/products/M Series/M Series Bevel Helical Gearbox.png",
          products: [
            { id: 'm-0', name: 'Parallel Helical', specs: ['Type: Parallel Helical', 'Custom built'], description: 'M-Series customized gearbox, Parallel Helical type.', image: '/products/M Series/m series bevel helical gearbox outlined HQ.png' },
            { id: 'm-1', name: 'Bevel Helical', specs: ['Type: Bevel Helical', 'Custom built'], description: 'M-Series customized gearbox, Bevel Helical type.', image: '/products/M Series/M Series Bevel Helical Gearbox.png' },
            { id: 'm-2', name: 'Special Worm', specs: ['Type: Special Worm', 'Custom built'], description: 'M-Series customized gearbox, Special Worm type.', image: '/products/M Series/M Series Bevel Helical Gearbox.png' },
          ],
        },
        {
          id: "cst-mso",
          name: "MSO-SERIES",
          specs: ["Service division", "Retrofits & Overhauls"],
          description: "Maintenance, Service & Overhaul of transmission units.",
          image: "",
          products: [
            { id: 'mso-1', name: 'Maintenance, Service & Overhaul', specs: ['Service: Maintenance', 'Component Overhaul'], description: 'Complete maintenance, service, and overhaul solutions.', image: '' }
          ],
        },
      ],
    },
    {
      id: "components",
      title: "Gears and Components",
      icon: <Layers className="w-5 h-5" />,
      description: "Exclusive machined components, transfer housings, and specialized industrial gears.",
      series: [
        {
          id: "cmp-c",
          name: "C-SERIES",
          specs: ["Material: Aluminium / Casting", "Precision Machined"],
          description: "Exclusive Aluminium & Casting Machined Components.",
          image: "/products/C Series/C series transfer housing -1.png",
          products: [
            { id: 'c-1', name: 'Exclusive Aluminium / Casting Machined Components', specs: ['Material: Aluminium / Casting', 'Machined Components'], description: 'Exclusive machined components.', image: '/products/C Series/C series transfer housing -1.png' }
          ],
        },
        {
          id: "cmp-o",
          name: "O-SERIES",
          specs: ["Market: Domestic", "High Availability"],
          description: "Spare Gears for domestic applications.",
          image: "/products/O Series/O series.png",
          products: [
            { id: 'o-1', name: 'Spare Gears — Domestic', specs: ['Type: Spare Gears', 'Market: Domestic'], description: 'Spare gears catering to the domestic market.', image: '/products/O Series/O series.png' }
          ],
        },
        {
          id: "cmp-o1",
          name: "O1-SERIES",
          specs: ["Market: International", "Export Quality"],
          description: "Spare Gears for international applications.",
          image: "/products/O Series/O series spe.png",
          products: [
            { id: 'o1-1', name: 'Spare Gears — International', specs: ['Type: Spare Gears', 'Market: International'], description: 'Premium quality spare gears for the international market.', image: '/products/O Series/O series spe.png' }
          ],
        },
        {
          id: "cmp-j",
          name: "J-SERIES",
          specs: ["Type: Job-Order", "Custom Specifications"],
          description: "Job-Order based gear components built to specification.",
          image: "",
          products: [
            { id: 'j-1', name: 'Job-Order', specs: ['Type: Job-Order', 'Build to Spec'], description: 'Custom job-order gear manufacturing.', image: '' }
          ],
        },
        {
          id: "cmp-r",
          name: "R-SERIES",
          specs: ["Applications: Multi-industry", "High Precision"],
          description: "Gears and components for specialized applications.",
          image: "",
          products: [
            { id: 'r-1', name: 'Railway Applications', specs: ['Application: Railway', 'High Precision'], description: 'Components engineered for railway applications.', image: '' },
            { id: 'r-2', name: 'Defence Applications', specs: ['Application: Defence', 'High Precision'], description: 'Components engineered for defence applications.', image: '' },
            { id: 'r-3', name: 'Aerospace Applications', specs: ['Application: Aerospace', 'High Precision'], description: 'Components engineered for aerospace applications.', image: '' },
          ],
        },
      ],
    }
  ];

  const activeCatData = categories.find((cat) => cat.id === activeCategory) || categories[0];

  const handleInquiryClick = (productName?: string, specs?: string[], models?: string[]) => {
    setEnquiryModalData({
      category: activeCatData.title,
      product: productName || "",
      specs: specs || [],
      models: models || [],
    });
    setIsEnquiryModalOpen(true);
  };

  const handleBackToPortal = () => {
    router.push("/?portal=true");
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden w-full font-sans select-none flex flex-col justify-between">

      {/* Translucent Navigation Header */}
      <Navbar onBackToPortal={handleBackToPortal} />

      {/* Main Page Area */}
      <div id="products" className="relative pt-20 sm:pt-24 md:pt-36 pb-12 bg-slate-50 overflow-hidden flex-grow">
        <div className="max-w-[1536px] 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative z-10">

          {/* Header Row & Category Filter / Dropdown */}
          <div className="flex flex-col mb-2.5 sm:mb-4 md:mb-10">

            {/* Category Name Heading */}
            <div className="flex items-center gap-2.5 text-left mb-5 sm:mb-6">
              <div className="text-brand-gold">
                {activeCatData.icon}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight">
                {activeCatData.title.split(' ')[0]} <span className="text-brand-gold">{activeCatData.title.split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>

            {/* Mobile Category Dropdown (Compact, Left-Aligned, Closer to Product Cards) */}
            <div className="relative md:hidden w-fit self-start mb-0">
              <button
                type="button"
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
                className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-200/90 rounded-lg shadow-xs text-[11px] font-sora font-bold text-brand-navy hover:border-brand-gold transition-all cursor-pointer text-left"
                aria-label="Select Category"
              >
                <span className="text-brand-gold flex-shrink-0 flex items-center [&>svg]:w-3.5 [&>svg]:h-3.5">
                  {activeCatData.icon}
                </span>
                <span className="text-brand-navy">{activeCatData.title}</span>
                <ChevronDown className={`w-3 h-3 text-brand-gold transition-transform duration-200 ${catDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {catDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setCatDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1.5 w-56 bg-white border border-slate-200 rounded-xl shadow-xl z-40 overflow-hidden py-1 divide-y divide-slate-100"
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveCategory(cat.id);
                            setActiveSeries(null);
                            setCatDropdownOpen(false);
                            window.history.pushState(null, "", `/products?category=${cat.id}`);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-sora font-bold transition-colors cursor-pointer ${activeCategory === cat.id
                            ? "bg-brand-gold/10 text-brand-gold"
                            : "text-brand-navy/80 hover:bg-slate-50 hover:text-brand-navy"
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`flex items-center [&>svg]:w-3.5 [&>svg]:h-3.5 ${activeCategory === cat.id ? "text-brand-gold" : "text-brand-navy/40"}`}>
                              {cat.icon}
                            </span>
                            <span>{cat.title}</span>
                          </div>
                          {activeCategory === cat.id && (
                            <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Category Filter Tabs */}
            <div className="hidden md:flex overflow-x-auto flex-nowrap gap-2 sm:gap-3 pb-0.5 border-b border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveSeries(null); // Reset series selection on new category
                    window.history.pushState(null, "", `/products?category=${cat.id}`);
                  }}
                  className={`flex shrink-0 items-center justify-center gap-2 px-4 sm:px-6 py-3 transition-all duration-300 font-sora font-extrabold text-xs sm:text-sm tracking-wide border-b-2 outline-none ${activeCategory === cat.id
                    ? "border-brand-gold text-brand-gold bg-brand-gold/5 rounded-t-lg"
                    : "border-transparent text-brand-navy/60 hover:text-brand-navy hover:bg-slate-100 rounded-t-lg"
                    }`}
                >
                  <span className={activeCategory === cat.id ? "text-brand-gold" : "text-brand-navy/40"}>{cat.icon}</span>
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Centered Products Grid */}
          <div className="relative w-full mb-12">
            <AnimatePresence mode="wait">
              {activeSeries ? (
                <motion.div
                  key={`series-${activeSeries.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() => setActiveSeries(null)}
                      className="flex items-center gap-1.5 text-brand-navy hover:text-brand-gold text-sm font-sora font-extrabold transition-colors py-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to {activeCatData.title}
                    </button>
                    <span className="text-slate-300">|</span>
                    <h3 className="text-lg font-sora font-extrabold text-brand-navy">{activeSeries.name} Models</h3>
                  </div>

                  {activeSeries.products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8">
                      {activeSeries.products.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            setSelectedProduct(prod);
                            setSelectedModel(prod.models && prod.models.length > 0 ? prod.models[0] : prod.name);
                          }}
                          className="glass-card rounded-xl p-5 bg-white border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-brand-gold/50 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden h-[340px] text-left"
                        >
                          <div className="w-full h-52 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50/70 mb-3.5 shadow-inner overflow-hidden flex-shrink-0 p-3">
                            {prod.image ? (
                              <img src={prod.image} alt={prod.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                              <div className="transition-transform duration-500 group-hover:scale-105">
                                {prod.illustration}
                              </div>
                            )}
                            <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                              <span className="text-[11px] font-sora font-extrabold text-white bg-brand-gold px-3.5 py-2 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                                View Details <ChevronRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col justify-center mt-1">
                            <h4 className="text-sm sm:text-base font-sora font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-250 line-clamp-2 leading-tight">
                              {prod.name}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center border border-dashed border-slate-300 rounded-2xl bg-slate-50/50">
                      <p className="text-brand-navy/60 font-sans">Detailed product models for {activeSeries.name} are currently being updated.</p>
                      <button onClick={() => setSelectedProduct({ id: "inq", name: `${activeSeries.name} General Inquiry`, specs: activeSeries.specs, description: activeSeries.description, image: activeSeries.image })} className="mt-4 text-brand-gold hover:text-brand-navy font-sora text-sm font-extrabold cursor-pointer transition-colors block mx-auto">
                        Submit General Series Inquiry
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={`cat-${activeCategory}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8"
                >
                  {activeCatData.series.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setActiveSeries(s)}
                      className="glass-card rounded-xl p-5 bg-white border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-brand-gold/50 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden h-[340px] text-left"
                    >
                      <div className="w-full h-52 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50/70 mb-3.5 shadow-inner overflow-hidden flex-shrink-0 p-3">
                        {s.image ? (
                          <img src={s.image} alt={s.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <div className="transition-transform duration-500 group-hover:scale-105">
                            {s.illustration}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                          <span className="text-[11px] font-sora font-extrabold text-white bg-brand-navy px-3.5 py-2 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                            Browse Models <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow flex items-center mt-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-sora font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-250 line-clamp-2 leading-tight">
                          {s.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
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
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/95 border border-slate-200 text-brand-navy hover:text-brand-gold hover:border-brand-gold/30 shadow-sm transition-all duration-200 z-50 cursor-pointer"
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
                  <span className="text-brand-gold">
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
                  <span className="text-[10px] font-mono font-bold text-brand-gold tracking-wider uppercase mb-1 block">
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

                  {/* Model / Size Selector for Consolidated Products */}
                  {selectedProduct.models && selectedProduct.models.length > 0 && (
                    <div className="mb-5 p-3.5 bg-slate-50 border border-slate-200/90 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">
                          Select Specific Model / Size:
                        </span>
                        <span className="text-xs font-sora font-extrabold text-brand-navy">
                          {selectedModel}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.models.map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setSelectedModel(m)}
                            className={`px-3 py-1.5 text-xs font-sora font-bold rounded-lg border transition-all cursor-pointer ${selectedModel === m
                              ? "bg-brand-navy text-white border-brand-navy shadow-xs scale-102"
                              : "bg-white text-brand-navy/70 border-slate-200 hover:border-brand-gold hover:text-brand-navy"
                              }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Specs */}
                  <h4 className="text-xs sm:text-sm font-sora font-extrabold text-brand-navy mb-3">
                    Technical Specifications
                  </h4>
                  <div className="flex flex-col gap-2.5 mb-6">
                    {selectedProduct.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-brand-navy/80 font-semibold font-sans bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
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
                      const prodName = (selectedProduct.models && selectedProduct.models.length > 0)
                        ? (selectedModel || selectedProduct.models[0])
                        : selectedProduct.name;
                      const prodSpecs = selectedProduct.specs;
                      const prodModels = selectedProduct.models;
                      setSelectedProduct(null);
                      handleInquiryClick(prodName, prodSpecs, prodModels);
                    }}
                    className="w-auto px-6 shadow-md hover:shadow-brand-gold/15 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Enquiry Form Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialCategory={enquiryModalData.category}
        initialProduct={enquiryModalData.product}
        initialSpecs={enquiryModalData.specs}
        availableModels={enquiryModalData.models}
      />

      {/* Global Footer */}
      <Footer onBackToPortal={handleBackToPortal} />

    </main>
  );
}
