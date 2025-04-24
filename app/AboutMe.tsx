import React from "react";
import "./../styles/About.css";
import FlareCursor from "./FlareCursor";
import Image from "next/image";
// import CustomCursor from "./CustomCursor";

const AboutMe = () => {
  return (
    <>
      <FlareCursor />
      <div id={"aboutMain"} className="mt-[25vh] px-2 md:px-8">
        <div className="text-2xl md:text-5xl font-bold tracking-wide text-center justify-center items-center  gap-1">
          <span>A little bit </span>
          <span className="  text-[#008074]">About Me</span>
        </div>
        <main className="flex flex-col-reverse md:flex-row justify-center items-center h-[80vh]">
          <div className="relative z-100 w-[50vw] h-full p-2 md:p-8 flex flex-col justify-center items-center">
            <div className="absolute -z-100 bottom-6 opacity-5">
              <Image
                src={"/grayscaleBanner.png"}
                alt="error"
                className="myImage w-full object-contain h-full scale-300 "
                width={400}
                height={400}
              />
            </div>
            I am a passionate machine learning enthusiast with a keen interest
            in exploring the latest advancements in AI and data science. My
            journey has been fueled by a desire to leverage technology to solve
            real-world problems and make a positive impact.
          </div>
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
