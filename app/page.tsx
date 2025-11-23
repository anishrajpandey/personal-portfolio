"use client";
import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Landing from "./Landing";

import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      <Landing />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}
