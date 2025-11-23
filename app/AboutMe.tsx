"use client";
import React, { useEffect, useState } from "react";
import "./../styles/About.css";
import Image from "next/image";
import { useContact } from "@/context/ContactContext";
import SocialIcons from "@/components/SocialIcons";

const AboutMe = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const { openContact } = useContact();

  useEffect(() => {
    const getTimeOfDay = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        return "Good Morning!";
      } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon!";
      } else if (hour >= 17 && hour < 21) {
        return "Good Evening!";
      } else {
        return "Hey I hope you are having a wonderful night! ";
      }
    };

    setTimeOfDay(getTimeOfDay());
  }, []);

  return (
    <>
      <div id={"aboutMain"} className="px-2 md:px-8 overflow-hidden">
        <div className="text-xl md:text-6xl font-bold tracking-wide text-center justify-center items-center gap-1 mb-5">
          <span>A little bit </span>
          <span className="text-[#008074]">About Me</span>
        </div>
        <main className="flex flex-col-reverse md:flex-row justify-center items-center min-h-[80vh]">
          {/* text */}
          <div className="relative z-0 w-screen md:w-[50vw] h-full md:mt-20 p-4 md:p-8 text-lg md:text-2xl text-gray-700">
            <div className="absolute -z-10 bottom-6 opacity-5 pointer-events-none">
              <Image
                src={"/grayscaleBanner.png"}
                alt="background banner"
                className="w-full object-contain h-full scale-150"
                width={400}
                height={200}
              />
            </div>
            <div className="relative z-10 group">
              {timeOfDay} I’m{" "}
              <span className="text-[#008074] font-semibold">Anish</span>, an
              undergraduate Computer Science student from Nepal at{" "}
              <span className="text-[#008074] font-semibold">
                Texas State University.
              </span>{" "}
              I’m passionate about building
              <span className="text-[#008074] font-semibold">
                {" "}
                full-stack applications
              </span>{" "}
              and exploring the exciting world of
              <span className="text-[#008074] font-semibold">
                {" "}
                Artificial Intelligence
              </span>
              . I love solving problems and creating meaningful solutions that
              make an impact. Let’s connect and build something amazing together!
            </div>
            <div className="w-full py-8 md:py-16 flex flex-col items-start gap-6">
              <button
                className="bg-[var(--color-primary)] hover:bg-[#265a49] text-white font-bold py-3 px-6 rounded-sm transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                onClick={openContact}
              >
                Let's Get to know each other
              </button>
              <SocialIcons iconSize={28} />
            </div>
          </div>
          {/* image */}
          <div className="w-[80vw] md:w-[40vw] relative group cursor-pointer aspect-square md:aspect-auto md:h-[600px]">
            <div className="relative w-full h-full">
              <Image
                src={"/image.png"}
                alt="Anish Grayscale"
                className="object-contain w-full h-full z-10 relative transition-opacity duration-500 group-hover:opacity-0"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              <Image
                src={"/aboutme.png"}
                alt="Anish Color"
                className="object-contain w-full h-full z-10 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutMe;
