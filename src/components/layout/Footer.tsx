"use client";

import React from "react";
import Logo from "../ui/Logo";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onBackToPortal: () => void;
}

export default function Footer({ onBackToPortal }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Products Showcase", href: "#products" },
    { name: "About Gishnu", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Quality Standards", href: "#certifications" },
    { name: "Contact & Support", href: "#contact" },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden text-brand-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Info */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-start gap-4 text-left">
            <Logo className="h-12 sm:h-14" showSubtitle={false} />
            <span className="text-[10px] font-sans font-bold tracking-[0.55em] text-brand-navy/80 uppercase pl-3 mt-1 block">
              Transforming Innovation
            </span>
            <p className="text-brand-navy/60 text-sm max-w-sm mt-4 leading-relaxed font-sans font-medium">
              Founded in 1995, Gishnu Gears is an ISO 9001:2015 certified custom gearbox manufacturer in India, supplying high-precision mechanical transmission systems to industrial, automotive, railway, and aquaculture sectors.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-brand-orange flex items-center justify-center text-brand-navy/60 hover:text-brand-orange transition-all duration-200 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-brand-orange flex items-center justify-center text-brand-navy/60 hover:text-brand-orange transition-all duration-200 shadow-sm"
                aria-label="Twitter Profile"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-brand-orange flex items-center justify-center text-brand-navy/60 hover:text-brand-orange transition-all duration-200 shadow-sm"
                aria-label="YouTube Channel"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.186-.484-8.55-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-3 text-left">
            <h4 className="text-brand-navy font-sora font-semibold text-xs uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-brand-navy/60 hover:text-brand-orange text-sm transition-colors duration-200 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Series */}
          <div className="col-span-6 md:col-span-4 text-left">
            <h4 className="text-brand-navy font-sora font-semibold text-xs uppercase tracking-widest mb-6">
              Machinery Series
            </h4>
            <ul className="space-y-4 text-brand-navy/60 text-sm font-sans font-medium">
              <li>
                A SERIES: AQUACULTURE TRANSMISSIONS
              </li>
              <li>
                B SERIES: BEVEL STEERING DRIVES
              </li>
              <li>
                C SERIES: CUSTOM HELICAL GEARBOXES
              </li>
              <li>
                DEFENCE & SPACE PRECISION GEARSET
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs text-brand-navy/55 font-sans font-semibold">
            <span>© {new Date().getFullYear()} GISHNU GEARS PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>
            <a href="#" className="hover:text-brand-orange transition-colors duration-200">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors duration-200">
              TERMS OF USE
            </a>
            <button
              onClick={onBackToPortal}
              className="hover:text-brand-orange text-brand-orange/60 font-bold transition-colors duration-200 uppercase cursor-pointer"
            >
              Portal Selection
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-brand-orange flex items-center justify-center text-brand-navy/50 hover:text-brand-orange transition-all duration-200 shadow-sm cursor-pointer group"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
