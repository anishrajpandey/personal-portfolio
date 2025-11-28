"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SectionLayoutProps {
  title: string;
  gogoImage?: string;
  gogoAlt?: string;
  seeMoreLink: string;
  children: React.ReactNode;
  className?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  gogoImage,
  gogoAlt = "GoGo",
  seeMoreLink,
  children,
  className = "",
}) => {
  return (
    <section className={`mb-32 relative ${className}`}>
      <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          {gogoImage && (
            <div className="hidden md:block w-24 h-24 relative -mb-6">
              <Image
                src={gogoImage}
                alt={gogoAlt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        
        <a 
            href={seeMoreLink}
            className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline group"
        >
            See More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {children}

      <div className="mt-8 md:hidden flex justify-center">
        <a 
            href={seeMoreLink}
            className="flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
        >
            See More <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default SectionLayout;
