import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { constructionProjects } from '../../data/contentData';
import { ArrowRight, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';

export default function GreenConstructionSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = constructionProjects[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? constructionProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === constructionProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-forest-dark text-sand-50 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute -top-32 right-1/4 w-[700px] h-[700px] bg-bamboo-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-warm-bamboo block mb-2">
              Architectural & Structural Studio
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              BUILDING GREEN.<br />
              <span className="italic font-normal text-warm-bamboo">BUILDING RESILIENT.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:items-end gap-2 shrink-0">
            <span className="text-xs text-sand-300/80 font-mono tracking-widest uppercase">
              Carbon-Negative Structural Engineering
            </span>
            <Link
              to="/construction"
              className="inline-flex items-center gap-2 text-xs font-bold text-warm-bamboo hover:text-white uppercase tracking-[0.2em] group"
            >
              <span>Explore All Projects ({constructionProjects.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Major Architectural Showcase (7 cols / 5 cols on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Large Project Frame (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] xl:aspect-[16/9.5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-forest">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              
              {/* Client Tag */}
              <span className="absolute top-5 left-5 bg-forest-dark/95 backdrop-blur-md text-warm-bamboo text-xs font-semibold px-4 py-2 rounded-full border border-warm-bamboo/20 shadow-luxury">
                {current.client}
              </span>

              {/* Navigation Controls */}
              <div className="absolute bottom-5 right-5 flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3.5 rounded-full bg-forest-dark/85 hover:bg-forest-dark text-sand-50 border border-white/20 backdrop-blur-md transition-all hover:scale-105"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3.5 rounded-full bg-forest-dark/85 hover:bg-forest-dark text-sand-50 border border-white/20 backdrop-blur-md transition-all hover:scale-105"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {constructionProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    activeIdx === idx
                      ? 'bg-white/15 border-warm-bamboo shadow-luxury'
                      : 'bg-white/5 border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <span className="font-mono text-xs text-warm-bamboo block font-bold">0{idx + 1}</span>
                  <span className="text-xs sm:text-sm font-serif font-bold text-sand-100 truncate block mt-1">{p.client}</span>
                  <span className="text-[10px] text-sand-300/80 block mt-0.5">{p.location}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Project Details (5 cols) */}
          <div className="lg:col-span-5 space-y-7 lg:pl-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-warm-bamboo block font-semibold">
                {current.location} • {current.area}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-white mt-2 leading-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-warm-bamboo/90 font-medium mt-2">
                Scope: {current.scope}
              </p>
            </div>

            <p className="text-sm sm:text-base text-sand-200/90 font-light leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-[11px] uppercase font-bold tracking-wider text-warm-bamboo block">
                Engineering Highlights:
              </span>
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-sand-200">
                  <Check className="w-4 h-4 text-warm-bamboo shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to="/construction"
                className="inline-flex items-center gap-2 px-8 py-4 bg-warm-bamboo hover:bg-warm-gold text-forest-dark font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all"
              >
                <span>View Full Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
