"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Personal Portfolio",
    status: "Live",
    difficulty: "Medium",
    desc: "My digital home on the internet.",
    gogo: "/gogo/gogo_grey_thinking.png",
  },
  {
    title: "MNIST ML Algorithm",
    status: "In Progress",
    difficulty: "Hard",
    desc: "Handwritten digit recognition from scratch.",
    gogo: "/gogo/gogo_math.png",
  },
  {
    title: "StyleIs.Tech Redevelopment",
    status: "Planned",
    difficulty: "Hard",
    desc: "Rebuilding the fashion tech platform from scratch.",
    gogo: "/gogo/gogo_orange_confused.png",
  },
];

export default function BuildingSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-10 text-left">What I’m Building</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[var(--color-primary)]/50 transition-colors cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-full overflow-hidden p-2">
                 <Image
                  src={project.gogo}
                  alt="GoGo Status"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full border ${
                    project.status === "Live" ? "border-green-500 text-green-600" :
                    project.status === "In Progress" ? "border-blue-500 text-blue-600" :
                    "border-purple-500 text-purple-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>

              <div className="text-right hidden md:block">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Difficulty</span>
                <p className={`font-medium ${
                  project.difficulty === "Hard" ? "text-red-500" :
                  project.difficulty === "Medium" ? "text-yellow-600" :
                  "text-green-500"
                }`}>
                  {project.difficulty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
