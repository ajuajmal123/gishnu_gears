"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import Card from "../ui/Card";

interface FeatureItem {
  title: string;
  description: string;
}

export default function About() {
  const features: FeatureItem[] = [
    {
      title: "Over 30 Years Experience",
      description: "Decades of proven heavy engineering excellence dating back to our 1995 foundation.",
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Audited quality management parameters regulating all casting, machining, and assembly phases.",
    },
    {
      title: "1,00,000 Sq Ft Infrastructure",
      description: "Operating across multiple high-capacity manufacturing units in Coimbatore & Erode.",
    },
    {
      title: "Strong Global Export Presence",
      description: "Regular dispatch routes serving clients in USA, Germany, Netherlands, Singapore, Malaysia, and Iraq.",
    },
    {
      title: "China Plus One Advantage",
      description: "Providing international supply networks with optimized risk diversification and cost efficiency.",
    },
    {
      title: "Advanced CNC tooth Grinding",
      description: "Hardened and ground gear teeth configurations ensuring low noise indices and peak load tolerances.",
    },
    {
      title: "Custom Engineering Support",
      description: "Full CAD modeling, transmission ratio adjustments, and diagnostic analytics directly from our engineering desk.",
    },
    {
      title: "Recognized B2B Supplier",
      description: "Approved and audited OEM manufacturer for leading global automotive and heavy machinery brands.",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-brand-navy font-semibold tracking-wider uppercase shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>Corporate Profile</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            About <span className="text-brand-orange">Gishnu Gears</span>
          </h2>
          <p className="text-brand-orange font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
            Delivering precision gearbox solutions since 1995
          </p>
        </div>

        {/* 1. Narrative & CAD Image Column */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight">
              Engineering the Future of Industrial Power Transmission
            </h3>
            <p className="text-brand-navy/75 text-sm sm:text-base leading-relaxed font-sans font-medium">
              Gishnu Gears Private Limited is a leading gearbox manufacturer based in **Coimbatore & Erode, Tamil Nadu**, specializing in custom-built gear solutions for industrial, automotive, textile, Defence, mobility, wastewater treatment, aquaculture, and heavy engineering applications. Originally founded in 1995 as M.M Gears Pvt Ltd, we evolved into Gishnu Gears in 2011 with a stronger focus on precision gear engineering and custom power transmission.
            </p>
            <p className="text-brand-navy/60 text-sm leading-relaxed font-sans">
              Today, Gishnu Gears manufactures all types of Gears and Gearboxes, including bevel gears, helical gearboxes, planetary gear systems, worm gearboxes, and specialized power transmission units for both domestic and international markets. The company is ISO 9001:2015 certified and uses advanced CNC technology and precision machining to ensure high performance, absolute durability, and engineering precision.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md p-4 aspect-[4/3] sm:aspect-square flex items-center justify-center group"
            >
              <img
                src="/gearbox_cad.png"
                alt="Gishnu Gears 3D CAD Engineering Cutaway schematic"
                className="w-full h-full object-contain filter saturate-100 group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              {/* Bottom tag */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-white text-left uppercase font-bold tracking-wider">
                // CAD teeth meshing simulation &mdash; 0.001mm accuracy
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Vision */}
          <Card className="bg-slate-50 border border-slate-200 p-8 sm:p-10 flex flex-col items-start gap-4 text-left shadow-sm hover:border-brand-orange/20">
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-brand-orange shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-sora font-extrabold text-brand-navy tracking-tight mt-2">
              Our Vision
            </h4>
            <p className="text-brand-navy/70 text-sm leading-relaxed font-sans font-medium">
              To become a globally trusted gearbox manufacturing brand known for precision, innovation, and quality.
            </p>
          </Card>

          {/* Mission */}
          <Card className="bg-slate-50 border border-slate-200 p-8 sm:p-10 flex flex-col items-start gap-4 text-left shadow-sm hover:border-brand-orange/20">
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-brand-orange shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-sora font-extrabold text-brand-navy tracking-tight mt-2">
              Our Mission
            </h4>
            <p className="text-brand-navy/70 text-sm leading-relaxed font-sans font-medium">
              To deliver durable, high-performance gear solutions with advanced engineering, reliable service, and customer-focused manufacturing.
            </p>
          </Card>
        </div>

        {/* 3. Why Gishnu Gears Grid */}
        <div className="w-full text-left">
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-brand-navy mb-3">
              Why Gishnu Gears
            </h3>
            <p className="text-brand-navy/60 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl font-medium">
              We leverage decades of engineering competence, state-of-the-art infrastructure, and strong global B2B networks to serve as a reliable gear manufacturing partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 bg-white border border-slate-200 shadow-sm flex flex-col justify-between text-left h-[180px] hover:border-brand-orange/20 hover:shadow-md transition-all duration-200"
              >
                <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-brand-orange self-start shadow-sm mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-sora font-extrabold text-brand-navy line-clamp-1">
                    {feat.title}
                  </h5>
                  <p className="text-brand-navy/65 text-xs font-sans mt-1.5 leading-snug font-medium line-clamp-3">
                    {feat.description}
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
