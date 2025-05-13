import React from "react";
import Projects_AOS from "./Projects_AOS";

export default function Projects() {
  return (
    <main className="w-screen  p-2 min-h-screen md:p-8">
      <div className="text-2xl md:text-5xl font-bold tracking-wide text-center justify-center items-center  gap-1">
        <span className="  text-[#008074]">Projects</span>
        <span> worth mentioning </span>
      </div>
      <Projects_AOS />
    </main>
  );
}
