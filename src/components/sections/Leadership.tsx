"use client";

import React from "react";
import Card from "../ui/Card";
import { UserCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface LeaderItem {
  id: number;
  name: string;
  role: string;
  profile: string;
  achievement: string;
  linkedin: string;
  badgeIcon: React.ReactNode;
  image: string;
}

export default function Leadership() {
  const leaders: LeaderItem[] = [
    {
      id: 1,
      name: "Dr. Arvind Gishnu",
      role: "Managing Director",
      profile: "PhD in Mechanical Dynamics from IIT Madras. 25+ years spearheading heavy transmission manufacturing. Pioneered Gishnu's custom gearbox architectural layout.",
      achievement: "Awarded 'Industrial Engineering Icon of the Year' 2024",
      linkedin: "#",
      badgeIcon: <UserCheck className="w-4 h-4 text-brand-orange" />,
      image: "/leader_arvind.png",
    },
    {
      id: 2,
      name: "Rajesh K. Gishnu",
      role: "Chief Executive Officer",
      profile: "Alumnus of Stanford Business School & B.Tech Mechanical. Formulates global trade alliances, operations strategies, and railway-locomotive integration portfolios.",
      achievement: "Expanded Gishnu Gears to 12 international distribution nodes",
      linkedin: "#",
      badgeIcon: <Shield className="w-4 h-4 text-brand-orange" />,
      image: "/leader_rajesh.png",
    },
  ];

  return (
    <section id="leadership" className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
            Executive <span className="text-brand-orange">Leadership</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Guiding Gishnu Gears with technical supremacy, absolute engineering discipline, and a shared vision of transforming mechanical motion across international B2B sectors.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <Card
              key={leader.id}
              delay={idx * 0.1}
              className="!p-0 overflow-hidden flex flex-col justify-between items-stretch text-left bg-white border border-slate-200 shadow-sm"
            >
              <div className="flex flex-col h-full justify-between">
                {/* Cover Photo */}
                <div className="w-full h-56 sm:h-64 relative overflow-hidden bg-slate-50 border-b border-slate-100 group">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center filter saturate-100 hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-white tracking-tight drop-shadow-sm">
                      {leader.name}
                    </h3>
                    <p className="text-brand-orange font-mono text-xs uppercase tracking-widest mt-1 font-bold drop-shadow-sm">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Card body content with custom padding */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-6">
                  <p className="text-brand-navy/60 text-sm leading-relaxed text-left font-sans">
                    {leader.profile}
                  </p>

                  {/* Achievement Badge */}
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-slate-50 border border-slate-100 w-full text-left">
                    <span className="p-1 rounded bg-brand-orange/10 border border-brand-orange/20">
                      {leader.badgeIcon}
                    </span>
                    <span className="text-[11px] font-mono text-brand-navy/60 leading-snug font-bold">
                      {leader.achievement}
                    </span>
                  </div>

                  {/* Action Area */}
                  <div className="flex items-center justify-end pt-4 border-t border-slate-100 mt-2">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={leader.linkedin}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 hover:bg-brand-orange/10 border border-slate-200 hover:border-brand-orange/20 text-xs font-semibold text-brand-navy hover:text-brand-orange transition-all duration-200 font-mono shadow-sm cursor-pointer"
                      aria-label={`Connect with ${leader.name} on LinkedIn`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LINKEDIN</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
