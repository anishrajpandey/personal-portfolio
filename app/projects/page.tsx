"use client";
import React from "react";
import Projects_AOS from "../Projects_AOS";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-gray-800 mb-4">
          All <span className="text-[#008074]">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          A complete collection of my work in software development, AI, and data science.
        </p>
      </div>
      <Projects_AOS showAll={true} />
    </main>
  );
}
