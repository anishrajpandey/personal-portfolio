"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const galleries = [
  {
    title: "Professional",
    count: "12 Photos",
    image: "/gogo/gogo_orange_black_suit.png", // Placeholder
  },
  {
    title: "Hobbies",
    count: "24 Photos",
    image: "/gogo/gogo_orange_gym.png", // Placeholder
  },
  {
    title: "Achievements",
    count: "8 Photos",
    image: "/gogo/gogo_orange_surprised.png", // Placeholder
  },
  {
    title: "Fun & Random",
    count: "42 Photos",
    image: "/gogo/gogo_couple.png", // Placeholder
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <Link href="/life" className="text-sm text-gray-500 hover:text-[var(--color-primary)] mb-4 inline-block">
            &larr; Back to Life
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A visual collection of my professional journey, hobbies, and random moments.
          </p>
        </motion.div>
      </section>

      <section className="w-full pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleries.map((gallery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >
                 <Image
                  src={gallery.image}
                  alt={gallery.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{gallery.title}</h3>
                  <span className="text-sm text-gray-200 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {gallery.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
