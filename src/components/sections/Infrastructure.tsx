"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Microscope,
  Building2,
  FileCheck,
  Check,
  Zap
} from "lucide-react";
import EnquiryModal from "@/components/ui/EnquiryModal";

export default function Infrastructure() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const stats = [
    {
      value: "1,00,000 Sq Ft",
      label: "Total Facility",
      icon: <Building2 className="w-5 h-5 text-brand-gold" />
    },
    {
      value: "2",
      label: "Manufacturing Units",
      icon: <Factory className="w-5 h-5 text-brand-gold" />
    },
    {
      value: "40+",
      label: "CNC and Precision Machines",
      icon: <Gauge className="w-5 h-5 text-brand-gold" />
    }
  ];

  const machines = [
    {
      name: "CNC Hoffler Helix 400",
      subtitle: "Cylindrical gear grinding",
      image: "/infrastructure/cnc_hoffler_helix_400.png"
    },
    {
      name: "CNC Nidec Gear Shaper",
      subtitle: "Gear Shaping",
      image: "/infrastructure/cnc_nidec_gear_shaper.webp"
    },
    {
      name: "CNC Nimble NOAH 400H",
      subtitle: "Gear Hobbing",
      image: "/infrastructure/cnc_nimble_noah_400h.png"
    },
    {
      name: "Klingelnberg P40",
      subtitle: "Gear Profile Tester",
      image: "/infrastructure/klingelnberg_p40.png"
    },
    {
      name: "CNC Turning Machines",
      subtitle: "High-Precision Turning",
      image: "/infrastructure/cnc_turning_machines.png"
    },
    {
      name: "CNC Spiral Bevel Cutting",
      subtitle: "Spiral Bevel Cutting",
      image: "/infrastructure/cnc_spiral_bevel_cutting.png"
    },
    {
      name: "CNC Luren Worm Grinding",
      subtitle: "Worm Thread Grinding",
      image: "/infrastructure/cnc_luren_worm_grinding.jpg"
    },
    {
      name: "Accurate Spectra CMM",
      subtitle: "Precision Inspection",
      image: "/infrastructure/accurate_spectra_cmm.jpg"
    },
    {
      name: "Hardness Tester",
      subtitle: "Core & Surface Testing",
      image: "/infrastructure/hardness_tester.png"
    },
    {
      name: "CNC Makino HMC",
      subtitle: "Horizontal Machining Center",
      image: "/infrastructure/cnc_makino_hmc.jpg"
    },
    {
      name: "CNC Thread Whirling",
      subtitle: "Thread Whirling & Milling",
      image: "/infrastructure/cnc_thread_whirling.jpg"
    },
    {
      name: "CNC Palmary cylindrical grinding",
      subtitle: "Cylindrical Grinding",
      image: "/infrastructure/cnc_palmary_cylindrical_grinding.webp"
    }
  ];

  const qualityCards = [
    {
      title: "ISO 9001:2015",
      description: "Our Quality Management System is internationally certified, ensuring consistent precision in every gear manufactured.",
      image: "/infrastructure/quality_iso_9001.jpg"
    },
    {
      title: "Global Compliance",
      description: "We strictly adhere to DIN and AGMA standards, ensuring our gearboxes integrate seamlessly into global industrial systems.",
      image: "/infrastructure/quality_global_compliance.jpg"
    },
    {
      title: "Continuous Audits",
      description: "Frequent internal and external audits maintain peak operational standards and verify compliance with rigorous export norms.",
      image: "/infrastructure/quality_continuous_audits.jpg"
    }
  ];

  const qualitySteps = [
    {
      step: "STEP 1",
      title: "Research & Development",
      description: "Customer requirements analyzed, gear ratios calculated, technical drawings finalized, with prototype development where required."
    },
    {
      step: "STEP 2",
      title: "Material Procurement",
      description: "Certified raw materials sourced from approved vendors to meet mechanical and metallurgical specifications."
    },
    {
      step: "STEP 3",
      title: "CNC Precision Machining",
      description: "Gear cutting, hobbing, shaping, and grinding on CNC and precision machines to achieve tight tolerances."
    },
    {
      step: "STEP 4",
      title: "Special Processes",
      description: "Heat treatment, surface hardening, and protective finishes such as powder coating as per application needs."
    },
    {
      step: "STEP 5",
      title: "Gearbox Assembly",
      description: "Careful assembly of gears, shafts, housings, and bearings in controlled conditions."
    },
    {
      step: "STEP 6",
      title: "Gearbox Testing",
      description: "Load, noise, backlash, and efficiency tests performed on dedicated test rigs."
    },
    {
      step: "STEP 7",
      title: "Final QA",
      description: "Dimensional checks, documentation review, and ISO 9001:2015 verification before release."
    },
    {
      step: "STEP 8",
      title: "Packing & Dispatch",
      description: "Export-standard packing and safe delivery to customers worldwide."
    }
  ];

  return (
    <section id="infrastructure" className="relative pt-28 pb-16 bg-white overflow-hidden text-brand-navy">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-[1536px] 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative z-10">

        {/* 1. HERO / FACILITY OVERVIEW */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Engineering Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
            Precision Driven <span className="text-brand-gold">Infrastructure</span>
          </h1>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 max-w-3xl mx-auto">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 bg-slate-50 border border-slate-200/90 shadow-xs hover:border-brand-gold/50 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-sora font-black text-brand-navy tracking-tight group-hover:text-brand-gold transition-colors">
                  {s.value}
                </span>
                <span className="text-xs font-sans font-semibold text-brand-navy/60 mt-1 uppercase tracking-wider">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Facility Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 sm:p-10 bg-slate-50/70 border border-slate-200 text-left shadow-xs hover:border-brand-gold/40 transition-all duration-300 mt-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sora font-extrabold text-brand-navy mb-3 tracking-tight">
              1,00,000 Sq Ft of <span className="text-brand-gold">Engineering Excellence</span>
            </h2>
            <p className="text-brand-navy/75 text-sm sm:text-base leading-relaxed font-sans font-medium">
              Gishnu Gears operates from a 1,00,000 sq ft manufacturing facility spread across three production units in Coimbatore and Erode, Tamil Nadu. The facility includes dedicated departments for Design and Development, CNC Machining, Quality Testing, Assembly, and Delivery and Dispatch.
            </p>
          </motion.div>
        </div>


        {/* 2. STATE-OF-THE-ART MANUFACTURING MACHINES (12 Machine Cards Grid) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-2">
              CNC and Precision Machines
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sora font-extrabold text-brand-navy tracking-tight">
              State-of-the-Art <span className="text-brand-gold">Manufacturing Machines</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {machines.map((machine, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 bg-white border border-slate-200 shadow-xs hover:border-brand-gold/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group overflow-hidden"
              >
                {/* Machine Image Frame with Clean Background */}
                <div className="w-full h-52 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 mb-4 overflow-hidden relative shadow-inner">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay tag */}
                  <span className="absolute bottom-2 left-3 text-[9px] font-mono font-bold uppercase tracking-wider bg-brand-navy/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                    Plant Equipment
                  </span>
                </div>

                {/* Machine Name and Category */}
                <div>
                  <h3 className="text-base sm:text-lg font-sora font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                    {machine.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-brand-navy/55 block mt-1 uppercase tracking-wide">
                    {machine.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 3. CERTIFIED QUALITY EXCELLENCE (3 Photo Cards) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-2">
              Global Trust & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sora font-extrabold text-brand-navy tracking-tight">
              Certified Quality <span className="text-brand-gold">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {qualityCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:border-brand-gold/60 hover:shadow-xl transition-all duration-300 flex flex-col text-left group"
              >
                {/* Photo Header */}
                <div className="w-full h-56 bg-slate-50 border-b border-slate-100 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-white uppercase tracking-wider bg-brand-navy/80 px-2.5 py-1 rounded backdrop-blur-xs">
                    {card.title}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-sora font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-200 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-brand-navy/70 text-xs sm:text-sm font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transparency Callout Note */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto shadow-xs">
            <p className="text-brand-navy/75 text-xs sm:text-sm font-sans font-medium">
              Gishnu Gears is committed to transparency. Detailed certification documents and audit reports are available for qualified partners upon request.
            </p>
          </div>
        </div>


        {/* 4. ISO 9001:2015 QUALITY STANDARDS (8 Steps Process) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-2">
              Quality Assurance Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sora font-extrabold text-brand-navy tracking-tight mb-3">
              ISO 9001:2015 <span className="text-brand-gold">Quality Standards</span>
            </h2>
            <p className="text-brand-navy/65 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto">
              Every gearbox manufactured at Gishnu Gears passes through a rigorous multi-stage quality inspection process from raw material verification to final testing before shipment.
            </p>
          </div>

          {/* 8 Process Step Cards in Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                className="glass-card rounded-2xl p-6 bg-slate-50/70 border border-slate-200 shadow-xs hover:border-brand-gold/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-extrabold text-brand-gold bg-brand-gold/15 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                  </div>
                  <h3 className="text-base font-sora font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-navy/70 text-xs font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 5. CTA SECTION: "Have a Custom Gearbox Requirement? [Get a Quote]" (EXACT ENDPOINT) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-brand-navy via-[#142646] to-brand-navy text-white p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-800 text-center relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-extrabold text-white tracking-tight mb-6">
              Have a Custom Gearbox <span className="text-brand-gold">Requirement?</span>
            </h2>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gold hover:bg-white text-brand-navy font-sora font-extrabold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* Interactive Quotation Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialCategory="Customized Gearboxes"
        initialProduct="Custom Gearbox Requirement"
        initialSpecs={[
          "High Mechanical Capability",
          "Customizable Gear Ratios",
          "Custom Mounting Configurations"
        ]}
      />
    </section>
  );
}
