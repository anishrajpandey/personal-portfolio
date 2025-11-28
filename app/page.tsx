"use client";
import { useState, useEffect } from "react";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import LoadingScreen from "@/components/LoadingScreen";
import GogoCursor from "@/components/ui/GogoCursor";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <GogoCursor />
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div className="w-full">
        <Landing />
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </div>
    </>
  );
}
