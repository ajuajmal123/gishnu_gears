"use client";

import React from "react";
import { Settings, ShieldCheck, Compass, ChevronRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../ui/Card";

interface DeptHead {
  id: number;
  name: string;
  dept: string;
  role: string;
  linkedin: string;
  biography: string;
  coreTech: string[];
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
  image: string;
}

export default function Team() {
  const heads: DeptHead[] = [
    {
      id: 1,
      name: "Er. Vikram Sen",
      dept: "Engineering & R&D",
      role: "Head of Transmission Design",
      linkedin: "#",
      biography: "Vikram holds an M.Tech in Machine Design. He leads our design desk using advanced FEA contact stress simulations to guarantee zero failure limits.",
      coreTech: ["Siemens NX", "ANSYS FEA", "KISSsoft"],
      metric: "99.8%",
      metricLabel: "Design Accuracy",
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
      image: "/member_vikram.png",
    },
    {
      id: 2,
      name: "Er. Sarah Mathews",
      dept: "Quality Assurance",
      role: "Chief of CMM Metrology",
      linkedin: "#",
      biography: "Sarah directs our ISO-compliant cleanrooms, optical coordinate-measuring scanners, and non-destructive metallurgical audits.",
      coreTech: ["Zeiss CMM", "Ultrasonic QA", "AS9100 D"],
      metric: "< 0.05%",
      metricLabel: "Return Index",
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
      image: "/member_sarah.png",
    },
    {
      id: 3,
      name: "Marcus Aurelius",
      dept: "Global Operations",
      role: "Director of International Supply",
      linkedin: "#",
      biography: "Marcus supervises end-to-end global logistics, maritime export compliance, and dispatch lanes across 12 distribution nodes.",
      coreTech: ["SAP S/4HANA", "Logistics Matrix", "Export compliance"],
      metric: "98.4%",
      metricLabel: "On-Time Dispatch",
      icon: <Compass className="w-5 h-5 text-brand-orange" />,
      image: "/member_marcus.png",
    },
    {
      id: 4,
      name: "Er. Ramesh Patel",
      dept: "Precision Tooling",
      role: "Superintendent of CNC Grinding",
      linkedin: "#",
      biography: "Ramesh manages precision tooth profile grinding, heat treatment lines, and gas nitriding to achieve micron-level clearances.",
      coreTech: ["Reishauer Grinding", "Studer Grinders", "ISO Grade 4"],
      metric: "0.001mm",
      metricLabel: "Tooth Tolerance",
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
      image: "/member_ramesh.png",
    },
  ];

  return (
    <section id="team" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-brand-navy font-semibold tracking-wider uppercase shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>Industrial Expertise</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
            Our <span className="text-brand-orange">Engineering Team</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Meet the technical department heads in charge of our Coimbatore & Erode manufacturing units. All profile details are integrated directly into each department lead's card.
          </p>
        </div>

        {/* Unified Employee Grid (No extra detail card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {heads.map((head) => (
            <Card
              key={head.id}
              className="!p-0 overflow-hidden flex flex-col justify-between items-stretch text-left bg-white border border-slate-200 shadow-sm hover:border-brand-orange/20"
            >
              <div className="flex flex-col h-full justify-between">
                {/* Cover Photo */}
                <div className="w-full h-52 relative overflow-hidden bg-slate-50 border-b border-slate-100 group">
                  <img
                    src={head.image}
                    alt={head.name}
                    className="w-full h-full object-cover object-center filter saturate-100 hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent" />
                  
                  {/* Floating Department Icon Badge */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-white/95 border border-slate-100 text-brand-orange flex items-center justify-center shadow-md backdrop-blur-sm">
                    {head.icon}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[9px] font-mono text-brand-orange uppercase tracking-widest block font-bold mb-0.5 drop-shadow-sm">
                      {head.dept}
                    </span>
                    <h4 className="text-base font-sora font-extrabold text-white tracking-tight drop-shadow-sm">
                      {head.name}
                    </h4>
                    <p className="text-slate-300 font-mono text-[9px] uppercase tracking-wider font-bold mt-0.5 drop-shadow-sm">
                      {head.role}
                    </p>
                  </div>
                </div>

                {/* Padded Content Body */}
                <div className="p-5 flex flex-col gap-4 justify-between flex-grow">
                  <p className="text-brand-navy/60 text-xs leading-relaxed font-sans min-h-[72px]">
                    {head.biography}
                  </p>

                  {/* Technologies list inside the card */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-mono text-brand-navy/40 uppercase tracking-widest font-bold block mb-2">
                      Competency Stack
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {head.coreTech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-0.5 px-2 py-1 rounded bg-slate-50 border border-slate-100 text-[10px] text-brand-navy/70 font-semibold font-sans"
                        >
                          <ChevronRight className="w-2.5 h-2.5 text-brand-orange" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metric & LinkedIn bottom integration */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                    {/* Metric */}
                    <div className="flex justify-between items-center bg-slate-50/50 border border-slate-100 rounded px-2.5 py-1.5 text-left">
                      <div className="flex items-center gap-1.5 text-brand-navy/60 text-[9px] font-mono uppercase font-bold">
                        <TrendingUp className="w-3 h-3 text-brand-orange" />
                        <span>{head.metricLabel}</span>
                      </div>
                      <span className="text-xs font-sora font-extrabold text-brand-navy">
                        {head.metric}
                      </span>
                    </div>

                    {/* LinkedIn Button */}
                    <motion.a
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      href={head.linkedin}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-[10px] tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>Connect LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 3. Widescreen Employee Group Photo Section */}
        <div className="text-left mb-8">
          <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy mb-2">
            Collective <span className="text-brand-orange">Workforce Assembly</span>
          </h3>
          <p className="text-brand-navy/60 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl font-medium">
            Over 250+ dedicated specialists including gear cutters, metallurgists, CNC technicians, and compliance inspectors working in absolute alignment at our Coimbatore & Erode HQ plants.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md group w-full aspect-[21/9] sm:aspect-[2.4/1]"
        >
          {/* Real Generated Corporate Team Photo Image */}
          <img
            src="/team_group.png"
            alt="Gishnu Gears Manufacturing Assembly Team"
            className="w-full h-full object-cover object-center filter saturate-95 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />

          {/* Clean Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          {/* Bottom Title bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div>
              <span className="text-[9px] font-mono text-brand-orange tracking-widest uppercase font-bold px-2 py-1 rounded bg-black/40 border border-white/10 backdrop-blur-sm">
                Active OperationsHQ Assembly
              </span>
              <h4 className="text-lg sm:text-2xl font-sora font-extrabold text-white mt-2 drop-shadow-sm">
                Engineering Plant workforce, Coimbatore Tamil Nadu
              </h4>
            </div>
            <div className="text-white/80 font-mono text-[10px] tracking-wider uppercase font-bold sm:text-right">
              // COIMBATORE STRENGTH &mdash; 250+ SPECIALISTS
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
