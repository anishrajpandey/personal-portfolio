import React from "react";
import "./../styles/About.css";
import FlareCursor from "./FlareCursor";
import Image from "next/image";
// import CustomCursor from "./CustomCursor";

const AboutMe = () => {
  return (
    <>
      <FlareCursor />
      <div id={"aboutMain"} className="mt-[25vh] p-2 md:px-8">
        <div className="text-2xl md:text-5xl font-bold tracking-wide text-center justify-center items-center  gap-1">
          <span>A little bit </span>
          <span className="  text-[#008074]">About Me</span>
        </div>
        <main className="flex flex-col md:flex-row justify-center items-center h-[80vh]">
          <p className="w-[50vw] bg-amber-500">
            I am a passionate machine learning enthusiast with a keen interest
            in exploring the latest advancements in AI and data science. My
            journey has been fueled by a desire to leverage technology to solve
            real-world problems and make a positive impact.
          </p>
          <div className="w-[40vw] ">
            <Image
              src={"/image.png"}
              alt="error"
              className="myImage w-full object-contain h-full"
              width={2000}
              height={1600}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutMe;
