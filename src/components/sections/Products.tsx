"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Settings, Cpu, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  image?: string;
  badge: string;
}

export default function Products() {
  const router = useRouter();

  const categories: Category[] = [
    {
      id: "standard",
      title: "Standard Gearboxes",
      icon: <Settings className="w-5 h-5" />,
      description: "Heavy-duty helical, bevel, and worm transmission gear units engineered for continuous industrial manufacturing.",
      image: "/products/G Series/G Series GU 162 to 337 - 3.jpeg",
      badge: "Heavy Industrial",
    },
    {
      id: "custom",
      title: "Customized Gearboxes",
      icon: <Cpu className="w-5 h-5" />,
      description: "Bespoke high-torque multi-stage drives tailored to exact customer gear ratios, power outputs, and mounting dimensions.",
      image: "/products/M Series/M Series Bevel Helical Gearbox.png",
      badge: "Engineered to Order",
    },
    {
      id: "components",
      title: "Gears and Components",
      icon: <Layers className="w-5 h-5" />,
      description: "Precision-machined aluminium & casting transfer housings, spur, helical, bevel gears, and custom job-order components.",
      image: "/products/O Series/O series.png",
      badge: "Micron Precision",
    },
  ];

  return (
    <section id="products" className="relative pt-24 pb-12 bg-slate-50 overflow-hidden">
      <div className="max-w-[1536px] 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Header and Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-2">
            Engineered Transmission Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            Interactive <span className="text-brand-gold">Product Categories</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Explore our specialized divisions to view complete model series, technical specifications, and submit RFQ enquiries.
          </p>
        </div>

        {/* 3-Category Clickable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => router.push(`/products?category=${cat.id}`)}
              className="glass-card rounded-2xl p-5 cursor-pointer border border-slate-200 bg-white text-left flex flex-col justify-between hover:border-brand-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 group h-[380px]"
            >
              {/* Category Image Header */}
              <div className="w-full h-52 flex items-center justify-center relative rounded-xl border border-slate-100 bg-slate-50 mb-4 overflow-hidden shadow-inner p-4">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-brand-gold">{cat.icon}</div>
                )}
                
                {/* Floating Category Icon Badge */}
                <div className="absolute top-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-100 text-brand-navy shadow-sm group-hover:text-brand-gold group-hover:scale-105 transition-all">
                  {cat.icon}
                </div>

                {/* Bottom Left Badge */}
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-brand-navy/85 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-xs">
                  {cat.badge}
                </span>
              </div>

              {/* Text Info */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-sora font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors duration-200 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-brand-navy/60 text-xs mt-2 leading-relaxed font-sans font-medium line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-sora font-bold text-brand-gold">
                  <span>Explore Series & Models</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
