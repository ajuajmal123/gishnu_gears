"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Settings, Cpu, Shield, Train } from "lucide-react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export default function Products() {
  const router = useRouter();

  const categories: Category[] = [
    {
      id: "standard",
      title: "Standard Gearboxes",
      icon: <Settings className="w-5 h-5" />,
      description: "Helical, bevel, and worm transmission gearsets engineered for high durability.",
    },
    {
      id: "custom",
      title: "Custom Gearboxes",
      icon: <Cpu className="w-5 h-5" />,
      description: "Tailored multi-stage high-torque drives engineered for custom applications.",
    },
    {
      id: "railway",
      title: "Railway Gearboxes",
      icon: <Train className="w-5 h-5" />,
      description: "Locomotive rolling stock and high-speed metro axle-hung traction drives.",
    },
    {
      id: "defence",
      title: "Defence & Aerospace",
      icon: <Shield className="w-5 h-5" />,
      description: "Ultra-precise transmission components meeting stringent military standards.",
    },
  ];

  return (
    <section id="products" className="relative pt-36 pb-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header and Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-brand-navy font-semibold tracking-wider uppercase shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>Product Divisions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            Interactive <span className="text-brand-orange">Product Categories</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Click on a product category below to enter our specialized division catalog, view sub-product models, ratios, and submit technical spec sheets.
          </p>
        </div>

        {/* 4-Category Clickable Tab Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4 }}
              onClick={() => router.push(`/products?category=${cat.id}`)}
              className="glass-card rounded-xl p-6 cursor-pointer border border-slate-200 bg-white text-left flex flex-col justify-between h-[180px] hover:border-brand-orange shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-brand-navy/60 group-hover:text-brand-orange">
                  {cat.icon}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-sora font-extrabold text-brand-navy hover:text-brand-orange transition-colors duration-200">
                  {cat.title}
                </h3>
                <p className="text-brand-navy/55 text-xs mt-1.5 leading-snug font-sans font-medium line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
