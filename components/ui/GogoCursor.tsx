"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function GogoCursor() {
  const cursorSize = 80; // Increased size (w-20 = 80px)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Center the cursor
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
      
      const target = e.target as HTMLElement;
      
      // Check if hovering over specific sections
      const isHoveringTarget = target.closest('[data-gogo-cursor="true"]');
      
      // Check if hovering over clickable elements
      const clickable = target.closest('button, a, [role="button"], input, select, textarea, [onclick]');
      const isClickableElement = !!clickable;
      setIsClickable(isClickableElement);

      // Visible ONLY if hovering target AND NOT hovering a clickable element
      setIsVisible(!!isHoveringTarget && !isClickableElement);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  // Hide default cursor when custom cursor is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ 
        width: cursorSize,
        height: cursorSize,
        x, 
        y, 
        opacity: isVisible ? 1 : 0, 
      }}
      animate={{
        scale: isVisible ? 1 : 0.5,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-[0_0_20px_rgba(0,128,116,0.3)]"
      >
         <Image 
           src="/gogo/gogo_orange_face.png" 
           alt="Gogo Cursor" 
           fill 
           className="object-cover"
         />
      </motion.div>
    </motion.div>
  );
}
