"use client";
import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Landing from "./Landing";

export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
    </>
  );
}
