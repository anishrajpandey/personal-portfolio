"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="relative">
      <div
        ref={backgroundRef}
        className="flex justify-center  w-screen h-fit overflow-hidden"
      >
        <div className=" w-screen h-10/12 relative pointer-events-none threedcontainer">
          <div className="fixed top-0 bg-white z-10 w-screen h-auto">
            <Image
              src={"/signature_dark.png"}
              alt="Anish Raj Pandey"
              width={200}
              height={200}
            />
            Website is in progress ...
          </div>
          <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
            <div className="w-screen min-h-16 text-2xl text-center m-0 p-0"></div>
          </div>

          <iframe
            className=" w-screen h-[75vh]"
            src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0"
          >
            {" "}
          </iframe>
        </div>
      </div>
      {/* <div className="h-[90vh]"></div> */}
      <div
        ref={frontRef}
        className="heroTextBox text-5xl  font-bold text-white uppercase h-auto mix-blend-difference m-0 p-0 "
      >
        <p className="text-center">Hi, I am Anish</p>
      </div>
      <div className="h-screen"></div>
    </section>
  );
}
