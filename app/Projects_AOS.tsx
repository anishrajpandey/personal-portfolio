"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";
import { Github, MousePointer2, Clock, Calendar } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  srcWeb: string;
  live: string;
  github: string;
  features: string[];
  tech: string[];
  category: "AI/Data" | "Web";
  hours: string;
  date: string;
}

const projectsData: Project[] = [
  {
    title: "AI Wardrobe Manager",
    description:
      "AI-powered clothing classifier and outfit recommendation engine using Google Vision API.",
    srcWeb: "/projectImages/pustikaWeb.png",
    live: "#",
    github: "#",
    features: ["Clothing Detection", "Style Analysis", "Outfit Recommendations"],
    tech: ["Python", "Flask", "Google Vision API", "React"],
    category: "AI/Data",
    hours: "120+",
    date: "Fall 2024",
  },
  {
    title: "Housing Price Prediction",
    description:
      "ML model predicting housing prices using regression algorithms and data analysis.",
    srcWeb: "/projectImages/datanexus_desktop.png",
    live: "#",
    github: "#",
    features: ["Data Preprocessing", "Regression Models", "Data Visualization"],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "AI/Data",
    hours: "80+",
    date: "Spring 2024",
  },
  {
    title: "CO2 Emission Prediction",
    description:
      "Full-stack tool forecasting CO2 emissions with interactive visualizations using NASA data.",
    srcWeb: "/projectImages/datanexus_desktop.png",
    live: "#",
    github: "#",
    features: ["Emission Forecasting", "Interactive Charts", "NASA Datasets"],
    tech: ["React", "Python", "PyTorch", "Matplotlib"],
    category: "AI/Data",
    hours: "100+",
    date: "Spring 2024",
  },
  {
    title: "Prompt Injection Detector",
    description:
      "Classifier detecting potential prompt-injection attacks in user input using NLP techniques.",
    srcWeb: "/projectImages/pustikaWeb.png",
    live: "#",
    github: "#",
    features: ["Attack Detection", "TF-IDF Model", "Security Focused"],
    tech: ["Next.js", "OpenAI API", "Python", "Scikit-learn"],
    category: "AI/Data",
    hours: "60+",
    date: "Fall 2023",
  },
];

interface ProjectsAOSProps {
  showAll?: boolean;
}

export default function Projects_AOS({ showAll = false }: ProjectsAOSProps) {
  const [activeTab, setActiveTab] = useState<"All" | "AI/Data" | "Web">("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="w-full flex flex-col items-center px-4 relative">
      {/* Tabs */}
      <div className="flex gap-4 mb-12 bg-gray-100 p-2 rounded-full">
        {["All", "AI/Data", "Web"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#008074] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full max-w-7xl space-y-24">
        {displayProjects.map((project, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12 relative`}
          >
            {/* Image/Card Side */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-xl shadow-xl border border-gray-100 bg-white">
                <Image
                  src={project.srcWeb}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Mobile Card Overlay (visible only on mobile) */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 text-white md:hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                   <div className="flex items-center gap-4 text-sm mb-4">
                      <span className="flex items-center gap-1"><Clock size={14}/> {project.hours}</span>
                      <span className="flex items-center gap-1"><Calendar size={14}/> {project.date}</span>
                   </div>
                   <p className="text-sm text-center mb-4">{project.description}</p>
                   <div className="flex gap-2 flex-wrap justify-center">
                      {project.tech.slice(0,3).map(t => <span key={t} className="text-xs bg-[#008074] px-2 py-1 rounded">{t}</span>)}
                   </div>
                </div>
              </div>

              {/* Desktop Gogo Integration */}
              <div className="hidden md:block absolute -bottom-10 -right-10 w-32 pointer-events-none z-10">
                 {i % 2 === 0 ? (
                    <Image src="/gogo/gogo_grey_paw.png" alt="Gogo Paw" width={100} height={100} className="object-contain transform rotate-12"/>
                 ) : (
                    <Image src="/gogo/gogo_orange_tail.png" alt="Gogo Tail" width={100} height={100} className="object-contain transform -rotate-12"/>
                 )}
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                 <span className="px-3 py-1 bg-[#008074]/10 text-[#008074] rounded-full text-sm font-semibold">
                    {project.category}
                 </span>
                 <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1"><Clock size={16}/> {project.hours}</span>
                    <span className="flex items-center gap-1"><Calendar size={16}/> {project.date}</span>
                 </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-[#008074] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-[#008074] hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#008074] text-white rounded-lg font-semibold hover:bg-[#006b61] transition-all hover:scale-105 shadow-md"
                >
                  <MousePointer2 size={20} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all hover:scale-105 shadow-md"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredProjects.length > 3 && (
        <div className="mt-20 mb-10">
          <Link
            href="/projects"
            className="px-8 py-4 bg-white border-2 border-[#008074] text-[#008074] rounded-full font-bold text-lg hover:bg-[#008074] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View More Projects
          </Link>
        </div>
      )}
    </section>
  );
}

