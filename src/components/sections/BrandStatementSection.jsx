import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStatementSection() {
  return (
    <section id="brand-statement" className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E2D8C3]">
      
      {/* Huge Subtle Bamboo Leaf Outline Moving Subtly in Background */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none opacity-[0.08] text-forest">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float">
          <path d="M20 180C40 130 90 60 180 20C160 80 120 150 20 180Z" stroke="currentColor" strokeWidth="2.5" />
          <path d="M50 180C80 130 130 80 180 20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M90 125C120 110 150 80 180 20" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10 space-y-8 sm:space-y-10">
        
        <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#5A6E32] block">
          Our Guiding Philosophy
        </span>

        {/* Large Wide Editorial Headline */}
        <h2 className="font-serif text-[clamp(2.75rem,5.5vw,7.5rem)] font-bold text-[#171815] leading-[1.04] tracking-tight max-w-6xl mx-auto">
          ONE MATERIAL.<br />
          <span className="italic font-normal text-[#2A5412]">ENDLESS POSSIBILITIES.</span>
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-lg sm:text-2xl md:text-3xl xl:text-4xl text-[#171815]/85 font-light max-w-4xl mx-auto leading-relaxed pt-2">
          From everyday essentials to beautiful spaces, we transform bamboo into products that are useful, responsible, and built to last.
        </p>

        {/* Subtle Accent Line */}
        <div className="pt-8 flex justify-center items-center gap-4">
          <span className="h-[2px] w-20 bg-warm-bamboo/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warm-bamboo" />
          <span className="h-[2px] w-20 bg-warm-bamboo/70" />
        </div>

      </div>
    </section>
  );
}
