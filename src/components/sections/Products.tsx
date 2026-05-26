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
  image?: string;
}

export default function Products() {
  const router = useRouter();

  const categories: Category[] = [
    {
      id: "standard",
      title: "Standard Gearboxes",
      icon: <Settings className="w-5 h-5" />,
      description: "Heavy-duty transmission systems.",
      image: "/standard_gearbox.png",
    },
    {
      id: "custom",
      title: "Custom Gearboxes",
      icon: <Cpu className="w-5 h-5" />,
      description: "Tailored high-torque drives.",
      image: "/custom_gearbox.png",
    },
    {
      id: "railway",
      title: "Railway Gearboxes",
      icon: <Train className="w-5 h-5" />,
      description: "Traction drive transmissions.",
      image: "/railway_gearbox.png",
    },
    {
      id: "defence",
      title: "Defence & Aerospace",
      icon: <Shield className="w-5 h-5" />,
      description: "Avionics and military gearsets.",
      image: "/defence_gearbox.png",
    },
  ];

  return (
    <section id="products" className="relative pt-24 pb-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header and Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
            Interactive <span className="text-brand-orange">Product Categories</span>
          </h2>
          <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Explore our specialized division catalog and view complete model technical specifications.
          </p>
        </div>

        {/* 4-Category Clickable Tab Cards Grid - Enlarged Image focus, simplified text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4 }}
              onClick={() => router.push(`/products?category=${cat.id}`)}
              className="glass-card rounded-xl p-4 cursor-pointer border border-slate-200 bg-white text-left flex flex-col justify-between hover:border-brand-orange shadow-sm hover:shadow-md transition-all duration-200 group h-[290px]"
            >
              {/* Category Image Header - Enlarged to h-48 for massive visual focus */}
              <div className="w-full h-48 flex items-center justify-center relative rounded-lg border border-slate-100 bg-slate-50 mb-4 overflow-hidden shadow-inner">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-brand-orange">{cat.icon}</div>
                )}
                
                {/* Floating Category Icon Badge */}
                <div className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-100 text-brand-navy shadow-sm group-hover:text-brand-orange transition-colors">
                  {cat.icon}
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-sora font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors duration-200 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-brand-navy/55 text-xs mt-1 leading-snug font-sans font-medium">
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
