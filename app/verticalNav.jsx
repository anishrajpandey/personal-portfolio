"use client";
import Image from "next/image";
import './../styles/verticalMenu.css';

export default function VerticalNav() {
  return (
    <section className="ml-0  flex items-start bg-red-300 ">
   
      <nav className="blocks  flex justify-start  w-screen items-center scale-[0.35]">
        <a href="#" className="block" style={{ "--bg": "var(--gradient-1)" }}>
          <div className="block__item "></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-2)" }}>
          <div className="block__item"></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-3)" }}>
          <div className="block__item"> </div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-4)" }}>
          <div className="block__item"></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-5)" }}>
          <div className="block__item"></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-6)" }}>
          <div className="block__item"></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-7)" }}>
          <div className="block__item"></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-8)" }}>
          <div className="block__item"></div>
        </a>
        <a href="#" className="block" style={{ "--bg": "var(--gradient-9)" }}>
          <div className="block__item"></div>
        </a>
      </nav>
    </section>
  );
}
