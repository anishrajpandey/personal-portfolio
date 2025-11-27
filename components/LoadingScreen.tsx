"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingTexts = [
  "Brewing coffee... ☕",
  "Loading awesomeness... 🚀",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay before unmounting
          return 100;
        }
        // Random increment between 1 and 5
        return Math.min(prev + Math.random() * 5, 100);
      });
    }, 100);

    // Cycle through texts
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Gogo Face Animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
          filter: [
            "drop-shadow(0 0 0px rgba(0, 128, 116, 0))",
            "drop-shadow(0 0 20px rgba(0, 128, 116, 0.6))",
            "drop-shadow(0 0 0px rgba(0, 128, 116, 0))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-48 h-48 mb-12"
      >
        <Image
          src="/gogo/gogo_orange_face.png"
          alt="Loading Gogo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-96 h-2 bg-gray-100 rounded-full overflow-hidden relative mb-6">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#008074]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Percentage */}
      <div className="text-4xl font-bold text-[#008074] mb-4 font-mono">
        {Math.round(progress)}%
      </div>

      {/* Fun Text */}
      <motion.p
        key={textIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-gray-500 font-medium text-lg h-8"
      >
        {loadingTexts[textIndex]}
      </motion.p>
    </div>
  );
}
