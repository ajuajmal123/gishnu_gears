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

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-extrabold text-brand-navy tracking-tight leading-tight">
            Contact <span className="text-brand-orange">Us</span>
          </h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Location Map */}
          <div className="w-full h-full flex flex-col">
            <MapPlaceholder className="h-full min-h-[400px] lg:min-h-[520px]" />
          </div>

          {/* Right Column: Inquiry Form UI */}
          <div className="w-full">
            <Card className="bg-slate-50 border border-slate-200 p-8 sm:p-10 relative overflow-hidden shadow-sm h-full flex flex-col justify-between">
              
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

              <div>
                <div className="text-left border-b border-slate-200 pb-5 mb-6">
                  <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight">
                    Submit Technical Inquiry
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 text-left font-sans font-medium">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
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
                    <div className="flex flex-col gap-1.5">
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

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
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
                    <div className="flex flex-col gap-1.5">
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
                  <div className="flex flex-col gap-1.5">
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
                      size="xs"
                      disabled={isSubmitting}
                      className="w-auto px-6 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md"
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
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
