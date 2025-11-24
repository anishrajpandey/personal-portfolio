"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LifePage = () => {
  const hobbies = [
    {
      title: "Running",
      description:
        "Hitting the pavement clears my mind and keeps me energized. Whether it's a morning jog or a long-distance run, it's my meditation.",
      image: "/placeholder-running.jpg", // Replace with actual image
    },
    {
      title: "Swimming",
      description:
        "The water is my second home. Swimming allows me to disconnect and focus on rhythm and breath.",
      image: "/placeholder-swimming.jpg", // Replace with actual image
    },
    {
      title: "Weightlifting",
      description:
        "Pushing limits and building strength. The discipline of the gym translates to every other aspect of my life.",
      image: "/placeholder-weightlifting.jpg", // Replace with actual image
    },
    {
      title: "Writing",
      description:
        "Expressing thoughts and creativity through words. I love storytelling and sharing my experiences.",
      image: "/placeholder-writing.jpg", // Replace with actual image
    },
  ];

  const lifeEvents = [
    {
      year: "2023",
      title: "Started University",
      description:
        "Began my journey as a Computer Science student at Texas State University.",
      image: "/placeholder-university.jpg", // Replace with actual image
    },
    {
      year: "2024",
      title: "First Hackathon Win",
      description:
        "Collaborated with a team to build an innovative AI solution and took home the first prize.",
      image: "/placeholder-hackathon.jpg", // Replace with actual image
    },
    // Add more events as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            My <span className="text-[var(--color-primary)]">Life</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond the code, here's a glimpse into who I am, what I love, and the
            moments that define me.
          </p>
        </motion.div>

        {/* Hobbies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Hobbies & Passions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200 relative">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [Image: {hobby.title}]
                  </div>
                  {/* Uncomment when images are available
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Life Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Life Events
          </h2>
          <div className="space-y-8">
            {lifeEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="w-full md:w-1/3 h-64 bg-gray-200 relative">
                   {/* Placeholder for image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [Image: {event.title}]
                  </div>
                  {/* Uncomment when images are available
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <div className="text-sm font-bold text-[var(--color-secondary)] mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifePage;
