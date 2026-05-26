"use client";

import React from "react";
import Card from "../ui/Card";
import { CheckCircle2, ShieldCheck, Compass, Settings } from "lucide-react";

interface Certificate {
  id: number;
  code: string;
  name: string;
  authority: string;
  validity: string;
  badge: React.ReactNode;
}

export default function Certifications() {
  const certifications: Certificate[] = [
    {
      id: 1,
      code: "ISO 9001:2015",
      name: "Quality Management Systems",
      authority: "TUV SUD Certification",
      validity: "Active Compliance Matrix",
      badge: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
    },
    {
      id: 2,
      code: "AS9100 Rev D",
      name: "Aerospace Quality Standards",
      authority: "Joint Aviation Accreditation",
      validity: "Defence Grade Approved",
      badge: <Compass className="w-8 h-8 text-brand-orange" />,
    },
    {
      id: 3,
      code: "IRIS Standard",
      name: "International Railway Compliance",
      authority: "UNIFE Locomotive QA",
      validity: "Metro System Certification",
      badge: <Settings className="w-8 h-8 text-brand-orange" />,
    },
  ];

  return (
    <section id="certifications" className="relative py-20 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
            Certifications & <span className="text-brand-orange">Compliance</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Every gearbox engineered at Gishnu Gears is subjected to stringent international manufacturing standards.
          </p>
        </div>

        {/* Certs Grid - Streamlined, Descriptions removed for high-impact visual representation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <Card
              key={cert.id}
              delay={idx * 0.05}
              className="flex flex-col justify-between items-start text-left bg-white border border-slate-200 h-[210px] hover:border-brand-orange/20 shadow-sm relative group overflow-hidden"
            >
              {/* Highlight top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex justify-between items-start w-full">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-brand-orange flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {cert.badge}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-mono text-brand-navy/40 uppercase tracking-wider block font-bold">
                    {cert.authority}
                  </span>
                  <h3 className="text-lg sm:text-xl font-sora font-extrabold text-brand-navy tracking-tight mt-0.5 group-hover:text-brand-orange transition-colors">
                    {cert.code}
                  </h3>
                  <h4 className="text-brand-navy/70 text-xs font-semibold mt-0.5 font-sans">
                    {cert.name}
                  </h4>
                </div>
              </div>

              {/* Card Footer */}
              <div className="w-full flex items-center gap-2 pt-3 border-t border-slate-100 mt-auto text-[9px] font-mono text-brand-navy/40 font-bold relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                <span>{cert.validity}</span>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
