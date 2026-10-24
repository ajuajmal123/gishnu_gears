"use client";

import React from "react";
import Logo from "../ui/Logo";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface FooterProps {
  onBackToPortal?: () => void;
  activePortal?: "portal" | "gearboxes";
  onEnterGearboxes?: () => void;
}

export default function Footer({ onBackToPortal, activePortal, onEnterGearboxes }: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();

  const productLinks = [
    { name: "Standard Gearboxes", href: "/products?category=standard" },
    { name: "Customized Gearboxes", href: "/products?category=custom" },
    { name: "Gears and Components", href: "/products?category=components" },
    { name: "Maintenance & Overhaul Services", href: "/products?category=custom" },
    { name: "Submit Technical RFQ", href: "#contact" },
  ];

  const navLinks = [
    { name: "Products Showcase", href: "#products" },
    { name: "About Gishnu", href: "#about" },
    { name: "Contact & Facilities", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("/products")) {
      router.push(href);
      return;
    }

    if (pathname === "/products") {
      router.push("/" + href);
    } else if (activePortal === "portal") {
      if (href === "#products") {
        if (onEnterGearboxes) {
          onEnterGearboxes();
        }
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        if (onBackToPortal) {
          onBackToPortal();
        }
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 border-t border-slate-200 pt-14 pb-8 overflow-hidden text-brand-navy w-full">
      <div className="max-w-[1536px] 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative z-10">

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 pb-12">

          {/* Column 1: Brand Info & Accreditations (lg:col-span-4) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-4 text-left">
            <Logo className="h-16 sm:h-20" showSubtitle={false} />
            <span className="text-[10px] font-sans font-bold tracking-[0.45em] text-brand-navy/80 uppercase mt-0.5 block">
              Transforming Innovation &bull; Since 1995
            </span>
            <p className="text-brand-navy/65 text-xs sm:text-sm mt-2 leading-relaxed font-sans font-medium">
              Gishnu Gears is an ISO 9001:2015 certified manufacturer of high-precision industrial transmissions, standard & customized gearboxes, and precision mechanical components in Coimbatore, India.
            </p>

            {/* Quality Accreditation Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-sora font-bold text-brand-navy mt-1">
              <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>ISO 9001:2015 Certified Plant</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.linkedin.com/company/gishnu-gears/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-gold flex items-center justify-center text-brand-navy/60 hover:text-brand-gold hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/gishnugears.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-gold flex items-center justify-center text-brand-navy/60 hover:text-brand-gold hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7lr-tXnGkyKBBSXh0EF0hg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-gold flex items-center justify-center text-brand-navy/60 hover:text-brand-gold hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.186-.484-8.55-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product Divisions (lg:col-span-3) */}
          <div className="col-span-1 lg:col-span-3 text-left">
            <h4 className="text-brand-navy font-sora font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-1.5">
              <span>Product Divisions</span>
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-brand-navy/70 hover:text-brand-gold text-xs sm:text-sm transition-colors duration-200 font-sans flex items-center gap-1.5 font-medium group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60 group-hover:translate-x-0.5 group-hover:text-brand-gold transition-all flex-shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (lg:col-span-2) */}
          <div className="col-span-1 lg:col-span-2 text-left">
            <h4 className="text-brand-navy font-sora font-bold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-brand-navy/70 hover:text-brand-gold text-xs sm:text-sm transition-colors duration-200 font-sans block w-fit font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact (lg:col-span-3) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-left flex flex-col gap-3">
            <h4 className="text-brand-navy font-sora font-bold text-xs uppercase tracking-widest mb-2">
              Coimbatore Facility
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-brand-navy/70 font-sans font-medium">
              <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>Gishnu Gears Private Limited<br />S.F.NO.796, Door No.3/217K, Avinashi road, Near Hotel Le Meridian, Neelambur,Coimbatore-641062 GSTIN/UIN: 33AAHCG6311Q1ZD</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-brand-navy/70 font-sans font-medium mt-1">
              <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span> +91-9943917774</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-brand-navy/70 font-sans font-medium">
              <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>marketing@gishnugears.in</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-brand-navy/70 font-sans font-medium">
              <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Mon &ndash; Sat: 8:30 AM &ndash; 6:00 PM IST</span>
            </div>
          </div>

        </div>

        {/* Separator and Bottom Bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-navy/60 font-sans font-medium">
          <div>
            &copy; {new Date().getFullYear()} GISHNU GEARS PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors duration-200 font-semibold">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-200 font-semibold">
              TERMS OF USE
            </a>
            <small className="copyright__content font-sans text-xs inline-flex items-center gap-1 font-normal">
              <span className="text-brand-navy/70 font-normal">Designed by </span>
              <a
                href="https://www.instagram.com/nashcreations.in"
                target="_blank"
                rel="noopener noreferrer"
                className="blinking-text"
              >
                Creations
              </a>
            </small>
            <style jsx global>{`
              @keyframes blinkColors {
                0%   { color: #ffd431; text-shadow: 0 0 8px rgba(255, 212, 49, 0.6); }
                20%  { color: #03ff75; text-shadow: 0 0 8px rgba(3, 255, 117, 0.6); }
                40%  { color: #cd76ea; text-shadow: 0 0 8px rgba(205, 118, 234, 0.6); }
                60%  { color: #ffb444; text-shadow: 0 0 8px rgba(255, 180, 68, 0.6); }
                80%  { color: #ff5e5e; text-shadow: 0 0 8px rgba(255, 94, 94, 0.6); }
                100% { color: #38dbff; text-shadow: 0 0 8px rgba(56, 219, 255, 0.6); }
              }

              .blinking-text {
                font-family: var(--font-sans), sans-serif;
                font-weight: 800 !important;
                font-size: 15px !important;
                animation: blinkColors 3s linear infinite !important;
                text-decoration: none !important;
                display: inline-block;
                letter-spacing: 0.02em;
              }
            `}</style>
          </div>
        </div>

      </div>
    </footer>
  );
}
