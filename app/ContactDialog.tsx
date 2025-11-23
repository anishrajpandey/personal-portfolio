"use client";
import React, { useState } from "react";
import { X, Mail, Phone, Send } from "lucide-react";
import * as motion from "motion/react-client";
import SocialIcons from "@/components/SocialIcons";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
      >
        {/* Header */}
        <div className="bg-[#008074] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-white/90 text-sm">
            I'd love to hear from you! Send me a message or reach out directly.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <div className="space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Mail className="text-[#008074]" size={18} />
              <span>anishpandey021@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#008074]" size={18} />
              <span>512-667-1728</span>
            </div>
            <div className="pt-2 mt-2 border-t border-gray-200">
              <SocialIcons className="justify-center" />
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008074] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008074] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008074] focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#008074] hover:bg-[#006b61] text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
