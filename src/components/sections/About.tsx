"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Award, Globe, Building2, ShieldCheck } from "lucide-react";
import Card from "../ui/Card";

interface MetricTile {
  metric: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function About() {
  const metricTiles: MetricTile[] = [
    {
      metric: "30+ Years",
      title: "Industry Excellence",
      description: "Decades of engineering competence since 1995.",
      icon: <Award className="w-5 h-5" />,
    },
    {
      metric: "100k Sq Ft",
      title: "Manufacturing Plants",
      description: "Spacious plants located in Coimbatore & Erode.",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      metric: "20+ Countries",
      title: "Global Export Reach",
      description: "Serving USA, Europe, and Southeast Asia.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      metric: "ISO 9001",
      title: "Certified Systems",
      description: "Audited Quality Management parameters.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            About <span className="text-brand-orange">Gishnu Gears</span>
          </h2>
          <p className="text-brand-orange font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
            Delivering precision gearbox solutions since 1995
          </p>
        </div>

        {/* 1. Short Narrative & 3-Part Image Gallery Collage */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Left Text: Ultra-compact, single high-impact paragraph */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-brand-navy tracking-tight leading-snug">
              Engineering the Future of Industrial Power Transmission
            </h3>
            <p className="text-brand-navy/75 text-base leading-relaxed font-sans font-medium">
              Gishnu Gears Private Limited is an ISO 9001:2015 certified manufacturer specializing in custom gear drives for B2B industrial, aquaculture, and space-defence sectors. Combining advanced CNC tooth-grinding technology with absolute structural metrology, we supply rugged, micron-precision transmissions engineered for peak load durability.
            </p>
          </div>

          {/* Right Image: Interactive 3-Part Collapsed Collage */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[400px] w-full flex items-center justify-center">
            
            {/* Collage Base shadow */}
            <div className="absolute inset-0 bg-slate-50/50 border border-slate-100 rounded-3xl -z-10 pointer-events-none" />

            {/* Picture 1: CAD simulation (Main Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, zIndex: 30 }}
              className="absolute left-4 top-4 z-20 w-[60%] aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md p-2 cursor-pointer"
            >
              <img
                src="/gearbox_cad.png"
                alt="CAD Gearbox simulation"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 left-3 right-3 py-0.5 px-1.5 rounded bg-black/75 text-[7px] font-mono text-white text-left uppercase tracking-wider">
                0.001mm Mesh CAD Analysis
              </div>
            </motion.div>

            {/* Picture 2: Standard Gearbox (Top Right Offset) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, zIndex: 30 }}
              className="absolute right-4 top-10 z-10 w-[45%] aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg cursor-pointer"
            >
              <img
                src="/standard_gearbox.png"
                alt="Standard Gearbox"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-3 right-3 py-0.5 px-1.5 rounded bg-black/75 text-[7px] font-mono text-white text-left uppercase tracking-wider">
                Aquaculture Units
              </div>
            </motion.div>

            {/* Picture 3: Custom Gearbox (Bottom Right Offset) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, zIndex: 30 }}
              className="absolute right-12 bottom-4 z-20 w-[40%] aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md cursor-pointer"
            >
              <img
                src="/custom_gearbox.png"
                alt="Custom Gearbox"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-3 right-3 py-0.5 px-1.5 rounded bg-black/75 text-[7px] font-mono text-white text-left uppercase tracking-wider">
                Custom Drives
              </div>
            </motion.div>

          </div>
        </div>

        {/* 2. Vision & Mission Cards - Redesigned Asymmetric Glassmorphic Layout */}
        <div className="relative grid md:grid-cols-2 gap-8 mb-24 z-10">
          
          {/* Ambient decorative glowing orbs in the background */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-brand-orange/5 blur-[80px] pointer-events-none -z-10" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-72 h-72 rounded-full bg-brand-navy-light/5 blur-[80px] pointer-events-none -z-10" />

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 p-8 sm:p-10 flex flex-col items-start gap-5 text-left shadow-md hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Visual top border highlight */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Lifted metallic-accented icon badge */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-brand-orange shadow-inner group-hover:scale-110 group-hover:bg-brand-orange/5 group-hover:border-brand-orange/20 transition-all duration-300">
              <Eye className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors">
                Our Vision
              </h4>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed font-sans font-semibold">
                To become a globally trusted gearbox manufacturing brand known for precision, innovation, and quality.
              </p>
            </div>

            {/* Core B2B Pillars checklist */}
            <div className="w-full flex flex-col gap-3 pt-5 border-t border-slate-100/80 mt-2">
              <div className="flex items-start gap-2.5 text-xs text-brand-navy/70 font-semibold font-sans">
                <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-brand-navy font-bold">Global Market Integration:</span>
                  <p className="text-brand-navy/60 font-medium mt-0.5">Actively exporting high-precision systems to 20+ countries worldwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-navy/70 font-semibold font-sans">
                <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-brand-navy font-bold">Next-Generation Design:</span>
                  <p className="text-brand-navy/60 font-medium mt-0.5">Advanced structural engineering backed by full finite element stress analytics.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 p-8 sm:p-10 flex flex-col items-start gap-5 text-left shadow-md hover:shadow-xl hover:border-brand-navy-light/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Visual top border highlight */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy-light via-brand-navy-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Lifted metallic-accented icon badge */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-brand-navy shadow-inner group-hover:scale-110 group-hover:bg-brand-navy-light/5 group-hover:border-brand-navy-light/20 transition-all duration-300">
              <Target className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight group-hover:text-brand-navy-light transition-colors">
                Our Mission
              </h4>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed font-sans font-semibold">
                To deliver durable, high-performance gear solutions with advanced engineering, reliable service, and customer-focused manufacturing.
              </p>
            </div>

            {/* Core B2B Pillars checklist */}
            <div className="w-full flex flex-col gap-3 pt-5 border-t border-slate-100/80 mt-2">
              <div className="flex items-start gap-2.5 text-xs text-brand-navy/70 font-semibold font-sans">
                <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-brand-navy font-bold">Uncompromising Metrology:</span>
                  <p className="text-brand-navy/60 font-medium mt-0.5">CNC profile tooth grinding and Zeiss coordinate measurement at sub-micron levels.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-navy/70 font-semibold font-sans">
                <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-brand-navy font-bold">Dynamic Client Focus:</span>
                  <p className="text-brand-navy/60 font-medium mt-0.5">Direct 48-hour engineering desk responses for tailored transmission specifications.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. Why Gishnu Gears: High-Impact Visual Metrics Dashboard (No Text Paragraph blocks) */}
        <div className="w-full text-left">
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-brand-navy mb-3">
              Why Gishnu Gears
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricTiles.map((tile, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between text-left h-[180px] hover:border-brand-orange/20 hover:shadow-md transition-all duration-200 relative group overflow-hidden"
              >
                {/* Accent glow on tile hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-center w-full relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-100 text-brand-orange shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {tile.icon}
                  </div>
                  <span className="text-[20px] font-sora font-black text-brand-orange tracking-tight">
                    {tile.metric}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <h5 className="text-sm font-sora font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {tile.title}
                  </h5>
                  <p className="text-brand-navy/60 text-xs font-sans mt-1 leading-snug font-medium">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
