"use client";
import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for parallax effect
  // Image moves slower (0.5x speed) than normal scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Background/Image Container - keeping all white boxes */}
      <div className="fixed inset-0 w-screen overflow-hidden">
        <div className="fixed top-0 bg-white z-10 w-screen h-auto">
          <Image
            src={"/signature_dark.png"}
            alt="Anish Raj Pandey"
            width={200}
            height={200}
          />
          <p>Website is in progress ...</p>
        </div>

        {/* 3D model with slower scroll - keeping the structure intact */}
        <motion.div style={{ y: backgroundY }} className="threedcontainer">
          <iframe
            className="w-screen h-[75vh]"
            src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0"
          />
        </motion.div>

        {/* Keeping bottom white box */}
        <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
          <div className="w-screen min-h-16 text-2xl text-center m-0 p-0"></div>
        </div>
      </div>

      {/* Text that scrolls at normal speed */}
      <div className="h-[90vh]"></div>
      <motion.div className="heroTextBox text-5xl relative z-20 font-bold text-white uppercase h-auto mix-blend-difference m-0 p-0">
        <p className="text-center">Hi, I am Anish</p>
      </motion.div>
      <div className="h-screen"></div>
    </section>
  );
}
