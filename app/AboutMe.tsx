"use client";
import React, { useEffect, useState } from "react";
import "./../styles/About.css";
import FlareCursor from "./FlareCursor";
import Image from "next/image";
// import CustomCursor from "./CustomCursor";

const AboutMe = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

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
      <FlareCursor />
      <div id={"aboutMain"} className="mt-[25vh] px-2 md:px-8">
        <div className="text-2xl md:text-5xl font-bold tracking-wide text-center justify-center items-center  gap-1">
          <span>A little bit </span>
          <span className="  text-[#008074]">About Me</span>
        </div>
        <main className="flex flex-col-reverse md:flex-row justify-center items-center h-[80vh]">
          {/* text */}
          <div className="relative z-100 w-screen md:w-[50vw] h-full md:mt-52 p-2 md:p-8 text-xl md:text-2xl  text-gray-700">
            <div className="absolute -z-100 bottom-6 opacity-5">
              <Image
                src={"/grayscaleBanner.png"}
                alt="error"
                className="myImage w-full object-contain h-full scale-300 "
                width={400}
                height={400}
              />
            </div>
            {timeOfDay} I’m{" "}
            <span className="text-[#008074] font-semibold">Anish</span>, an
            undergraduate Computer Science student from Nepal at{" "}
            <span className="text-[#008074] font-semibold">
              {" "}
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
              Arificial Intelligence
            </span>
            . I love solving problems and creating meaningful solutions that
            make an impact. Let’s connect and build something amazing together!
            <div className="w-full py-16">
              <button
                className="bg-[var(--color-primary)]  hover:bg-[#265a49] text-white font-bold py-3 px-4 rounded-sm transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  console.log("clicked");
                }}
              >
                Lets Get to know each other
              </button>
            </div>
          </div>
          {/* image  */}
          <div className="w-[40vw] ">
            <Image
              src={"/image.png"}
              alt="error"
              className="myImage w-full object-contain h-full z-10 relative"
              width={1600}
              height={1600}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutMe;
