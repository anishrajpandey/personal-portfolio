"use client";
import React from "react";
import Image from "next/image";

const skillsData = {
  Languages: ["JavaScript", "Python", "C++", "HTML/CSS", "SQL", "PHP"],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Jira",
    "AWS (S3)",
    "Jupyter Notebook",
  ],
  "Technologies/Frameworks": [
    "React",
    "Next.js",
    "Node.js",
    "Flask",
    "MongoDB",
  ],
  "Data/ML": [
    "scikit-learn",
    "PyTorch",
    "Keras",
    "TensorFlow",
    "NumPy",
    "Pandas",
    "Matplotlib",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical <span className="text-[#008074]">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My technical toolbox. I'm always learning and adding more to this
            list.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#008074] group"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#008074] transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-[#008074] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gogo Integration */}
      <div className="absolute bottom-0 right-0 md:right-10 w-32 md:w-48 opacity-90 pointer-events-none hidden md:block z-0">
        <Image
          src="/gogo/gogo_grey_thinking.png"
          alt="Thinking Gogo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Skills;
