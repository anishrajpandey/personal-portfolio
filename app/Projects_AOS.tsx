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
  category: ("AI/Data" | "Web")[];
  hours: string;
  date: string;
}

const projectsData: Project[] = [
  
  {
    title: "Housing Price Prediction",
    description:
      "ML model predicting housing prices using regression algorithms and data analysis. Includes comprehensive preprocessing and model training pipelines.",
    srcWeb: "/projectImages/housing.png",
    live: "",
    github: "https://github.com/anishrajpandey/Machine_Learning_Housing_Corporation",
    features: ["Data Preprocessing", "Regression Models", "Data Visualization"],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: ["AI/Data"],
    hours: "80+",
    date: "Spring 2024",
  },
  {
    title: "CO2 Emission Prediction",
    description:
      "Full-stack tool forecasting CO2 emissions with interactive visualizations using NASA data. backend scripts and data handling.",
    srcWeb: "/projectImages/datanexus_desktop.png",
    live: "https://data-nexus.netlify.app/",
    github: "https://github.com/anishrajpandey/Data-Nexus__spaceapps/tree/main",
    features: ["Emission Forecasting", "Interactive Charts", "NASA Datasets"],
    tech: ["React", "Python", "PyTorch", "Matplotlib"],
    category: ["AI/Data", "Web"],
    hours: "100+",
    date: "Spring 2024",
  },
  {
    title: "AI Wardrobe Manager",
    description:
      "AI-powered clothing classifier and outfit recommendation engine using Google Vision API. Analyzes your wardrobe to suggest stylish combinations.",
    srcWeb: "/projectImages/wardobe.png",
    live: "https://styleis-tech-1.onrender.com/",
    github: "https://github.com/anishrajpandey/styleistech",
    features: ["Clothing Detection", "Style Analysis", "Outfit Recommendations"],
    tech: ["Python", "Flask", "Google Vision API", "React"],
    category: ["AI/Data", "Web"],
    hours: "120+",
    date: "Fall 2024",
  },
  {
    title: "Prompt Injection Detector",
    description:
      "Classifier detecting potential prompt-injection attacks in user input using NLP techniques. Includes dataset generation and API.",
    srcWeb: "/projectImages/pustikaWeb.png",
    live: "https://anishrajpandey.github.io/Prompt_Injection_Detector/",
    github: "https://github.com/anishrajpandey/Prompt_Injection_Detector",
    features: ["Attack Detection", "TF-IDF Model", "Security Focused"],
    tech: ["Next.js", "OpenAI API", "Python", "Scikit-learn"],
    category: ["AI/Data", "Web"],
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
    return project.category.includes(activeTab);
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="w-full flex flex-col items-center px-4 relative">
      {/* Tabs */}
      <div className="flex gap-4 mb-16 bg-white p-2 rounded-full shadow-sm">
        {["All", "AI/Data", "Web"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-[#008074] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full max-w-7xl space-y-32">
        {displayProjects.map((project, i) => (
          <div key={i} className="relative">
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-16 relative z-10`}
            >
              {/* Image/Card Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-white transform transition-transform duration-500 hover:-translate-y-2">
                  <Image
                    src={project.srcWeb}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
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
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                   <div className="flex gap-2">
                     {project.category.map((cat, idx) => (
                       <span key={idx} className="px-4 py-1.5 bg-[#008074]/10 text-[#008074] rounded-full text-sm font-bold tracking-wide uppercase">
                          {cat}
                       </span>
                     ))}
                   </div>
                   <div className="flex items-center gap-6 text-gray-500 text-sm font-medium">
                      <span className="flex items-center gap-2"><Clock size={18}/> {project.hours}</span>
                      <span className="flex items-center gap-2"><Calendar size={18}/> {project.date}</span>
                   </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <span className="w-2.5 h-2.5 bg-[#008074] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:border-[#008074] hover:text-[#008074] transition-colors duration-300 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-5 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-3.5 bg-[#008074] text-white rounded-xl font-bold hover:bg-[#006b61] transition-all hover:scale-105 shadow-lg hover:shadow-[#008074]/30"
                    >
                      <MousePointer2 size={20} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg hover:shadow-gray-900/30"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Divider (except for last item) */}
            {i !== displayProjects.length - 1 && (
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gray-200" />
            )}
          </div>
        ))}
      </div>

      {!showAll && filteredProjects.length > 3 && (
        <div className="mt-24 mb-10">
          <Link
            href="/projects"
            className="px-10 py-5 bg-white border-2 border-[#008074] text-[#008074] rounded-full font-bold text-xl hover:bg-[#008074] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            View More Projects
          </Link>
        </div>
      )}
    </section>
  );
}

