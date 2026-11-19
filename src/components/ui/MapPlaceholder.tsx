"use client";

import React, { useState } from "react";

interface LocationData {
  id: string;
  label: string;
  name: string;
  address: string;
  /** Google rating as shown on the listing. */
  rating: string;
  landmark?: string;
  /** Coordinates of the business's Google Maps listing (used to place the pin). */
  lat: number;
  lng: number;
  /** The business's Google Maps listing page. */
  mapsUrl: string;
}

const locations: LocationData[] = [
  {
    id: "gishnu",
    label: "Gishnu Gears HQ",
    name: "Gishnu Gears (P) Ltd",
    address: "Door No.3, S.F.NO.796, Avinashi Rd, Neelambur, Coimbatore, Tamil Nadu 641062",
    landmark: "Near Hotel Le Meridien, Cexus Nagar",
    rating: "4.3",
    lat: 11.0593088,
    lng: 77.079366,
    mapsUrl:
      "https://www.google.com/maps/place/Gishnu+Gears+(P)+Ltd/@11.0593088,77.0767911,17z/data=!4m7!3m6!1s0x3ba857dddc0e2ea1:0x346c356b8f0802d5!4b1!8m2!3d11.0593088!4d77.079366!16s%2Fg%2F11b5wnl1gq?entry=ttu&g_ep=EgoyMDI2MTExNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "mmgears",
    label: "MM Gears",
    name: "MM Gears (P) Ltd",
    address: "Avinashi Road, Cexus Nagar, Neelambur, Coimbatore, Tamil Nadu 641062",
    landmark: "Opp. to Decathlon Sports, Cexus Nagar",
    rating: "3.7",
    lat: 11.0589047,
    lng: 77.0793557,
    mapsUrl:
      "https://www.google.com/maps/place/MM+Gears+(P)+Ltd/@11.0589047,77.0744848,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8ff52ae39da15:0x45835da040907618!8m2!3d11.0589047!4d77.0793557!16s%2Fg%2F11c5fyykz2?entry=ttu&g_ep=EgoyMDI2MTExNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

/**
 * The iframe extends this many px above the visible area. Google draws its place card
 * ("Open in Maps" / "Place info couldn't load") in the top-left corner, so this keeps it
 * permanently out of view while the logo, terms and zoom controls at the bottom stay visible.
 */
const HIDDEN_TOP = 220;

/** Keyless Google Maps embed (no API key), pinned by coordinates — text search doesn't resolve the Gishnu listing reliably. */
const embedUrl = (loc: LocationData) => `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=18&output=embed`;

export default function MapPlaceholder({ className = "h-100" }: { className?: string }) {
  const [activeLoc, setActiveLoc] = useState<LocationData>(locations[0]);
  // Static until clicked: keeps our name tag aligned with Google's pin and stops the map hijacking page scroll.
  const [interactive, setInteractive] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  const selectLocation = (loc: LocationData) => {
    setActiveLoc(loc);
    setInteractive(false);
  };

  const resetMap = () => {
    setInteractive(false);
    setMapKey((k) => k + 1);
  };

  return (
    <div className={`relative glass-card w-full rounded-xl overflow-hidden flex flex-col bg-slate-100 border border-slate-200 shadow-sm ${className}`}>
      {/* Google Map (pin sits at the iframe centre = (visible height - HIDDEN_TOP) / 2) */}
      <iframe
        key={`${activeLoc.id}-${mapKey}`}
        src={embedUrl(activeLoc)}
        title={`Google Map showing ${activeLoc.name}`}
        className="absolute left-0 w-full border-0 z-0"
        style={{ top: -HIDDEN_TOP, height: `calc(100% + ${HIDDEN_TOP}px)` }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {!interactive && (
        <>
          {/* Name tag next to the pin */}
          <div
            className="absolute z-10 pointer-events-none"
            style={{ left: "calc(50% + 16px)", top: `calc(50% - ${HIDDEN_TOP / 2}px - 22px)` }}
          >
            <span className="block -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-xs font-extrabold text-brand-navy shadow-md border border-slate-200">
              {activeLoc.name}
            </span>
          </div>

          {/* Click-to-interact layer */}
          <button
            type="button"
            onClick={() => setInteractive(true)}
            className="absolute inset-0 z-5 cursor-pointer bg-transparent group"
            aria-label="Click to explore the map"
          >
            <span className="absolute top-3 right-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy/70 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
              Click to explore map
            </span>
          </button>
        </>
      )}

      {/* Location card */}
      <div className="absolute bottom-7 left-3 right-3 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200/60 max-w-85 text-left mx-auto sm:mx-0">
        <div className="flex bg-slate-100 p-1 rounded-lg mb-3" role="tablist">
          {locations.map((loc) => (
            <button
              key={loc.id}
              role="tab"
              aria-selected={activeLoc.id === loc.id}
              onClick={() => selectLocation(loc)}
              className={`flex-1 px-2 py-1.5 rounded-md text-[10px] font-sora font-extrabold transition-all duration-200 cursor-pointer ${
                activeLoc.id === loc.id ? "bg-brand-gold text-white shadow-sm" : "text-brand-navy/70 hover:text-brand-gold"
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>

        <h4 className="text-brand-navy text-sm font-extrabold font-sora leading-tight">{activeLoc.name}</h4>

        <p className="text-[11px] text-brand-navy/70 leading-relaxed mt-2 font-sans font-medium">{activeLoc.address}</p>

        {activeLoc.landmark && (
          <p className="text-[10px] text-brand-navy/55 leading-snug mt-1.5 font-sans font-semibold italic">
            * {activeLoc.landmark}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between gap-3">
          <a
            href={activeLoc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-wider text-brand-gold hover:text-brand-navy transition-colors"
          >
            Open in Google Maps →
          </a>
          {interactive && (
            <button
              type="button"
              onClick={resetMap}
              className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/60 hover:text-brand-gold transition-colors cursor-pointer"
            >
              Reset map
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
