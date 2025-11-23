"use client";
import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-[#008074]">Education</span> & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic foundation and community involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#008074]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Texas State University
            </h3>
            <p className="text-[#008074] font-medium mb-4">San Marcos, TX</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Major</h4>
                <p className="text-gray-600">Bachelor of Science in Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Minors</h4>
                <p className="text-gray-600">Applied Mathematics + Data Analytics</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithm Analysis",
                    "Object-Oriented Programming",
                    "Intro to Machine Learning",
                    "Database Management",
                    "Statistics",
                    "Discrete Mathematics",
                    "Probability",
                  ].map((course) => (
                    <span
                      key={course}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Extracurriculars Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#f47b3f]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Leadership & Community
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-gray-800">
                    Coding for Social Good Nepal
                  </h4>
                  <span className="text-sm text-gray-500">Jan 2024 - Present</span>
                </div>
                <p className="text-[#008074] text-sm font-medium mb-2">Officer</p>
                <p className="text-gray-600 text-sm">
                  Supported technology-focused community initiatives by organizing
                  coding workshops and outreach events. Assisted in mentoring
                  students and helping expand access to tech education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Education;
