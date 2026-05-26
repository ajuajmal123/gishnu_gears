"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import MapPlaceholder from "../ui/MapPlaceholder";
import { Mail, Phone, MapPin, MessageSquare, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    vertical: "Industrial Transmissions",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          vertical: "Industrial Transmissions",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-brand-orange" />,
      title: "Manufacturing HQ",
      desc: "Coimbatore, Tamil Nadu, India 641001",
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-orange" />,
      title: "Inquiries & Proposals",
      desc: "marketing@gishnugears.in (www.gishnugears.com)",
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-orange" />,
      title: "Operating Hours",
      desc: "Monday to Saturday, 8:30 AM – 6 PM IST",
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight">
              Initiate <span className="text-brand-orange">Procurement</span>
            </h2>
          </div>
          <p className="text-brand-navy/60 text-sm md:text-base max-w-md md:text-right leading-relaxed font-sans font-medium">
            Submit your technical drawings or transmission requirements, and our application engineering desk will formulate a custom gearbox fit layout within 48 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Physical Info & Map */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-left">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-brand-orange self-start shadow-sm">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-brand-navy font-sora font-bold text-sm tracking-wide">
                      {detail.title}
                    </h4>
                    <p className="text-brand-navy/60 text-xs sm:text-sm leading-relaxed mt-1 font-sans">
                      {detail.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Custom Map Mockup */}
            <MapPlaceholder />
          </div>

          {/* Right Column: Inquiry Form UI */}
          <div className="lg:col-span-6">
            <Card className="bg-slate-50 border border-slate-200 p-8 sm:p-10 relative overflow-hidden shadow-sm">
              
              {/* Form Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 mb-6"
                    >
                      <Check className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-sora font-extrabold text-brand-navy mb-2">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-brand-navy/60 text-sm max-w-sm leading-relaxed mb-6 font-sans">
                      Your technical procurement request has been compiled and routed securely to our Coimbatore Application Engineering Desk. We will coordinate shortly.
                    </p>
                    <span className="text-[10px] font-mono text-emerald-600/85 uppercase tracking-widest font-bold">
                      TRANSMISSION COMPLETED
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-left border-b border-slate-200 pb-6 mb-8">
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight">
                  Application Engineering Desk
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left font-sans">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-brand-navy/60 uppercase tracking-widest pl-1 font-bold">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ramesh Kumar"
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange rounded-lg px-4 py-3 text-sm text-brand-navy placeholder-brand-navy/30 outline-none transition-all duration-200 shadow-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-brand-navy/60 uppercase tracking-widest pl-1 font-bold">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. procurement@aviation.in"
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange rounded-lg px-4 py-3 text-sm text-brand-navy placeholder-brand-navy/30 outline-none transition-all duration-200 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[10px] font-mono text-brand-navy/60 uppercase tracking-widest pl-1 font-bold">
                      Corporate Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Bangalore Metro Corp"
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange rounded-lg px-4 py-3 text-sm text-brand-navy placeholder-brand-navy/30 outline-none transition-all duration-200 shadow-sm"
                    />
                  </div>
                  {/* Vertical */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="vertical" className="text-[10px] font-mono text-brand-navy/60 uppercase tracking-widest pl-1 font-bold">
                      Select Vertical *
                    </label>
                    <select
                      id="vertical"
                      value={formData.vertical}
                      onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange rounded-lg px-4 py-3 text-sm text-brand-navy/80 outline-none transition-all duration-200 appearance-none cursor-pointer shadow-sm"
                    >
                      <option value="Standard Transmissions">Standard Transmissions</option>
                      <option value="Custom High-Torque Drives">Custom High-Torque Drives</option>
                      <option value="Locomotive Rolling Stock">Locomotive Rolling Stock</option>
                      <option value="Defence & Satellites">Defence & Satellites</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-brand-navy/60 uppercase tracking-widest pl-1 font-bold">
                    Technical Specifications / Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on ratio, torque requirement, mounting constraints, or input shaft layout..."
                    className="w-full bg-white border border-slate-200 focus:border-brand-orange rounded-lg px-4 py-3 text-sm text-brand-navy placeholder-brand-navy/30 outline-none transition-all duration-200 resize-none shadow-sm"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-center pt-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="sm"
                    disabled={isSubmitting}
                    className="w-auto flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

        </div>

        {/* WhatsApp Direct CTA Button */}
        <div className="w-full flex justify-center mt-6">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 hover:text-emerald-500 font-semibold text-xs tracking-wider uppercase transition-all duration-200 group shadow-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>Connect on WhatsApp Support</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
