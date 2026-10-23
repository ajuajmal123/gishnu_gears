"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

interface NavbarProps {
  onBackToPortal: () => void;
}

export default function Navbar({ onBackToPortal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (pathname === "/products") {
      if (href === "#products") {
        router.push("/?portal=true");
      } else {
        router.push("/?portal=false" + href);
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        onBackToPortal();
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3 sm:py-4 shadow-sm" : "glass-nav sm:bg-transparent py-3 sm:py-5"
        }`}
    >
      <div className="max-w-[1536px] 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={onBackToPortal}
          className="cursor-pointer group flex items-center gap-2"
          title="Return to Portal Selection"
        >
          <Logo className="h-12 sm:h-14 md:h-16" showSubtitle={false} />
        </div>

        {/* Desktop Links - Steel Navy */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-xs font-semibold text-brand-navy/80 hover:text-brand-gold tracking-widest transition-colors duration-200 uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>


        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-navy/80 hover:text-brand-gold p-2.5 rounded-lg border border-slate-100 hover:border-slate-200 bg-white shadow-sm transition-all duration-200 outline-none cursor-pointer flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Premium Floating Rounded B2B Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
          >
            <div className="px-6 py-6 flex flex-col gap-4 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-sm font-bold text-brand-navy/80 hover:text-brand-gold uppercase tracking-wider pl-2 py-1 transition-colors duration-150"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
