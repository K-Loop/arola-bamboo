import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Leaf, Shield, Sparkles } from 'lucide-react';
import ArolaLogo from '../common/ArolaLogo';

export default function WhyBambooSection() {
  const principles = [
    {
      num: '01',
      title: 'RENEWABLE',
      subtitle: 'Fastest-Growing Flora on Earth',
      desc: 'Matures in just 3 to 5 years, self-regenerating continually from its root rhizome without requiring replanting, pesticides, or chemical fertilizers.',
      stat: '3-5 YRS',
      statLabel: 'Harvest Cycle',
      icon: RefreshCw,
    },
    {
      num: '02',
      title: 'BIODEGRADABLE',
      subtitle: 'Zero Microplastic Residue',
      desc: '100% compostable organic biomass that returns to fertile soil in under 6 months, generating zero persistent polymers or ocean toxins.',
      stat: '100%',
      statLabel: 'Compostable Biomass',
      icon: Leaf,
    },
    {
      num: '03',
      title: 'STRUCTURAL DENSITY',
      subtitle: 'Tensile Strength of 28,000 PSI',
      desc: 'Boasts a tensile strength exceeding mild structural steel, offering natural resilience against heat, mechanical load, and daily wear.',
      stat: '28,000 PSI',
      statLabel: 'Tensile Strength',
      icon: Shield,
    },
    {
      num: '04',
      title: 'HERITAGE ARTISTRY',
      subtitle: 'Indian Handcrafted Beauty',
      desc: 'Organic wood grain nodes and warm tactile luxury that age gracefully with time, infusing timeless character into contemporary spaces.',
      stat: '1000+',
      statLabel: 'Artisan Custodians',
      icon: Sparkles,
    },
  ];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-forest-dark text-sand-50 relative overflow-hidden">
      
      {/* Background Subtle Ambient Texture */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-bamboo-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-warm-bamboo/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-white/10">
          <div>
            <div className="mb-4">
              <ArolaLogo className="h-9" />
            </div>
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-warm-bamboo block">
              The Material Revolution
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04] mt-1">
              WHY BAMBOO?
            </h2>
          </div>

          <p className="text-base sm:text-lg xl:text-xl text-sand-200/90 font-light max-w-xl leading-relaxed">
            "One of nature's most versatile, regenerative, and resilient materials on Earth — engineered by nature, refined by human craft."
          </p>
        </div>

        {/* 4 Horizontally Arranged Wide Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {principles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col justify-between p-8 xl:p-10 rounded-3xl bg-white/[0.08] border border-white/20 hover:border-warm-bamboo hover:bg-white/[0.14] transition-all duration-500 shadow-2xl backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-warm-bamboo tracking-widest">
                      {p.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 text-warm-bamboo flex items-center justify-center group-hover:scale-110 group-hover:bg-warm-bamboo group-hover:text-forest-dark transition-all duration-300 shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-warm-bamboo/90 block mb-1">
                    {p.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight text-white group-hover:text-warm-bamboo transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sand-100 font-light leading-relaxed mt-4">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-warm-bamboo block">
                      {p.stat}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-sand-200 font-medium">
                      {p.statLabel}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-sand-300 font-semibold">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
