"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const moments = [
  {
    caption: "Late night debugging session ☕️",
    image: "/gallery/coding_late_night.jpg",
  },
  {
    caption: "Hackathon grind 🚀",
    image: "/gallery/hackathon.png",
  },
  {
    caption: "Weekend hike views 🏔️",
    image: "/gallery/hike.jpg",
  },
];

export default function LatelySection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-left">Lately</h2>
          <span className="text-sm text-gray-500">Snapshots from my life</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer"
            >
               <Image
                src={moment.image}
                alt={moment.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">{moment.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
