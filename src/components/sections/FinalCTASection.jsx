import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Building2, Sparkles } from 'lucide-react';
import ArolaLogo from '../common/ArolaLogo';

export default function FinalCTASection() {
  return (
    <section className="w-full py-32 sm:py-44 xl:py-52 bg-[#132104] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Huge Subtle Bamboo Leaf Silhouette Animation */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none opacity-[0.06] text-[#D9B77A]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float">
          <path d="M20 180C40 130 90 60 180 20C160 80 120 150 20 180Z" stroke="currentColor" strokeWidth="3" />
          <path d="M50 180C80 130 130 80 180 20" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none opacity-[0.04] text-[#3F5F0B]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float" style={{ animationDelay: '2s' }}>
          <path d="M20 180C40 130 90 60 180 20C160 80 120 150 20 180Z" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10 space-y-8 sm:space-y-10">
        
        <div className="flex justify-center mb-4">
          <ArolaLogo className="h-12" />
        </div>

        <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#D9B77A] block">
          Embrace Mindful & Sustainable Living
        </span>

        {/* Huge Headline */}
        <h2 className="font-serif text-[clamp(3.5rem,8vw,9.5rem)] font-bold tracking-tight text-white leading-none">
          CHOOSE<br />
          <span className="italic font-normal text-[#D9B77A]">BETTER.</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl xl:text-3xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed pt-2">
          "Bring nature, Indian craft, and zero-plastic elegance into your everyday life."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-6">
          <Link
            to="/shop"
            className="px-10 sm:px-12 py-4 sm:py-5 bg-[#D9B77A] hover:bg-[#C9A464] text-[#132104] rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-luxury transition-all transform hover:-translate-y-1 flex items-center gap-2.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop The Collections</span>
          </Link>

          <Link
            to="/contact"
            className="px-10 sm:px-12 py-4 sm:py-5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.2em] backdrop-blur-md transition-all transform hover:-translate-y-1 flex items-center gap-2.5"
          >
            <Building2 className="w-4 h-4 text-[#D9B77A]" />
            <span>Partner / Custom Order</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
