"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import galleryData from "./galleryData.json";
import { ArrowLeft, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

// Helper to format date (YYYY-MM to Month Year)
// Helper to format date (YYYY-MM to Month Year)
const formatDate = (dateString: string) => {
  if (!dateString) return "Unknown Date";
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  if (isNaN(date.getTime())) return dateString;
  
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>(galleryData[0]?.id || "");
  const [selectedImage, setSelectedImage] = useState<{ src: string; groupIndex: number; photoIndex: number } | null>(null);
  
  // Intersection Observer for active timeline
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    galleryData.forEach((group) => {
      const element = document.getElementById(group.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveCategory(group.id);
              }
            });
          },
          { threshold: 0.2, rootMargin: "-20% 0px -50% 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Image Navigation
  const handleNextImage = () => {
    if (!selectedImage) return;
    const group = galleryData[selectedImage.groupIndex];
    const nextPhotoIndex = selectedImage.photoIndex + 1;

    if (nextPhotoIndex < group.photos.length) {
      setSelectedImage({ ...selectedImage, photoIndex: nextPhotoIndex, src: group.photos[nextPhotoIndex].src });
    }
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const group = galleryData[selectedImage.groupIndex];
    const prevPhotoIndex = selectedImage.photoIndex - 1;

    if (prevPhotoIndex >= 0) {
      setSelectedImage({ ...selectedImage, photoIndex: prevPhotoIndex, src: group.photos[prevPhotoIndex].src });
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/life"
            className="flex items-center gap-2 text-gray-600 hover:text-[#008074] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Life</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Gallery</h1>
          <div className="w-20" /> 
        </div>
      </header>

      <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Main Content (Photos) */}
        <div className="w-full lg:w-3/4 space-y-32">
          {galleryData.map((group, groupIndex) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-32"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 capitalize">
                  {group.title}
                </h2>
                <div className="flex items-center gap-4 text-sm">
                   <div className="flex items-center gap-2 text-[#008074] font-medium">
                    <Calendar size={18} />
                    <span>{formatDate(group.date)}</span>
                   </div>
                </div>
                {group.description && (
                  <p className="mt-3 text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {group.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.photos.map((photo, photoIndex) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: photoIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedImage({ src: photo.src, groupIndex, photoIndex })}
                  >
                    <Image
                      src={photo.src}
                      alt={`${group.title} photo ${photoIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm text-sm">View</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Timeline Sidebar (Sticky) */}
        <div className="hidden lg:block w-1/4 relative">
          <div className="sticky top-32 pl-8 border-l-2 border-gray-200 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <h3 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-wider text-sm">
              Timeline
            </h3>
            <ul className="space-y-6">
              {galleryData.map((group) => (
                <li key={group.id}>
                  <button
                    onClick={() => scrollToCategory(group.id)}
                    className={`text-left transition-all duration-300 relative group ${
                      activeCategory === group.id
                        ? "text-[#008074] font-bold translate-x-2"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    <span className="block text-sm capitalize truncate max-w-[200px]">
                      {group.title}
                    </span>
                    <span className="text-xs opacity-60 font-normal">
                      {formatDate(group.date)}
                    </span>
                    
                    {/* Active Indicator Dot */}
                    {activeCategory === group.id && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -left-[37px] top-1.5 w-4 h-4 bg-[#008074] rounded-full border-4 border-white shadow-sm"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <div 
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={selectedImage.src}
                alt="Full screen view"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Navigation Buttons */}
            <button
               className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 disabled:opacity-20"
               onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
               disabled={selectedImage.photoIndex === 0}
            >
               <ChevronLeft size={48} />
            </button>
            <button
               className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 disabled:opacity-20"
               onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
               disabled={selectedImage.photoIndex === galleryData[selectedImage.groupIndex].photos.length - 1}
            >
               <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 pointer-events-none">
               <p className="text-lg font-medium">{galleryData[selectedImage.groupIndex].title}</p>
               <p className="text-sm opacity-60">{selectedImage.photoIndex + 1} / {galleryData[selectedImage.groupIndex].photos.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
