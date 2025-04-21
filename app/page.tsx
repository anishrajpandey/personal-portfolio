"use client";
import { useRef, useEffect } from "react";
import VerticalNav from "./verticalNav";
import Image from "next/image";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);

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
    <section className="relative">
      <div className="fixed top-0 bg-white z-10 w-screen h-auto">
        <Image
          src={"/signature_dark.png"}
          alt="Anish   Raj Pandey"
          width={100}
          height={100}
        />
        Web..
      </div>
      <div
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
            >
              {" "}
            </iframe>
            <div className=" parent pointer-events-none absolute  w-full h-auto  top-1/5 bottom-1/5  z-30 ">
              <div className="div1 relative left-[250px] scale-200 rotate-45 flex justify-center items-center">
                <Image
                  src={"/Brackets1.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-75 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>

              <div className="div2  relative left-1/3 scale-170  flex justify-center items-center">
                <Image
                  src={"/cloud-icon.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-150 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
              <div className="div  flex justify-center items-center">
                <Image
                  src={"/vscode.webp"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce relative left-[450px] scale-75 delay-100 xl transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
              <div className="div5  relative left-36 top-12 scale-110 flex justify-center items-center">
                <Image
                  src={"/coffee.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-200 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
              <div className="div4  relative right-[250px] flex justify-center items-center">
                <Image
                  src={"/group 1.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-300 transition-all duration-200 cursor-pointer"
                  width={150}
                  height={150}
                />
              </div>
              <div className="div3 flex justify-center items-center">
                <Image
                  src={"/headphone1.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-300 transition-all duration-200 cursor-pointer"
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
        <p className="text-center uppercase relative text-gray-200 font-semibold bg  text-6xl h-auto mix-blend-difference m-0 p-0">
          Hi, I am Anish
        </p>
        <p className="text-center uppercase relative   text-gray-500 text-xl m-2 h-auto mix-blend-difference ">
          I build intelligent systems that transform data into actionable
          insights...
        </p>
      </div>
      <div className="h-screen"></div>

      <div className=" relative rotate-90 ml-0">
        <VerticalNav />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </section>
  );
}
