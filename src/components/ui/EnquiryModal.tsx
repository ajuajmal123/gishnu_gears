"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check, Settings, Cpu, Layers, HelpCircle, Phone, Mail, Building, User, FileText } from "lucide-react";
import Button from "./Button";

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialProduct?: string;
  initialSpecs?: string[];
  availableModels?: string[];
}

export default function EnquiryModal({
  isOpen,
  onClose,
  initialCategory = "Standard Gearboxes",
  initialProduct = "",
  initialSpecs = [],
  availableModels = [],
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: initialCategory,
    product: initialProduct,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Sync form when modal opens or initial props change
  useEffect(() => {
    if (isOpen) {
      // Determine initial model selection
      let defaultModel = initialProduct || "";
      if (availableModels && availableModels.length > 0) {
        if (!availableModels.includes(defaultModel)) {
          defaultModel = availableModels[0];
        }
      }

      const cleanedSpecs = initialSpecs ? initialSpecs.filter((s) => !s.toLowerCase().startsWith("size range:") && !s.toLowerCase().startsWith("rpm range:")) : [];
      const specsList = availableModels && availableModels.length > 0
        ? [`Selected Model: ${defaultModel}`, ...cleanedSpecs]
        : (initialSpecs || []);

      setFormData((prev) => ({
        ...prev,
        category: initialCategory || "Standard Gearboxes",
        product: defaultModel,
        message: specsList.length > 0
          ? `Inquiry for ${defaultModel || initialProduct}.\nSpecs:\n${specsList.map((s) => `• ${s}`).join("\n")}\n\nRequired Specifications / Application Details:`
          : prev.message,
      }));
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialCategory, initialProduct, initialSpecs, availableModels]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `GG-RFQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      category: "Standard Gearboxes",
      product: "",
      message: "",
    });
    onClose();
  };

  const handleModelChange = (newModel: string) => {
    setFormData((prev) => {
      let updatedMessage = prev.message;
      if (prev.product && updatedMessage.includes(prev.product)) {
        updatedMessage = updatedMessage.replaceAll(prev.product, newModel);
      } else if (updatedMessage.includes("Inquiry for")) {
        updatedMessage = updatedMessage.replace(/Inquiry for [^\n\.]+/, `Inquiry for ${newModel}`);
      }
      return {
        ...prev,
        product: newModel,
        message: updatedMessage,
      };
    });
  };

  const getCategoryIcon = (catName: string) => {
    if (catName.toLowerCase().includes("standard")) return <Settings className="w-4 h-4 text-brand-gold" />;
    if (catName.toLowerCase().includes("custom")) return <Cpu className="w-4 h-4 text-brand-gold" />;
    return <Layers className="w-4 h-4 text-brand-gold" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-40 transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200 relative flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold font-extrabold flex items-center gap-1.5 mb-1">
                  <span>Gishnu Gears &bull; Direct Technical Procurement</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-brand-navy tracking-tight">
                  Submit Technical <span className="text-brand-gold">Enquiry</span>
                </h3>
                <p className="text-brand-navy/60 text-xs mt-1 font-sans font-medium">
                  Direct connection to our application engineering team in Coimbatore.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleResetAndClose}
                className="p-2 rounded-xl bg-white border border-slate-200 text-brand-navy/60 hover:text-brand-gold hover:border-brand-gold/40 shadow-xs transition-all duration-200 cursor-pointer"
                aria-label="Close Enquiry Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-grow font-sans relative">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 sm:py-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-5 shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>

                  <span className="text-[11px] font-mono text-emerald-600 uppercase tracking-widest font-bold mb-1">
                    Enquiry Successfully Received
                  </span>

                  <h4 className="text-2xl font-sora font-extrabold text-brand-navy mb-2">
                    Thank You, {formData.name || "Valued Customer"}
                  </h4>

                  <div className="my-3 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-brand-navy">
                    Reference ID: <span className="text-brand-gold">{referenceId}</span>
                  </div>

                  <p className="text-brand-navy/70 text-sm max-w-md leading-relaxed mt-2 mb-6 font-medium">
                    Your RFQ and technical specifications have been routed to our Application Engineering Department in Coimbatore. An engineer will coordinate with you within 24 hours.
                  </p>

                  <Button variant="primary" size="sm" onClick={handleResetAndClose}>
                    Done
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Selected Product Context Banner */}
                  {formData.product && (
                    <div className="p-3 bg-brand-gold/10 border border-brand-gold/30 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-white text-brand-gold shadow-xs">
                          {getCategoryIcon(formData.category)}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block">
                            Enquiring for Model
                          </span>
                          <span className="text-xs sm:text-sm font-sora font-bold text-brand-navy">
                            {formData.product}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-sora font-semibold text-brand-navy/60 px-2 py-0.5 bg-white/80 rounded-md border border-slate-200">
                        {formData.category}
                      </span>
                    </div>
                  )}

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-name" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <User className="w-3 h-3 text-brand-gold" />
                        Full Name *
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy placeholder-brand-navy/35 outline-none transition-all duration-200 shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-email" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-brand-gold" />
                        Business Email *
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. r.sharma@industrial.com"
                        className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy placeholder-brand-navy/35 outline-none transition-all duration-200 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-phone" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-brand-gold" />
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 99439 17774"
                        className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy placeholder-brand-navy/35 outline-none transition-all duration-200 shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-company" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Building className="w-3 h-3 text-brand-gold" />
                        Company / Organization
                      </label>
                      <input
                        id="modal-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Industrial Solutions"
                        className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy placeholder-brand-navy/35 outline-none transition-all duration-200 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 3: Category and Product Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-category" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Settings className="w-3 h-3 text-brand-gold" />
                        Select Category *
                      </label>
                      <select
                        id="modal-category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy outline-none transition-all duration-200 shadow-xs cursor-pointer font-medium"
                      >
                        <option value="Standard Gearboxes">Standard Gearboxes</option>
                        <option value="Customized Gearboxes">Customized Gearboxes</option>
                        <option value="Gears and Components">Gears and Components</option>
                        <option value="Maintenance & Overhaul Services">Maintenance & Overhaul Services</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-product" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3 h-3 text-brand-gold" />
                          {availableModels && availableModels.length > 0 ? "Select Specific Model / Size *" : "Product / Model Series"}
                        </span>
                        {availableModels && availableModels.length > 0 && (
                          <span className="text-brand-gold text-[9px] font-mono font-bold uppercase">Dropdown / Selection</span>
                        )}
                      </label>

                      {availableModels && availableModels.length > 0 ? (
                        <>
                          <select
                            id="modal-product"
                            required
                            value={formData.product}
                            onChange={(e) => handleModelChange(e.target.value)}
                            className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy outline-none transition-all duration-200 shadow-xs cursor-pointer font-bold"
                          >
                            {availableModels.map((m) => (
                              <option key={m} value={m}>
                                {m}
                              </option>
                            ))}
                          </select>

                          {/* Quick clickable selection chips */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {availableModels.map((m) => (
                              <button
                                key={m}
                                type="button"
                                onClick={() => handleModelChange(m)}
                                className={`px-2.5 py-1 text-[11px] font-sora font-bold rounded-md transition-all cursor-pointer border ${
                                  formData.product === m
                                    ? "bg-brand-navy text-white border-brand-navy shadow-xs scale-105"
                                    : "bg-white text-brand-navy/70 border-slate-200 hover:border-brand-gold hover:text-brand-navy"
                                }`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <input
                          id="modal-product"
                          type="text"
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          placeholder="e.g. GB1 Series, G Series, Spur Gears"
                          className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy placeholder-brand-navy/35 outline-none transition-all duration-200 shadow-xs"
                        />
                      )}
                    </div>
                  </div>

                  {/* Row 4: Message / Specifications */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-message" className="text-[10px] font-mono text-brand-navy/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <HelpCircle className="w-3 h-3 text-brand-gold" />
                      Technical Specifications & Requirements *
                    </label>
                    <textarea
                      id="modal-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify gear ratio, input/output RPM, required torque, mounting style, or operating load parameters..."
                      className="w-full bg-slate-50/70 border border-slate-200 focus:border-brand-gold focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-brand-navy placeholder-brand-navy/35 outline-none transition-all duration-200 shadow-xs resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-4 py-2 text-xs font-sora font-semibold text-brand-navy/60 hover:text-brand-navy transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <Button
                      variant="primary"
                      type="submit"
                      size="sm"
                      disabled={isSubmitting}
                      className="px-6 flex items-center justify-center gap-2 shadow-md hover:shadow-brand-gold/20"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting RFQ...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Technical Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
