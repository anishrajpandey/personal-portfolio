"use client";
import { useRef, useEffect } from "react";

import Image from "next/image";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.querySelector(".threedcontainer");

    if (!element) return;

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      // 0.5 means the element moves at half the scroll speed
      const translateY = scrollY * 0.3;
      if (element instanceof HTMLElement)
        element.style.transform = `translateY(-${translateY}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      <div className="fixed top-0 bg-white z-10 w-screen h-auto">
        <Image
          src={"/signature_dark.png"}
          alt="Anish Raj Pandey"
          width={200}
          height={200}
        />
        Web..
      </div>
      <div
        ref={backgroundRef}
        className="flex justify-center fixed  w-screen h-fit overflow-hidden"
      >
        <div
          // style={{ y: backgroundY }}
          className=" w-screen h-10/12  pointer-events-none threedcontainer"
        >
          <div className="fixed top-0 bg-white z-10 w-screen h-auto">
            Website is in progress ...
          </div>
          <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
            <div className="w-screen min-h-16 text-2xl text-center m-0 p-0"></div>
          </div>
          <div>
            <iframe
              className=" w-screen h-[75vh]"
              src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0"
            >
              {" "}
            </iframe>
          </div>
        </div>
      </div>
      <div className="h-[70vh]"></div>
      <div className="heroTextBox text-5x relative  font-bold text-white uppercase h-auto mix-blend-difference m-0 p-0 ">
        <p className="text-center">Hi, I am Anish</p>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </section>
  );
}
