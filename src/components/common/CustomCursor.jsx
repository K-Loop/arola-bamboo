import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none select-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center dot */}
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-warm-bamboo fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 shadow-sm pointer-events-none select-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer tracking ring */}
      <motion.div
        className={`rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 border transition-colors duration-200 pointer-events-none select-none ${
          isHovered
            ? 'border-warm-bamboo bg-warm-bamboo/15 w-12 h-12'
            : 'border-warm-bamboo/60 w-8 h-8'
        }`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </div>
  );
}
