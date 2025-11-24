import React from "react";
import Projects_AOS from "./Projects_AOS";

export default function Projects() {
  return (
    <main id="projects" className="w-screen overflow-hidden ">
      <div className="text-2xl md:text-6xl font-bold tracking-wide text-center justify-center items-center gap-1">
        <span className="  text-[#008074]">Projects</span>
        <span> worth mentioning </span>
      </div>
      <div className="flex justify-center text-center w-2/3 mx-auto items-center text-lg md:text-lg text-gray-600 mt-4 mb-8">
        A collection of projects that showcase my expertise in software
        development, data and AI. Each project represents a unique challenge and
        solution.
      </div>
      <Projects_AOS />
      {/* <div className="h-screen"></div> */}
    </main>
  );
}
