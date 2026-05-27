"use client";

import React, { useState } from "react";

interface LocationData {
  id: string;
  name: string;
  address: string;
  rating: string;
  reviews: string;
  landmark?: string;
  mapY: string; // vertical percentage position of the pin on mockup
  mapX: string; // horizontal percentage position of the pin on mockup
}

const locations: LocationData[] = [
  {
    id: "gishnu",
    name: "Gishnu Gears (P) Ltd",
    address: "Door No.3, S.F.NO.796, Avinashi Rd, Neelambur, Coimbatore, Tamil Nadu 641062",
    landmark: "Near Hotel Le Meridien, Cexus Nagar",
    rating: "4.4",
    reviews: "34",
    mapY: "48%",
    mapX: "48%"
  },
  {
    id: "mmgears",
    name: "M.M Gears Pvt Ltd",
    address: "1/285, Mudalipalayam Rd, PO, Velayutham Nagar, Arasur, Tamil Nadu 641407",
    landmark: "Coimbatore Industrial Sector",
    rating: "4.0",
    reviews: "12",
    mapY: "42%",
    mapX: "56%"
  }
];

export default function MapPlaceholder({ className = "h-[400px]" }: { className?: string }) {
  const [activeLoc, setActiveLoc] = useState<LocationData>(locations[0]);

  return (
    <div className={`relative glass-card w-full rounded-xl overflow-hidden flex flex-col bg-white border border-slate-200 shadow-sm ${className}`}>
      
      {/* Real Styled Coimbatore Map Image Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/coimbatore_map_route.png"
          alt="Coimbatore Region Highway Map"
          className="w-full h-full object-cover select-none"
        />
        {/* Subtle overlay for premium visual balance */}
        <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[0.5px]" />
      </div>

      {/* Sleek Switch for Locations */}
      <div className="absolute top-4 left-4 z-20 flex bg-white/95 backdrop-blur-sm p-1 rounded-lg border border-slate-200 shadow-sm max-w-[calc(100%-40px)]">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setActiveLoc(loc)}
            className={`px-3 py-1.5 rounded-md text-[10px] font-sora font-extrabold transition-all duration-200 cursor-pointer ${
              activeLoc.id === loc.id
                ? "bg-brand-orange text-white shadow-sm"
                : "text-brand-navy/70 hover:text-brand-orange"
            }`}
          >
            {loc.id === "gishnu" ? "Gishnu Gears HQ" : "M.M Gears Facility"}
          </button>
        ))}
      </div>

      {/* Location Pins */}
      {locations.map((loc) => {
        const isActive = activeLoc.id === loc.id;
        return (
          <div
            key={loc.id}
            onClick={() => setActiveLoc(loc)}
            style={{ top: loc.mapY, left: loc.mapX }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 cursor-pointer group"
          >
            {/* Animated Pin Ring */}
            <div className={`relative flex items-center justify-center transition-all duration-300 ${isActive ? "scale-110" : "hover:scale-105"}`}>
              {isActive && (
                <span className="absolute inline-flex h-7 w-7 rounded-full bg-brand-orange/30 animate-ping" />
              )}
              <div className={`w-4.5 h-4.5 rounded-full border-[3px] border-white shadow-md transition-all duration-300 ${
                isActive ? "bg-brand-orange" : "bg-brand-navy/40 group-hover:bg-brand-orange/60"
              }`} />
            </div>
          </div>
        );
      })}

      {/* Active Pin Detail Card Card Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200/60 max-w-[340px] text-left mx-auto sm:mx-0">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h4 className="text-brand-navy text-sm font-extrabold font-sora leading-tight">
              {activeLoc.name}
            </h4>
          </div>
          
          {/* Rating Badge */}
          <div className="flex items-center gap-1 bg-amber-500/5 border border-amber-500/20 px-2 py-0.5 rounded-lg text-amber-600 flex-shrink-0">
            <span className="text-[10px] font-bold font-sora">{activeLoc.rating}</span>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" stroke="none">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
            </svg>
            <span className="text-[9px] text-brand-navy/50 font-bold">({activeLoc.reviews})</span>
          </div>
        </div>

        <p className="text-[11px] text-brand-navy/70 leading-relaxed mt-2 font-sans font-medium">
          {activeLoc.address}
        </p>
        
        {activeLoc.landmark && (
          <p className="text-[10px] text-brand-navy/55 leading-snug mt-1.5 font-sans font-semibold italic">
            * {activeLoc.landmark}
          </p>
        )}
      </div>
      
    </div>
  );
}
