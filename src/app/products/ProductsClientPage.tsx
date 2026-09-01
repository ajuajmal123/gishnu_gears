"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, Shield, Train, ChevronRight, ChevronLeft, Calendar, Phone, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

interface Product {
  id: string;
  name: string;
  specs: string[];
  description: string;
  illustration?: React.ReactNode;
  image?: string;
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
          image: "/standard_gearbox.png", products: [
            { id: 'b1-0', name: 'GB1 - 65', specs: ['Size: 65', 'Heavy-duty housing'], description: 'GB1 model standard gearbox with size 65.', image: '/standard_gearbox.png' },
            { id: 'b1-1', name: 'GB1 - 90', specs: ['Size: 90', 'Heavy-duty housing'], description: 'GB1 model standard gearbox with size 90.', image: '/standard_gearbox.png' },
            { id: 'b1-2', name: 'GB1 - 120', specs: ['Size: 120', 'Heavy-duty housing'], description: 'GB1 model standard gearbox with size 120.', image: '/standard_gearbox.png' },
            { id: 'b1-3', name: 'GB1 - 140', specs: ['Size: 140', 'Heavy-duty housing'], description: 'GB1 model standard gearbox with size 140.', image: '/standard_gearbox.png' },
            { id: 'b1-4', name: 'GB1 - 260', specs: ['Size: 260', 'Heavy-duty housing'], description: 'GB1 model standard gearbox with size 260.', image: '/standard_gearbox.png' }
          ],
        },
        {
          id: "std-g",
          name: "G-SERIES",
          specs: ["Compact footprint", "High efficiency design", "Low-noise operation"],
          description: "Precision-machined standard gearbox optimized for smooth and reliable variable speed applications.",
          image: "/standard_gearbox.png", products: [
            { id: 'gu-0', name: 'GU - 162', specs: ['Size: 162', 'Compact footprint'], description: 'GU model standard gearbox, size 162.', image: '/standard_gearbox.png' },
            { id: 'gu-1', name: 'GU - 200', specs: ['Size: 200', 'Compact footprint'], description: 'GU model standard gearbox, size 200.', image: '/standard_gearbox.png' },
            { id: 'gu-2', name: 'GU - 237', specs: ['Size: 237', 'Compact footprint'], description: 'GU model standard gearbox, size 237.', image: '/standard_gearbox.png' },
            { id: 'gu-3', name: 'GU - 287', specs: ['Size: 287', 'Compact footprint'], description: 'GU model standard gearbox, size 287.', image: '/standard_gearbox.png' },
            { id: 'gu-4', name: 'GU - 300', specs: ['Size: 300', 'Compact footprint'], description: 'GU model standard gearbox, size 300.', image: '/standard_gearbox.png' },
            { id: 'gu-5', name: 'GU - 337', specs: ['Size: 337', 'Compact footprint'], description: 'GU model standard gearbox, size 337.', image: '/standard_gearbox.png' },
            { id: 'gu-6', name: 'GU - 400', specs: ['Size: 400', 'Compact footprint'], description: 'GU model standard gearbox, size 400.', image: '/standard_gearbox.png' },
            { id: 'gu-7', name: 'GU - 500', specs: ['Size: 500', 'Compact footprint'], description: 'GU model standard gearbox, size 500.', image: '/standard_gearbox.png' },
            { id: 'gu-8', name: 'GU - 600', specs: ['Size: 600', 'Compact footprint'], description: 'GU model standard gearbox, size 600.', image: '/standard_gearbox.png' },
            { id: 'gu-9', name: 'GU - 700', specs: ['Size: 700', 'Compact footprint'], description: 'GU model standard gearbox, size 700.', image: '/standard_gearbox.png' },
            { id: 'gu-10', name: 'GU - 800', specs: ['Size: 800', 'Compact footprint'], description: 'GU model standard gearbox, size 800.', image: '/standard_gearbox.png' },
            { id: 'gu-11', name: 'GU - 1000', specs: ['Size: 1000', 'Compact footprint'], description: 'GU model standard gearbox, size 1000.', image: '/standard_gearbox.png' },
            { id: 'gv-0', name: 'GV - 400', specs: ['Size: 400', 'Compact footprint'], description: 'GV model standard gearbox, size 400.', image: '/standard_gearbox.png' },
            { id: 'gv-1', name: 'GV - 500', specs: ['Size: 500', 'Compact footprint'], description: 'GV model standard gearbox, size 500.', image: '/standard_gearbox.png' },
            { id: 'gv-2', name: 'GV - 600', specs: ['Size: 600', 'Compact footprint'], description: 'GV model standard gearbox, size 600.', image: '/standard_gearbox.png' },
            { id: 'gv-3', name: 'GV - 700', specs: ['Size: 700', 'Compact footprint'], description: 'GV model standard gearbox, size 700.', image: '/standard_gearbox.png' },
            { id: 'gv-4', name: 'GV - 800', specs: ['Size: 800', 'Compact footprint'], description: 'GV model standard gearbox, size 800.', image: '/standard_gearbox.png' },
            { id: 'gv-5', name: 'GV - 900', specs: ['Size: 900', 'Compact footprint'], description: 'GV model standard gearbox, size 900.', image: '/standard_gearbox.png' }
          ],
        },
        {
          id: "std-gal",
          name: "GAL-SERIES",
          specs: ["Extended durability", "Vibration damping", "Enhanced thermal dissipation"],
          description: "Advanced standard gearbox unit featuring superior heat management for continuous load bearing environments.",
          image: "/standard_gearbox.png", products: [
            { id: 'gal-0', name: 'GMRV - 30', specs: ['Size: 30', 'Extended durability'], description: 'GMRV model standard gearbox, size 30.', image: '/standard_gearbox.png' },
            { id: 'gal-1', name: 'GMRV - 40', specs: ['Size: 40', 'Extended durability'], description: 'GMRV model standard gearbox, size 40.', image: '/standard_gearbox.png' },
            { id: 'gal-2', name: 'GMRV - 50', specs: ['Size: 50', 'Extended durability'], description: 'GMRV model standard gearbox, size 50.', image: '/standard_gearbox.png' },
            { id: 'gal-3', name: 'GMRV - 63', specs: ['Size: 63', 'Extended durability'], description: 'GMRV model standard gearbox, size 63.', image: '/standard_gearbox.png' },
            { id: 'gal-4', name: 'GMRV - 75', specs: ['Size: 75', 'Extended durability'], description: 'GMRV model standard gearbox, size 75.', image: '/standard_gearbox.png' },
            { id: 'gal-5', name: 'GMRV - 90', specs: ['Size: 90', 'Extended durability'], description: 'GMRV model standard gearbox, size 90.', image: '/standard_gearbox.png' },
            { id: 'gal-6', name: 'GMRV - 110', specs: ['Size: 110', 'Extended durability'], description: 'GMRV model standard gearbox, size 110.', image: '/standard_gearbox.png' },
            { id: 'gal-7', name: 'GMRV - 130', specs: ['Size: 130', 'Extended durability'], description: 'GMRV model standard gearbox, size 130.', image: '/standard_gearbox.png' },
            { id: 'gal-8', name: 'GMRV - 150', specs: ['Size: 150', 'Extended durability'], description: 'GMRV model standard gearbox, size 150.', image: '/standard_gearbox.png' }
          ],
        },
        {
          id: "std-h",
          name: "H-SERIES",
          specs: ["Inline coaxial layout", "Output speed: up to 400 RPM", "Torque: up to 12,000 Nm"],
          description: "Robust helical speed reducer engineered for heavy industrial conveyor rollers, lifts, and packaging aggregates.",
          image: "/standard_gearbox.png", products: [
            { id: 'h-0', name: 'GH - 20 (ALM)', specs: ['Size: 20 (ALM)', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 20 (ALM).', image: '/standard_gearbox.png' },
            { id: 'h-1', name: 'GH - 25', specs: ['Size: 25', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 25.', image: '/standard_gearbox.png' },
            { id: 'h-2', name: 'GH - 30', specs: ['Size: 30', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 30.', image: '/standard_gearbox.png' },
            { id: 'h-3', name: 'GH - 35', specs: ['Size: 35', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 35.', image: '/standard_gearbox.png' },
            { id: 'h-4', name: 'GH - 40', specs: ['Size: 40', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 40.', image: '/standard_gearbox.png' },
            { id: 'h-5', name: 'GH - 50', specs: ['Size: 50', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 50.', image: '/standard_gearbox.png' },
            { id: 'h-6', name: 'GH - 60', specs: ['Size: 60', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 60.', image: '/standard_gearbox.png' },
            { id: 'h-7', name: 'GH - 80', specs: ['Size: 80', 'Inline coaxial layout'], description: 'GH model helical speed reducer, size 80.', image: '/standard_gearbox.png' }
          ],
        },
        {
          id: "std-a",
          name: "A-SERIES",
          specs: ["Salinity epoxy coat", "Dual-oil seals", "Efficiency: 98.2%"],
          description: "High-integrity gear unit built to endure harsh external environments and heavy duty cycles.",
          image: "/standard_gearbox.png", products: [
            { id: 'a3h-0', name: 'A3H - 105 RPM', specs: ['RPM: 105', 'Salinity epoxy coat'], description: 'A3H model with 105 RPM.', image: '/standard_gearbox.png' },
            { id: 'a3h-1', name: 'A3H - 115 RPM', specs: ['RPM: 115', 'Salinity epoxy coat'], description: 'A3H model with 115 RPM.', image: '/standard_gearbox.png' },
            { id: 'a3h-2', name: 'A3H - 130 RPM', specs: ['RPM: 130', 'Salinity epoxy coat'], description: 'A3H model with 130 RPM.', image: '/standard_gearbox.png' },
            { id: 'a3ha-0', name: 'A3HA - 105 RPM', specs: ['RPM: 105', 'Salinity epoxy coat'], description: 'A3HA model with 105 RPM.', image: '/standard_gearbox.png' },
            { id: 'a3ha-1', name: 'A3HA - 115 RPM', specs: ['RPM: 115', 'Salinity epoxy coat'], description: 'A3HA model with 115 RPM.', image: '/standard_gearbox.png' },
            { id: 'gbh200-0', name: 'GBH200 - 105 RPM', specs: ['RPM: 105', 'Salinity epoxy coat'], description: 'GBH200 model with 105 RPM.', image: '/standard_gearbox.png' },
            { id: 'gbh200-1', name: 'GBH200 - 115 RPM', specs: ['RPM: 115', 'Salinity epoxy coat'], description: 'GBH200 model with 115 RPM.', image: '/standard_gearbox.png' },
            { id: 'gbh300-0', name: 'GBH300 - 105* RPM', specs: ['RPM: 105*', 'Salinity epoxy coat'], description: 'GBH300 model with 105* RPM.', image: '/standard_gearbox.png' },
            { id: 'gbh300-1', name: 'GBH300 - 115* RPM', specs: ['RPM: 115*', 'Salinity epoxy coat'], description: 'GBH300 model with 115* RPM.', image: '/standard_gearbox.png' },
            { id: 'a-addn-0', name: 'A4 - 105 RPM*', specs: ['RPM: 105', 'Salinity epoxy coat'], description: 'A4 model with 105 RPM*.', image: '/standard_gearbox.png' },
            { id: 'a-addn-1', name: 'A1 - 105 RPM', specs: ['RPM: 105', 'Salinity epoxy coat'], description: 'A1 model with 105 RPM.', image: '/standard_gearbox.png' }
          ],
        },
        {
          id: "std-t",
          name: "T-SERIES",
          specs: ["High-ratio capabilities", "Universal mounting options", "High overload capacity"],
          description: "Modular standard gearbox providing extreme adaptability for complex industrial transmission routing.",
          image: "/standard_gearbox.png", products: [
            { id: 't-0', name: '1 HP Motor', specs: ['Power: 1 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 1 HP.', image: '/standard_gearbox.png' },
            { id: 't-1', name: '1.5 HP Motor', specs: ['Power: 1.5 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 1.5 HP.', image: '/standard_gearbox.png' },
            { id: 't-2', name: '2 HP Motor', specs: ['Power: 2 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 2 HP.', image: '/standard_gearbox.png' },
            { id: 't-3', name: '3 HP Motor', specs: ['Power: 3 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 3 HP.', image: '/standard_gearbox.png' },
            { id: 't-4', name: '5 HP Motor', specs: ['Power: 5 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 5 HP.', image: '/standard_gearbox.png' },
            { id: 't-5', name: '7.5 HP Motor', specs: ['Power: 7.5 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 7.5 HP.', image: '/standard_gearbox.png' },
            { id: 't-6', name: '10 HP Motor', specs: ['Power: 10 HP', 'High-ratio capabilities'], description: 'T-Series modular gearbox motor, 10 HP.', image: '/standard_gearbox.png' }
          ],
        },
        {
          id: "std-l",
          name: "L-SERIES",
          specs: ["Right angle orientation", "Compact structural design", "High static load rating"],
          description: "Right-angle transmission system built for precise angular torque transfer in space-constrained layouts.",
          image: "/standard_gearbox.png", products: [{ id: 'l-slew', name: 'Slew Drive Series', specs: ['Right angle orientation', 'High static load'], description: 'Slew Drive right-angle transmission system.', image: '/standard_gearbox.png' }],
        },
      ],
    },
    {
      id: "custom",
      title: "Custom Gearboxes",
      icon: <Cpu className="w-5 h-5" />,
      description: "Tailored multi-stage high-torque drives engineered for custom applications.",
      series: [
        {
          id: "cst-b0",
          name: "B0-SERIES",
          specs: ["Customizable ratios", "High mechanical capability"],
          description: "Customized standard gearbox designed for precision requirements.",
          image: "/custom_gearbox.png", products: [
            { id: 'b0-0', name: 'B01', specs: ['Model: B01', 'Custom built'], description: 'B0-Series customized gearbox, model B01.', image: '/custom_gearbox.png' },
            { id: 'b0-1', name: 'B02*', specs: ['Model: B02*', 'Custom built'], description: 'B0-Series customized gearbox, model B02*.', image: '/custom_gearbox.png' },
            { id: 'b0-2', name: 'B03*', specs: ['Model: B03*', 'Custom built'], description: 'B0-Series customized gearbox, model B03*.', image: '/custom_gearbox.png' },
            { id: 'b0-3', name: 'B03A', specs: ['Model: B03A', 'Custom built'], description: 'B0-Series customized gearbox, model B03A.', image: '/custom_gearbox.png' },
            { id: 'b0-4', name: 'B03M', specs: ['Model: B03M', 'Custom built'], description: 'B0-Series customized gearbox, model B03M.', image: '/custom_gearbox.png' },
            { id: 'b0-5', name: 'B04*', specs: ['Model: B04*', 'Custom built'], description: 'B0-Series customized gearbox, model B04*.', image: '/custom_gearbox.png' },
            { id: 'b0-6', name: 'B04A', specs: ['Model: B04A', 'Custom built'], description: 'B0-Series customized gearbox, model B04A.', image: '/custom_gearbox.png' },
            { id: 'b0-7', name: 'B04M', specs: ['Model: B04M', 'Custom built'], description: 'B0-Series customized gearbox, model B04M.', image: '/custom_gearbox.png' },
            { id: 'b0-8', name: 'B05', specs: ['Model: B05', 'Custom built'], description: 'B0-Series customized gearbox, model B05.', image: '/custom_gearbox.png' },
            { id: 'b0-9', name: 'B05JS', specs: ['Model: B05JS', 'Custom built'], description: 'B0-Series customized gearbox, model B05JS.', image: '/custom_gearbox.png' },
            { id: 'b0-10', name: 'B06', specs: ['Model: B06', 'Custom built'], description: 'B0-Series customized gearbox, model B06.', image: '/custom_gearbox.png' },
            { id: 'b0-11', name: 'B07A', specs: ['Model: B07A', 'Custom built'], description: 'B0-Series customized gearbox, model B07A.', image: '/custom_gearbox.png' },
            { id: 'b0-12', name: 'B07M', specs: ['Model: B07M', 'Custom built'], description: 'B0-Series customized gearbox, model B07M.', image: '/custom_gearbox.png' },
            { id: 'b0-13', name: 'B08', specs: ['Model: B08', 'Custom built'], description: 'B0-Series customized gearbox, model B08.', image: '/custom_gearbox.png' }
          ],
        },
        {
          id: "cst-z",
          name: "Z-SERIES",
          specs: ["Project Based", "Tailored specifications"],
          description: "Project Based Products — Customized Gear Box.",
          image: "/custom_gearbox.png", products: [
            { id: 'z-1', name: 'Customized Project Gearbox', specs: ['Type: Project Based', 'Custom limits'], description: 'Project based customized gearbox solutions.', image: '/custom_gearbox.png' }
          ],
        },
        {
          id: "cst-m",
          name: "M-SERIES",
          specs: ["Multiple Types", "Versatile deployment"],
          description: "Customized Gearbox solutions including Parallel Helical, Bevel Helical, and more.",
          image: "/custom_gearbox.png", products: [
            { id: 'm-0', name: 'Parallel Helical', specs: ['Type: Parallel Helical', 'Custom built'], description: 'M-Series customized gearbox, Parallel Helical type.', image: '/custom_gearbox.png' },
            { id: 'm-1', name: 'Bevel Helical', specs: ['Type: Bevel Helical', 'Custom built'], description: 'M-Series customized gearbox, Bevel Helical type.', image: '/custom_gearbox.png' },
            { id: 'm-2', name: 'Special Worm', specs: ['Type: Special Worm', 'Custom built'], description: 'M-Series customized gearbox, Special Worm type.', image: '/custom_gearbox.png' },
            { id: 'm-3', name: 'Reduction Unit', specs: ['Type: Reduction', 'Custom built'], description: 'M-Series customized gearbox, Reduction type.', image: '/custom_gearbox.png' }
          ],
        },
        {
          id: "cst-mso",
          name: "MSO-SERIES",
          specs: ["Service division", "Retrofits & Overhauls"],
          description: "Maintenance, Service & Overhaul of transmission units.",
          image: "/custom_gearbox.png", products: [
            { id: 'mso-1', name: 'Maintenance, Service & Overhaul', specs: ['Service: Maintenance', 'Component Overhaul'], description: 'Complete maintenance, service, and overhaul solutions.', image: '/custom_gearbox.png' }
          ],
        },
      ],
    },
    {
      id: "components",
      title: "Gears & Components",
      icon: <Shield className="w-5 h-5" />,
      description: "Exclusive machined components and specialized gears.",
      series: [
        {
          id: "cmp-c",
          name: "C-SERIES",
          specs: ["Material: Aluminium / Casting", "Precision Machined"],
          description: "Exclusive Aluminium & Casting Machined Components.",
          image: "/precision_gears.png", products: [
            { id: 'c-1', name: 'Exclusive Aluminium / Casting Machined Components', specs: ['Material: Aluminium / Casting', 'Machined Components'], description: 'Exclusive machined components.', image: '/precision_gears.png' }
          ],
        },
        {
          id: "cmp-o",
          name: "O-SERIES",
          specs: ["Market: Domestic", "High Availability"],
          description: "Spare Gears for domestic applications.",
          image: "/precision_gears.png", products: [
            { id: 'o-1', name: 'Spare Gears — Domestic', specs: ['Type: Spare Gears', 'Market: Domestic'], description: 'Spare gears catering to the domestic market.', image: '/precision_gears.png' }
          ],
        },
        {
          id: "cmp-o1",
          name: "O1-SERIES",
          specs: ["Market: International", "Export Quality"],
          description: "Spare Gears for international applications.",
          image: "/precision_gears.png", products: [
            { id: 'o1-1', name: 'Spare Gears — International', specs: ['Type: Spare Gears', 'Market: International'], description: 'Premium quality spare gears for the international market.', image: '/precision_gears.png' }
          ],
        },
        {
          id: "cmp-j",
          name: "J-SERIES",
          specs: ["Type: Job-Order", "Custom Specifications"],
          description: "Job-Order based gear components built to specification.",
          image: "/precision_gears.png", products: [
            { id: 'j-1', name: 'Job-Order', specs: ['Type: Job-Order', 'Build to Spec'], description: 'Custom job-order gear manufacturing.', image: '/precision_gears.png' }
          ],
        },
        {
          id: "cmp-r",
          name: "R-SERIES",
          specs: ["Applications: Multi-industry", "High Precision"],
          description: "Gears and components for specialized applications.",
          image: "/precision_gears.png", products: [
            { id: 'r-1', name: 'Railway Applications', specs: ['Application: Railway', 'High Precision'], description: 'Components engineered for railway applications.', image: '/precision_gears.png' },
            { id: 'r-2', name: 'Defence Applications', specs: ['Application: Defence', 'High Precision'], description: 'Components engineered for defence applications.', image: '/precision_gears.png' },
            { id: 'r-3', name: 'Aerospace Applications', specs: ['Application: Aerospace', 'High Precision'], description: 'Components engineered for aerospace applications.', image: '/precision_gears.png' },
            { id: 'r-4', name: 'Robotics Applications', specs: ['Application: Robotics', 'High Precision'], description: 'Components engineered for robotics applications.', image: '/precision_gears.png' }
          ],
        },
      ],
    }
  ];

  const activeCatData = categories.find((cat) => cat.id === activeCategory) || categories[0];

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
      <div id="products" className="relative pt-36 pb-12 bg-slate-50 overflow-hidden flex-grow">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

          {/* Header Row & Category Filter Tabs */}
          <div className="flex flex-col mb-10 gap-6">
            <div className="text-left flex items-center gap-3">
              <div className="text-brand-gold">
                {activeCatData.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight">
                {activeCatData.title.split(' ')[0]} <span className="text-brand-gold">{activeCatData.title.split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex overflow-x-auto flex-nowrap gap-2 sm:gap-3 pb-0.5 border-b border-slate-200">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {activeSeries.products.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => setSelectedProduct(prod)}
                          className="glass-card rounded-xl p-5 bg-white border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-brand-gold/40 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden h-[360px] text-left"
                        >
                          <div className="w-full h-56 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50 mb-3.5 shadow-inner overflow-hidden flex-shrink-0">
                            {prod.image ? (
                              <img src={prod.image} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            ) : (
                              <div className="transition-transform duration-500 group-hover:scale-110">
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {activeCatData.series.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setActiveSeries(s)}
                      className="glass-card rounded-xl p-5 bg-white border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-brand-gold/40 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden h-[360px] text-left"
                    >
                      <div className="w-full h-56 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50 mb-3.5 shadow-inner overflow-hidden flex-shrink-0">
                        {s.image ? (
                          <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        ) : (
                          <div className="transition-transform duration-500 group-hover:scale-110">
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
                      setSelectedProduct(null);
                      handleInquiryClick();
                    }}
                    className="w-auto px-6 shadow-md hover:shadow-brand-gold/15"
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
