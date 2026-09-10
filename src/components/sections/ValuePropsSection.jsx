import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ValuePropsSection() {
  const values = [
    {
      title: 'ECO-FRIENDLY & CERTIFIED',
      subtitle: 'Zero Plastic Footprint',
      desc: '100% natural, biodegradable alternatives to synthetic commodities, certified food-safe with organic herbal oils and non-toxic seasoning finishes.'
    },
    {
      title: 'COMMUNITY-DRIVEN',
      subtitle: 'Rural Women Empowerment',
      desc: 'Equitable monthly living livelihoods, healthcare fellowships, and mastercraft training for 1,000+ Self Help Group members across Madurai.'
    },
    {
      title: 'CULTURALLY ROOTED',
      subtitle: 'Heritage Craft & Ergonomic Utility',
      desc: 'Centuries of indigenous Tamil bamboo joinery, lathe-turned ergonomics, and artisanal hand-weaving refined for contemporary global living.'
    },
    {
      title: 'CUSTOMIZABLE AT SCALE',
      subtitle: 'Corporate & Hospitality Hampers',
      desc: 'Bespoke laser engraving, customized dimensions, and sustainable gift packaging for Fortune 500 summits, weddings, and luxury eco-resorts.'
    },
    {
      title: 'GREEN CONSTRUCTION',
      subtitle: 'Carbon-Negative Architecture',
      desc: 'Structural engineered bamboo pavilions, geodesic domes, resort gazebos, and modular acoustic interior ceiling treatments.'
    }
  ];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#F4EFE6] border-b border-[#D8CBB6]">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#D8CBB6]">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] block mb-2">
              The Arola Distinction
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-[#171815] leading-[1.04]">
              WHY AROLA<br />
              <span className="italic font-normal text-[#2A5412]">STANDS APART.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#171815]/80 font-light max-w-md leading-relaxed">
            An unwavering synthesis of natural material integrity, structural durability, circular design, and artisan dignity.
          </p>
        </div>

        {/* 5 Typography-Driven High-Contrast Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#D8CBB6] shadow-[0_8px_30px_rgba(23,24,21,0.06)] hover:shadow-[0_16px_45px_rgba(30,50,8,0.14)] hover:border-forest/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center group"
            >
              <div className="lg:col-span-1 font-mono text-xl font-bold text-warm-bamboo bg-[#FAF7F0] w-14 h-14 rounded-2xl flex items-center justify-center border border-[#D8CBB6]">
                0{idx + 1}
              </div>

              <div className="lg:col-span-5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#4F722A] block mb-1">
                  {v.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl xl:text-4xl font-bold text-[#171815] group-hover:text-forest transition-colors leading-snug">
                  {v.title}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#171815]/80 font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="lg:col-span-1 text-right hidden lg:block">
                <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#D8CBB6] group-hover:bg-forest group-hover:text-sand-50 text-forest flex items-center justify-center transition-all ml-auto shadow-sm">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
