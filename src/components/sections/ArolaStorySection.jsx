import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, HeartHandshake, Sparkles } from 'lucide-react';

export default function ArolaStorySection() {
  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#F4EFE6] border-b border-[#D8CBB6] relative">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Large Artisan Image (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3.8] xl:aspect-[4/3.6] bg-sand-light">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
                alt="Women Artisans Hand-Turning Bamboo in Madurai"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlaid Quote Pill */}
            <div className="absolute -bottom-8 left-4 right-4 sm:left-10 sm:right-10 bg-forest-dark/95 text-sand-50 p-6 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md text-center">
              <p className="font-serif italic text-base sm:text-lg text-sand-100 leading-snug">
                "When you choose Arola, you sustain not only the planet, but the hands and generational craft that nurture it."
              </p>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-warm-bamboo block mt-2">
                Dharshana & Suthagar Selvaraj — Founders & Custodians
              </span>
            </div>
          </div>

          {/* Right Content Column (6 cols) */}
          <div className="lg:col-span-6 space-y-7 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-[#4F722A] text-xs font-bold uppercase tracking-[0.3em]">
              <MapPin className="w-4 h-4 text-forest" />
              <span>Headquartered in Madurai, Tamil Nadu</span>
            </div>

            <h2 className="font-serif text-[clamp(2.5rem,4.8vw,5.5rem)] font-bold text-[#171815] leading-[1.05] tracking-tight">
              MORE THAN PRODUCTS.<br />
              <span className="italic font-normal text-[#2A5412]">A SACRED LIVELIHOOD.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#171815]/85 leading-relaxed font-light">
              Founded in the historic temple heartland of Madurai, <b className="font-semibold text-[#171815]">Arola Bamboo Products Pvt Ltd</b> was born out of a profound purpose: to replace disposable plastic commodities by creating timeless, functional bamboo lifestyle goods and green architectural spaces.
            </p>

            <p className="text-sm sm:text-base text-[#171815]/75 leading-relaxed font-light">
              We partner directly with over <b className="font-semibold text-[#171815]">1,000 rural women Self Help Group (SHG)</b> members and tribal artisan clusters across Southern Tamil Nadu — offering fair living wages, mastercraft fellowships, and generational dignity.
            </p>

            {/* Metric Strip with High Contrast Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-5 rounded-2xl bg-white border-2 border-[#D8CBB6] shadow-md">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-forest block">1000+</span>
                <span className="text-xs text-[#171815]/80 mt-1 block font-semibold">Rural Artisans & Women</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border-2 border-[#D8CBB6] shadow-md">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#A87B28] block">100%</span>
                <span className="text-xs text-[#171815]/80 mt-1 block font-semibold">Fair-Trade Local Sourcing</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border-2 border-[#D8CBB6] shadow-md col-span-2 sm:col-span-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-forest block">30+</span>
                <span className="text-xs text-[#171815]/80 mt-1 block font-semibold">SHG Village Hubs</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest hover:bg-forest-light text-sand-50 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-luxury transition-all group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 text-warm-bamboo group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/impact"
                className="text-xs font-bold text-forest hover:text-bamboo-green uppercase tracking-[0.2em]"
              >
                View Impact Report →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
