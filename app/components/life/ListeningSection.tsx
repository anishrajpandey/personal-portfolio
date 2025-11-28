"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Destiny",
    type: "Music",
    desc: "NEFFEX",
    image: "/gogo/gogo_grey_neffex.png",
    link: "#",
  },
  {
    title: "Careless",
    type: "Music",
    desc: "NEFFEX",
    image: "/gogo/gogo_grey_neffex.png",
    link: "#",
  },
  {
    title: "Grateful",
    type: "Music",
    desc: "NEFFEX",
    image: "/gogo/gogo_grey_neffex.png",
    link: "#",
  },
];

export default function ListeningSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 justify-start">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">What I’m listening to</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-100 cursor-pointer"
            >
              {/* Placeholder for Album Art */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/10 to-gray-200 group-hover:scale-105 transition-transform duration-500">
                 <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-medium text-[var(--color-secondary)] mb-1 uppercase tracking-wider">{item.type}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
                <Link href={item.link} className="text-sm text-white/80 hover:text-white flex items-center gap-2">
                  Listen Now <span className="text-lg">🎧</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
