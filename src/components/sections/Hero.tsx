"use client";

import React from "react";
import Button from "../ui/Button";
import { Globe, Award, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          
          {/* Engineering Indicator badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-brand-navy font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>Precision Gearbox Manufacturing</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-extrabold tracking-tight text-brand-navy leading-[1.1] max-w-4xl">
            Engineering Motion <br />
            <span className="gradient-text-orange font-black">With Precision</span>
          </h1>

          {/* Description - Wix exact copy */}
          <p className="text-brand-navy/70 text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-sans font-medium">
            Custom-engineered gearboxes for industrial, automotive, and aquaculture sectors — serving India and global markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button
              variant="primary"
              showIcon
              onClick={() => {
                const el = document.querySelector("#products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Gearbox Series
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Inquire Now
            </Button>
          </div>

          {/* Core B2B statistics indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 mt-10 pt-8 border-t border-slate-100 w-full text-brand-navy/60 text-xs font-semibold tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-brand-orange" />
              <span>30+ Years of Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4.5 h-4.5 text-brand-orange" />
              <span>Exports to 20+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4.5 h-4.5 text-brand-orange" />
              <span>China Plus One Advantage</span>
            </div>
          </div>
        </div>

        {/* Right Graphic Column - Highly Simplified & Clean B2B Graphic */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
            {/* Simple Elegant Vector Gear Assembly */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-navy" fill="none">
              <circle cx="50" cy="50" r="32" stroke="#e2e8f0" strokeWidth="4" />
              <circle cx="50" cy="50" r="20" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="8" fill="#cbd5e1" />
              
              {/* Clean vector gear teeth */}
              {Array.from({ length: 8 }).map((_, idx) => {
                const angle = idx * 45;
                return (
                  <path
                    key={idx}
                    d="M 50 10 L 46 18 L 54 18 Z"
                    fill="#e8520a"
                    transform={`rotate(${angle} 50 50)`}
                  />
                );
              })}
            </svg>

            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-brand-navy/35 select-none font-bold">
              GISHNU GEARS // UNIT.01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
