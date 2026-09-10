import React from 'react';
import { motion } from 'framer-motion';
import { impactStats } from '../../data/contentData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ImpactStatsSection() {
  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#132104] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[750px] h-[750px] bg-[#3F5F0B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D9B77A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-white/10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#D9B77A] block mb-2">
              Measurable Environmental & Social Stewardship
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              BUILT TO CREATE<br />
              <span className="italic font-normal text-[#D9B77A]">MEASURABLE IMPACT.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-md leading-relaxed">
            We measure our progress in rural livelihoods secured, hectares of soil restored, and plastic kilograms prevented from entering Indian oceans.
          </p>
        </div>

        {/* Large Editorial Numbers Grid - 5 Columns across wide desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-10 pt-4">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.05] border border-white/10 hover:border-[#D9B77A]/50 hover:bg-white/[0.08] transition-all duration-500 space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#D9B77A] tracking-widest block font-bold">0{idx + 1}</span>
                <div className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-white tracking-tight flex items-baseline mt-4">
                  <span>{stat.value}</span>
                  <span className="text-[#D9B77A] text-3xl sm:text-4xl xl:text-5xl">{stat.suffix}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white leading-snug mt-3">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-2 border-t border-white/10">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D9B77A]">
            07 / 17 • Community ESG Metrics
          </span>
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#D9B77A] transition-colors"
          >
            <span>Explore Full Impact Report</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
