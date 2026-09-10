import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-forest text-warm-bamboo hover:bg-forest-dark border-2 border-warm-bamboo/60 shadow-luxury hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <ArrowUp className="w-5 h-5 text-warm-bamboo transition-transform duration-300 group-hover:-translate-y-1" />

            {/* Glowing Ring Effect */}
            <span className="absolute inset-0 rounded-full bg-warm-bamboo/20 animate-ping pointer-events-none opacity-40" />

            {/* Hover Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 pointer-events-none bg-forest-dark text-sand-50 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md border border-warm-bamboo/30 whitespace-nowrap">
              Back to Top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
