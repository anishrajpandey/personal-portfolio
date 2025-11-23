"use client";
import React from "react";
import Image from "next/image";

const experienceData = [
  {
    company: "Texas State University – Technology Resources",
    role: "Mobile and Web Systems QA Tester",
    location: "San Marcos, TX",
    period: "Nov 2025 - Present",
    description: [
      "Conducted functional and accessibility testing on TXST Mobile and 20+ university web apps, identified over 100 issues, and verified feature readiness before release.",
      "Reproduced, documented, and reported defects in TDX and GitHub, which reduced post-release issues by 15% through clear, actionable bug reports.",
    ],
    gogoImage: "/gogo/gogo_orange_nerd.png",
  },
  {
    company: "Summer Math Camp – Mathworks",
    role: "Math Tutor Fellow",
    location: "San Marcos, TX",
    period: "June 2025 - July 2025",
    description: [
      "Taught Mathematics to 25+ Middle School Students in a practical setting.",
      "Collaborated with fellow instructors to integrate real-world applications, boosting student interest in advanced topics.",
    ],
    gogoImage: "/gogo/gogo_math.png",
  },
  {
    company: "Vision Ventures Pvt Ltd",
    role: "Full Stack Web Developer",
    location: "Kathmandu, Nepal",
    period: "August 2023 - March 2025",
    description: [
      "Built the frontend and backend of the company’s web platform, and maintained the database by using React, Next.js, Node.js, and MongoDB.",
      "Developed and maintained an internal automation tool used by 15+ employees, integrating 10 API endpoints to streamline workflows and improve system efficiency.",
    ],
    gogoImage: "/gogo/gogo_keyboard.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-[#008074]">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional experience and leadership roles.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

          <div className="space-y-24">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center relative gap-8 md:gap-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#008074] rounded-full border-4 border-white shadow-md z-10 hidden md:block"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-4 md:px-12 relative">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#008074] relative group z-10">
                    <span className="inline-block px-3 py-1 bg-[#008074]/10 text-[#008074] rounded-full text-sm font-semibold mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.role}
                    </h3>
                    <h4 className="text-lg text-gray-600 font-medium mb-2">
                      {item.company}
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">{item.location}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Gogo Image Side */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                   <div className="hidden md:block relative w-80 h-80 opacity-90 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                      <Image
                         src={item.gogoImage}
                         alt={`${item.role} Gogo`}
                         layout="fill"
                         objectFit="contain"
                      />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
