"use client";

import { motion } from "framer-motion";

export default function LifeHeader() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">
          My Life
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          A space that shows what I’m learning, exploring, building, and experiencing — beyond the polished portfolio.
        </p>
      </motion.div>
    </section>
  );
}
