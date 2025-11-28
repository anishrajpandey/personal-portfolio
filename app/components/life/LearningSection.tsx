"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    title: "Machine Learning",
    desc: "Exploring neural networks and transformers.",
    link: "#",
  },
  {
    title: "Data Structures",
    desc: "Mastering algorithms for efficiency.",
    link: "#",
  },
  {
    title: "System Design",
    desc: "Building scalable architectures.",
    link: "#",
  },
  {
    title: "Web Development",
    desc: "Crafting responsive and dynamic UIs.",
    link: "#",
  },
];

export default function LearningSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 justify-start">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">What I’m Learning</h2>
          <div className="relative w-12 h-12">
             <Image
              src="/gogo/gogo_math.png"
              alt="GoGo Learning"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[var(--color-primary)]/50 transition-colors group cursor-pointer shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{topic.desc}</p>
              <Link
                href={topic.link}
                className="text-sm text-[var(--color-secondary)] hover:underline"
              >
                See More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
