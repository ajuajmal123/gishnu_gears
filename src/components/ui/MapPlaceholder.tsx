"use client";

import React from "react";
import { Globe, Cpu } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <div className="relative glass-card w-full h-[400px] rounded-xl overflow-hidden flex flex-col justify-between bg-white border border-slate-200 shadow-sm">
      {/* Corporate Label */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-brand-navy/60 text-xs font-semibold tracking-wider">
        <span>Gishnu Gears Manufacturing HQ</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 text-brand-navy/40 text-[10px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span>SYS STATUS: OPERATIONAL</span>
      </div>

      {/* Simple Global Map SVG Vector Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg viewBox="0 0 800 400" className="w-full h-full opacity-[0.06]" fill="none">
          <path
            d="M 100 150 Q 150 120 200 160 T 300 140 T 400 160 T 500 120 T 600 180 T 700 150 M 120 250 Q 220 220 320 260 T 520 220 T 680 250"
            stroke="rgba(13,27,42,0.5)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Primary Headquarters Node */}
      <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        {/* Simple static indicator */}
        <div className="w-4.5 h-4.5 rounded-full bg-brand-orange border-4 border-white shadow-md" />
        
        {/* Simple Label Card */}
        <div className="mt-3 bg-white px-4 py-2.5 rounded-lg text-left shadow-md border border-slate-100 max-w-[220px]">
          <p className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider">Manufacturing HQ</p>
          <h4 className="text-brand-navy text-xs font-bold font-sora mt-0.5">Gishnu Gears India</h4>
          <p className="text-[9px] text-brand-navy/60 leading-tight mt-1 font-sans">1,00,000 Sq Ft Facility, Coimbatore, Tamil Nadu</p>
        </div>
      </div>
      
      {/* Lower Coordinates Bar */}
      <div className="relative z-10 w-full bg-slate-50 border-t border-slate-100 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-navy/50" />
            <div className="text-left">
              <span className="text-[8px] text-brand-navy/50 font-mono block">COORDINATES</span>
              <span className="text-[10px] text-brand-navy font-mono font-bold tracking-wider">11.0168° N, 76.9558° E</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-brand-navy/50" />
            <div className="text-left">
              <span className="text-[8px] text-brand-navy/50 font-mono block">MANUFACTURING AREA</span>
              <span className="text-[10px] text-brand-navy font-mono font-bold tracking-wider">1,00,000 SQ. FT.</span>
            </div>
          </div>
        </div>
        <div className="text-[9px] font-mono text-brand-navy/40 tracking-widest text-right uppercase font-bold">
          SECURE IP LINK // COIMBATORE SECTOR
        </div>
      </div>
    </div>
  );
}
