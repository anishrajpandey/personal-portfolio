import React from "react";
import "./../styles/About.css";

const AboutMe = () => {
  return (
    <div id={"aboutMain"} className="mt-[25vh] p-2 md:px-8">
      <div className="text-2xl text-center justify-center items-center  gap-1">
        <span>A little bit </span>
        <span className="text-4xl font-bold text-[#008074]">About Me</span>
      </div>
      <p className="mt-4">
        I am a passionate machine learning enthusiast with a keen interest in
        exploring the latest advancements in AI and data science. My journey has
        been fueled by a desire to leverage technology to solve real-world
        problems and make a positive impact.
      </p>
      <p className="mt-4">
        I enjoy working on projects that challenge my skills and push me to
        learn new things. Whether it's building predictive models, analyzing
        data, or diving into the world of deep learning, I'm always eager to
        take on new challenges.
      </p>
    </div>
  );
};

export default AboutMe;
