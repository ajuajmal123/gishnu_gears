"use client";

import React from "react";
import { Settings, ShieldCheck, Compass, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../ui/Card";

interface DeptHead {
  id: number;
  name: string;
  dept: string;
  role: string;
  linkedin: string;
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
      dept: "Engineering Design",
      role: "Head of Design",
      linkedin: "#",
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
      metric: "0.001mm",
      metricLabel: "Tooth Tolerance",
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
      image: "/member_ramesh.png",
    },
  ];

  return (
    <section id="team" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            Our <span className="text-brand-orange">Engineering Team</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Technical department leaders driving absolute manufacturing quality at Coimbatore & Erode.
          </p>
        </div>

        {/* Pictorial Employee Grid - Redesigned Split Card Layout for 100% Readability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {heads.map((head) => (
            <Card
              key={head.id}
              className="!p-0 overflow-hidden flex flex-col justify-between items-stretch text-left bg-white border border-slate-200 shadow-sm hover:border-brand-orange/20 h-[390px] group transition-all duration-300"
            >
              <div className="flex flex-col h-full justify-between">
                
                {/* 1. Fully-visible, pristine photo compartment on top (h-[240px]) */}
                <div className="w-full h-[240px] relative overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img
                    src={head.image}
                    alt={head.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Floating Department Icon Badge */}
                  <div className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-white/95 border border-slate-100/50 text-brand-orange flex items-center justify-center shadow-md backdrop-blur-sm group-hover:scale-105 transition-transform z-10">
                    {head.icon}
                  </div>
                </div>

                {/* 2. Pristine text details compartment at the bottom (h-[150px]) on solid white */}
                <div className="p-5 flex flex-col justify-between flex-grow bg-white text-left">
                  <div>
                    <span className="text-[9px] font-mono text-brand-orange uppercase tracking-widest block font-bold mb-0.5">
                      {head.dept}
                    </span>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <h4 className="text-base font-sora font-extrabold text-brand-navy tracking-tight leading-tight flex-grow">
                        {head.name}
                      </h4>
                      <a
                        href={head.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1 bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white rounded px-2 py-0.5 text-[9px] font-sans font-bold transition-all duration-200 shadow-sm"
                        title={`Connect with ${head.name} on LinkedIn`}
                      >
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>Connect</span>
                      </a>
                    </div>
                    <p className="text-brand-navy/60 font-mono text-[9px] uppercase tracking-wider font-bold mt-1">
                      {head.role}
                    </p>
                  </div>

                  {/* High impact metric indicator pill */}
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 mt-2">
                    <div className="flex items-center gap-1.5 text-brand-navy/55 text-[8px] font-mono uppercase font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{head.metricLabel}</span>
                    </div>
                    <span className="text-xs font-sora font-extrabold text-brand-orange">
                      {head.metric}
                    </span>
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
