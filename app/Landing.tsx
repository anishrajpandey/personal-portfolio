"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "../styles/icons.css";
import {
  Code,
  Headphones,
  BrainCircuit,
  BookOpen,
  Video,
  Rocket,
  Terminal,
  Cpu,
  Database,
  Globe,
  Server,
  Laptop,
  Keyboard,
  Braces,
  Command,
  Bot,
  Sparkles,
  Network,
  Workflow,
  TrendingUp,
  Target,
  Sun,
  Zap,
  Lightbulb,
  Mic,
  Music,
  Feather,
  LucideIcon,
} from "lucide-react";
import * as motion from "motion/react-client";
import {
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";

interface BackgroundIcon {
  Icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  delay: number;
  scale: number;
  opacity: number;
  moveXDuration: number;
  moveYDuration: number;
  moveXOffset: number;
  moveYOffset: number;
}

interface FloatingIconProps {
  iconData: BackgroundIcon;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function FloatingIcon({ iconData, mouseX, mouseY }: FloatingIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position on mount and resize
  useEffect(() => {
    const updatePosition = () => {
      if (typeof window !== "undefined") {
        const x = (parseFloat(iconData.left) / 100) * window.innerWidth;
        const y = (parseFloat(iconData.top) / 100) * window.innerHeight;
        setPosition({ x, y });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [iconData.left, iconData.top]);

  const distance = useTransform<number, number>([mouseX, mouseY], ([x, y]) => {
    const dx = x - position.x;
    const dy = y - position.y;
    return Math.sqrt(dx * dx + dy * dy);
  });

  // Proximity radius: 100px (Torchlight effect)
  const scale = useTransform(distance, [0, 100], [1.5, 1]);
  const opacity = useTransform(distance, [0, 100], [1, iconData.opacity]);
  const filter = useTransform(
    distance,
    [0, 100],
    [
      "drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))",
      "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
    ],
  );

  // Smooth out the transformations - Quicker response
  const smoothScale = useSpring(scale, { stiffness: 500, damping: 25 });
  const smoothOpacity = useSpring(opacity, { stiffness: 500, damping: 25 });

  return (
    <motion.div
      ref={iconRef}
      className="absolute pointer-events-auto cursor-pointer text-white transition-colors"
      style={{
        top: iconData.top,
        left: iconData.left,
        scale: smoothScale,
        opacity: smoothOpacity,
        filter: filter,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: iconData.opacity, // Base animation target (overridden by style prop for proximity)
        scale: 1,
        x: [0, iconData.moveXOffset, 0],
        y: [0, iconData.moveYOffset, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: iconData.delay },
        scale: { duration: 1, delay: iconData.delay },
        x: {
          duration: iconData.moveXDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: iconData.moveYDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <iconData.Icon size={iconData.size} strokeWidth={1.5} />
    </motion.div>
  );
}

interface DialogBubbleProps {
  text: string;
  className?: string;
  tailClassName?: string;
}

function DialogBubble({
  text,
  className = "",
  tailClassName = "",
}: DialogBubbleProps) {
  const words = text.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute z-40 max-w-xs p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 ${className}`}
    >
      {/* Speech bubble tail */}
      <div
        className={`absolute w-4 h-4 bg-white/90 transform rotate-45 border-b border-r border-gray-100 ${tailClassName}`}
      ></div>

      <p className="text-gray-800 font-medium text-lg leading-relaxed">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: i * 0.1 + 0.5 }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}

export default function Landing() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [backgroundIcons, setBackgroundIcons] = useState<BackgroundIcon[]>([]);

  const [showHint, setShowHint] = useState(false);

  const mouseX = useMotionValue(-1000); // Start off-screen
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    // Show hint after 10 seconds, hide after 4 seconds (total 14s)
    const t1 = setTimeout(() => setShowHint(true), 15000);
    const t2 = setTimeout(() => setShowHint(false), 19000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY + window.scrollY); // Account for scroll if needed, but fixed position uses clientY
    // Actually, icons are in a "fixed" container?
    // The container is absolute w-full h-full top-0 left-0 z-30 inside a relative div.
    // The relative div is inside a fixed div?
    // Line 85: fixed w-screen h-fit.
    // So clientX/Y should be correct relative to the viewport.
    // Let's stick to client coordinates.
  };

  // Update mouse motion values on window mouse move to catch it everywhere
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => window.removeEventListener("mousemove", handleWindowMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const iconTypes = [
      Code,
      Headphones,
      BrainCircuit,
      BookOpen,
      Video,
      Rocket,
      Terminal,
      Cpu,
      Database,
      Globe,
      Server,
      Laptop,
      Keyboard,
      Braces,
      Command,
      Bot,
      Sparkles,
      Network,
      Workflow,
      TrendingUp,
      Target,
      Sun,
      Zap,
      Lightbulb,
      Mic,
      Music,
      Feather,
    ];

    const generateIcons = () => {
      const icons: BackgroundIcon[] = [];
      const count = 65; // Increased density

      let attempts = 0;
      while (icons.length < count && attempts < 2000) {
        attempts++;
        const Icon = iconTypes[Math.floor(Math.random() * iconTypes.length)];

        // Uniform positioning
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        // Circular Safe Zone (Center Focus)
        const dx = left - 50;
        const dy = top - 50;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);

        if (distFromCenter < 22) continue; // Clear safe zone

        // Even spacing check
        let tooClose = false;
        for (const existing of icons) {
          const exDx = parseFloat(existing.left) - left;
          const exDy = parseFloat(existing.top) - top;
          const dist = Math.sqrt(exDx * exDx + exDy * exDy);
          if (dist < 9) {
            tooClose = true;
            break;
          }
        }
        if (tooClose) continue;

        // Uneven Sizes
        const size = Math.random() * 30 + 20;

        // Opacity
        const opacity = Math.random() * 0.1 + 0.05;

        icons.push({
          Icon,
          top: `${top}%`,
          left: `${left}%`,
          size: size,
          delay: Math.random() * 0.5,
          scale: 1,
          opacity: opacity,
          moveXDuration: Math.random() * 15 + 10, // 10-25s
          moveYDuration: Math.random() * 15 + 10, // 10-25s
          moveXOffset: Math.random() * 30 - 15, // -15px to 15px
          moveYOffset: Math.random() * 30 - 15, // -15px to 15px
        });
      }
      setBackgroundIcons(icons);
    };

    generateIcons();
  }, []);

  return (
    <section className="relative h-screen">
      {/* main landing page */}
      <div
        id="home"
        ref={backgroundRef}
        className="flex justify-center  w-screen h-fit overflow-hidden"
      >
        <div
          // style={{ y: backgroundY }}
          className=" w-screen h-10/12 threedcontainer relative"
        >
          <div className="fixed top-0 bg-white z-10 w-screen h-auto"></div>

          <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
            <div className="w-screen min-h-16 text-2xl text-center m-0 p-0"></div>
          </div>
          <div className="relative">
            <iframe
              className=" w-screen h-[75vh]"
              src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0&scrollwheel=0"
            />

            {showHint && (
              <DialogBubble
                text="Scroll down to learn more about Anish"
                className="top-[20%] right-[10%] md:right-[20%] max-w-sm"
                tailClassName="-bottom-2 left-4"
              />
            )}
            <div className="parent pointer-events-none absolute w-full h-full top-0 left-0 z-30 overflow-hidden">
              {backgroundIcons.map((item, index) => (
                <FloatingIcon
                  key={index}
                  iconData={item}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="heroTextBox  ">
        <p className="text-center uppercase relative text-[#008074] font-semibold text-6xl h-auto  m-0 p-0">
          Hi, I am Anish
        </p>
        <p className="text-center uppercase relative    text-xl m-2 h-auto ">
          I am an <strong>AI Engineer</strong> building solutions for real world
          problems
        </p>
      </div>
    </section>
  );
}
