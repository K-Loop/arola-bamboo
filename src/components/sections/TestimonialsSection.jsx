import React, { useState } from 'react';
import { testimonials } from '../../data/contentData';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIdx];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] border-b border-[#E2D8C3] relative overflow-hidden">
      
      {/* Subtle Quote Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D8CBB6]/25 pointer-events-none">
        <Quote className="w-96 h-96 opacity-40" />
      </div>

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] block mb-2">
            Community, Enterprise & Patron Voices
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4.5vw,5.5rem)] font-bold tracking-tight text-[#171815]">
            VOICES OF THE<br />
            <span className="italic font-normal text-[#2A5412]">AROLA COMMUNITY.</span>
          </h2>
        </div>

        {/* Elevated Quotation Card */}
        <div className="max-w-5xl mx-auto bg-white p-10 sm:p-14 xl:p-16 rounded-3xl border-2 border-[#D8CBB6] shadow-[0_16px_50px_rgba(23,24,21,0.08)] text-center space-y-8 min-h-[260px] flex flex-col justify-center">
          <p className="font-serif text-[clamp(1.75rem,3.2vw,3.75rem)] text-[#171815] font-light italic leading-tight tracking-tight">
            "{current.quote}"
          </p>

          <div className="pt-6 border-t border-[#D8CBB6]/60">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              {current.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#171815]/75 mt-1 font-medium">
              {current.role} • <span className="font-bold text-[#A87B28]">{current.city}</span>
            </p>
          </div>
        </div>

        {/* Navigation Slider Controls */}
        <div className="max-w-5xl mx-auto mt-10 pt-6 flex items-center justify-between">
          <div className="flex gap-2.5 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === i ? 'w-12 bg-forest' : 'w-2.5 bg-[#D8CBB6] hover:bg-forest/60'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-white border-2 border-[#D8CBB6] hover:bg-[#FAF7F0] text-charcoal transition-all hover:scale-105 shadow-sm cursor-pointer"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-white border-2 border-[#D8CBB6] hover:bg-[#FAF7F0] text-charcoal transition-all hover:scale-105 shadow-sm cursor-pointer"
              aria-label="Next quote"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
