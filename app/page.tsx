"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "../styles/icons.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollPos = window.pageYOffset;

      // Determine if the user is scrolling up or down
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Only update visibility if the user has scrolled a minimum amount
      // This prevents small scroll adjustments from triggering the navbar
      const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);
      if (scrollDifference > 10) {
        setVisible(!isScrollingDown);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  // This effect will handle the translation of the element on scroll

  useEffect(() => {
    const element = document.querySelector(".threedcontainer");

    if (!element) return;

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      // 0.5 means the element moves at half the scroll speed
      const translateY = scrollY * 0.7;
      if (element instanceof HTMLElement)
        element.style.transform = `translateY(-${translateY}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative">
        <div
          className={`h-12 fixed top-0 left-0 right-0 z-50 bg-white shadow transition-transform duration-300 bg-pink-500 ${
            visible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          Anish Raj Pandey
        </div>
          {/* main landing page */}
        <div
          id="home"
          ref={backgroundRef}
          className="flex justify-center fixed  w-screen h-fit overflow-hidden"
        >
          <div
            // style={{ y: backgroundY }}
            className=" w-screen h-10/12 threedcontainer relative"
          >
            <div className="fixed top-0 bg-white z-10 w-screen h-auto"></div>

            <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
              <div className="w-screen min-h-16 text-2xl text-center m-0 p-0"></div>
            </div>
            <div className="relative">
              <iframe
                className=" w-screen h-[75vh]"
                src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0"
              />
              <div className=" parent absolute  w-full h-auto  top-1/5 bottom-1/5  z-30 ">
                <div className="div1 pointer-events-auto opacity-0 relative left-[20rem] scale-150 flex justify-center items-center fill-mode-forwards transition-delay-300">
                  <Image
                    src={"/Brackets1.png"}
                    alt="error"
                    className="cursor-pointer Iconsimg"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="div2 pointer-events-auto opacity-0  relative left-1/3 scale-170  flex justify-center items-center forwa">
                  <Image
                    src={"/Cloud-icon.png"}
                    alt="error"
                    className="cursor-pointer Iconsimg "
                    width={100}
                    height={100}
                  />
                </div>
                <div className="div6 pointer-events-auto -0 flex relative scale-75 left-[30rem] bottom-[17rem] justify-center items-center ">
                  <Image
                    src={"/vscode.webp"}
                    alt="error"
                    className="cursor-pointer Iconsimg  "
                    width={100}
                    height={100}
                  />
                </div>
                <div className="div5 pointer-events-auto opacity-0  relative left-36 top-12 scale-110 flex justify-center items-center forwa">
                  <Image
                    src={"/Coffee.png"}
                    alt="error"
                    className="cursor-pointer Iconsimg"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="div4 pointer-events-auto opacity-0  relative right-[250px] flex justify-center items-center forwa">
                  <Image
                    src={"/Group 1.png"}
                    alt="error"
                    className="cursor-pointer Iconsimg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="div3 pointer-events-auto opacity-0 flex justify-center items-center forwa">
                  <Image
                    src={"/headphone1.png"}
                    alt="error"
                    className="cursor-pointer Iconsimg"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[70vh]"></div>
        <div className="heroTextBox  ">
          <p className="text-center uppercase relative text-[#008074] font-semibold text-6xl h-auto  m-0 p-0">
            Hi, I am Anish
          </p>
          <p className="text-center uppercase relative    text-xl m-2 h-auto  ">
            I build intelligent systems that transform data into actionable
            insights
          </p>
        </div>
      </section>
      <AboutMe />
      <Projects />
    </>
  );
}
