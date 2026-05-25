"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

interface NavbarProps {
  onBackToPortal: () => void;
}

export default function Navbar({ onBackToPortal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: "Leadership", href: "#leadership" },
    { name: "Quality Standards", href: "#certifications" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={onBackToPortal}
          className="cursor-pointer group flex items-center gap-2"
          title="Return to Portal Selection"
        >
          <Logo className="h-10 sm:h-12" showSubtitle={false} />

        </div>

        {/* Desktop Links - Steel Navy */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-xs font-semibold text-brand-navy/80 hover:text-brand-orange tracking-widest transition-colors duration-200 uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-navy/80 hover:text-brand-navy p-2 outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-brand-navy/10 absolute top-full left-0 right-0 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-5 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-sm font-bold text-brand-navy/80 hover:text-brand-orange uppercase tracking-wider pl-2"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-brand-navy/5 my-2" />


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
