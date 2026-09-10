import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const panels = [
    {
      num: '01',
      title: 'PLASTIC DEPENDENCE',
      subtitle: 'Global Environmental Degradation',
      desc: 'Single-use plastic consumer products contaminate waterways, devastate marine ecosystems, and remain in soil for 500+ years. Over 300 million tonnes of non-recyclable synthetic polymers enter global waste streams annually.',
      solution: 'Arola converts 100% natural seasoned bamboo into durable, fully biodegradable consumer alternatives that return to fertile earth as organic nutrients in months.'
    },
    {
      num: '02',
      title: 'LIMITED SUSTAINABLE ALTERNATIVES',
      subtitle: 'The Market Practicality Gap',
      desc: 'Conscious consumers and enterprises often struggle to find sustainable alternatives that are truly practical, heat-resistant, beautiful, and accessible without aesthetic compromise.',
      solution: 'We engineer precision lathe joinery, vacuum borax treatments, and food-grade herbal coatings to ensure our bamboo products withstand rigorous daily commercial and household use.'
    },
    {
      num: '03',
      title: 'RURAL LIVELIHOOD GAPS',
      subtitle: 'Seasonal Unemployment & Migration',
      desc: 'Agricultural craft communities in Southern India face 6+ months of seasonal unemployment, forcing families into precarious urban migration and leaving ancestral craft knowledge forgotten.',
      solution: 'Arola establishes decentralized rural training academies and guaranteed buy-back production clusters that empower over 1,000 women and tribal artisans year-round.'
    }
  ];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] border-b border-[#E2D8C3]">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#E2D8C3]">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] block mb-2">
              The Imperative For Systemic Change
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-[#171815] leading-[1.04]">
              WE'RE CHANGING<br />
              <span className="italic font-normal text-[#2A5412]">WHAT COMES NEXT.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#171815]/80 max-w-md font-light leading-relaxed">
            Addressing environmental damage and economic vulnerability simultaneously with nature's most resilient biomass.
          </p>
        </div>

        {/* 3 Full-Width High-Contrast Card Panels */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {panels.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-8 sm:py-10 xl:py-12 px-6 sm:px-10 rounded-3xl bg-white border-2 border-[#D8CBB6] shadow-[0_8px_30px_rgba(23,24,21,0.06)] hover:shadow-[0_16px_45px_rgba(30,50,8,0.12)] hover:border-forest/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
                
                {/* Number & Main Title (5 cols) */}
                <div className="lg:col-span-5 flex items-start gap-6">
                  <span className="font-mono text-3xl sm:text-4xl xl:text-5xl font-bold text-warm-bamboo shrink-0 bg-[#FAF7F0] w-16 h-16 rounded-2xl flex items-center justify-center border border-[#D8CBB6]">
                    {p.num}
                  </span>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[#4F722A] block mb-1.5">
                      {p.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171815] tracking-tight leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Arola Solution (7 cols) */}
                <div className="lg:col-span-7 space-y-4 lg:pl-6">
                  <p className="text-sm sm:text-base text-[#171815]/80 font-light leading-relaxed">
                    {p.desc}
                  </p>
                  
                  {/* Solution highlight box */}
                  <div className="p-5 rounded-2xl bg-[#F5EFE6] border-2 border-[#D8CBB6] shadow-sm space-y-1.5">
                    <span className="text-[11px] uppercase font-bold tracking-widest text-forest flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                      <span>The Arola Solution</span>
                    </span>
                    <p className="text-xs sm:text-sm text-[#171815] font-medium leading-relaxed pl-6">
                      {p.solution}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
