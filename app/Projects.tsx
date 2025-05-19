import React from "react";
import Projects_AOS from "./Projects_AOS";

export default function Projects() {
  return (
    <main className="w-screen  overflow-hidden min-h-screen ">
      <div className="text-2xl md:text-5xl font-bold tracking-wide text-center justify-center items-center  gap-1">
        <span className="  text-[#008074]">Projects</span>
        <span> worth mentioning </span>
      </div>
      <Projects_AOS />
    </main>
  );
}
