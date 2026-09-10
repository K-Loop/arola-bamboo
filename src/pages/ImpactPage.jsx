import React from 'react';
import { impactStats } from '../data/contentData';
import { Users, Leaf, HeartHandshake, Award, Sparkles, Target, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ImpactPage() {
  const impactPillars = [
    {
      title: 'Women Empowerment in Madurai',
      tag: 'Economic Independence & Equity',
      desc: 'Over 65% of our artisan workforce comprises rural women from Self-Help Groups (SHGs). By training them in precision bamboo joinery and lathe carving, they transition from erratic seasonal agricultural labor to year-round dignified monthly incomes with health security.',
      stat: '650+ Women SHG Leaders',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Tribal Craft Revival',
      tag: 'Indigenous Heritage & Forest Rights',
      desc: 'Partnering with indigenous tribal settlements across the Western Ghats to honor ancestral bamboo split-weaving wisdom, offering fair living compensation 40% above prevailing regional craft benchmarks.',
      stat: '12 Forest Communities',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Youth Skills Academy',
      tag: 'Vocational Futures & Technology',
      desc: 'Vocational training fellowships for rural school dropouts and diploma holders, equipping young adults with computer-aided design (CAD) bamboo turning and structural architectural joinery.',
      stat: '100+ Youth Graduates Annually',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-[#FAF8F5] text-[#171815] min-h-screen">
      
      {/* 1. Hero */}
      <section className="w-full py-20 sm:py-28 xl:py-36 bg-[#132104] text-[#FAF8F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#D9B77A] block mb-3">
            Social & Ecological Stewardship
          </span>
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,6rem)] font-bold text-white leading-[1.04] max-w-5xl mx-auto">
            BUILT TO CREATE LASTING IMPACT.
          </h1>
          <p className="text-base sm:text-xl xl:text-2xl text-white/80 mt-6 leading-relaxed font-light max-w-3xl mx-auto">
            Every bamboo stem we harvest in Tamil Nadu replaces plastic, restores degraded rural soil, and feeds a proud artisan family with generational dignity.
          </p>
        </div>
      </section>

      {/* 2. Key Impact Metrics */}
      <section className="w-full py-16 sm:py-20 -mt-12 max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8">
          {impactStats.map((s, idx) => (
            <div
              key={s.id}
              className="p-8 xl:p-9 rounded-3xl bg-white border border-natural-sand shadow-luxury text-center flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#7D875E] block mb-2 font-bold">0{idx + 1}</span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1E3208] block">
                  {s.value}<span className="text-[#D9B77A] text-3xl sm:text-4xl">{s.suffix}</span>
                </span>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#171815] mt-2">
                  {s.label}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#171815]/70 mt-3 font-light leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Community Pillars */}
      <section className="w-full py-20 sm:py-28 max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-2">
            Our Human Ecosystem
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-[#171815] leading-tight">
            HOW WE EMPOWER COMMUNITIES
          </h2>
        </div>

        <div className="space-y-12 xl:space-y-16">
          {impactPillars.map((p, idx) => (
            <div
              key={p.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center p-8 sm:p-12 xl:p-14 rounded-3xl bg-white border border-natural-sand shadow-subtle hover:shadow-luxury transition-all"
            >
              <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-xs uppercase font-bold tracking-widest text-[#7D875E] block">
                  {p.tag}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-[#171815] leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-[#171815]/80 leading-relaxed font-light">
                  {p.desc}
                </p>
                <div className="pt-2 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-natural-sand text-[#1E3208] font-serif font-bold text-base">
                  <Sparkles className="w-4 h-4 text-[#D9B77A]" />
                  <span>{p.stat}</span>
                </div>
              </div>

              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-3xl overflow-hidden aspect-[4/3] xl:aspect-[4/3.2] bg-sand-200 shadow-md">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Environmental Carbon Offset */}
      <section className="w-full py-28 sm:py-36 bg-[#F3EDE4] border-y border-natural-sand">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#1E3208]">
                Eco Calculations & Carbon Metrics
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-[#171815] leading-tight">
                Carbon Sequestration & Soil Health
              </h3>
              <p className="text-sm sm:text-base text-[#171815]/80 leading-relaxed font-light">
                Bamboo generates <b>35% more oxygen</b> than an equivalent stand of trees and absorbs up to <b>12 tonnes of CO2 per hectare annually</b>. Its dense fibrous root rhizomes bind topsoil, preventing acute water runoff and soil erosion in semi-arid zones of Southern Tamil Nadu.
              </p>
              <div className="grid grid-cols-2 gap-5 pt-2">
                <div className="p-6 rounded-2xl bg-white border border-natural-sand shadow-sm">
                  <span className="font-serif text-3xl font-bold text-[#1E3208] block">4.5 Lakh kg</span>
                  <p className="text-xs sm:text-sm text-[#171815]/70 mt-1 font-medium">Estimated Plastic Averted</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-natural-sand shadow-sm">
                  <span className="font-serif text-3xl font-bold text-[#D9B77A] block">100%</span>
                  <p className="text-xs sm:text-sm text-[#171815]/70 mt-1 font-medium">Zero Chemical Bleaches</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#132104] text-[#FAF8F5] border border-white/10 space-y-6 shadow-luxury">
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#D9B77A]">2030 ESG Roadmap</h4>
                <ul className="space-y-4 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D9B77A] shrink-0 mt-0.5" />
                    <span>Scale artisan fellowships to empower 5,000+ rural women by 2030.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D9B77A] shrink-0 mt-0.5" />
                    <span>Establish 5 community-owned decentralized solar bamboo vacuum treatment kilns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D9B77A] shrink-0 mt-0.5" />
                    <span>Construct 100,000 sq.ft of affordable carbon-neutral bamboo school classrooms and clinics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="w-full py-24 sm:py-32 text-center bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 max-w-4xl space-y-6">
          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-[#171815]">
            Be a conscious partner in this transformation.
          </h3>
          <p className="text-base sm:text-lg text-[#171815]/70 font-light">
            Whether through collecting our everyday lifestyle creations, commissioning carbon-negative architecture, or sponsoring an artisan workshop.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="px-9 sm:px-10 py-4 bg-[#1E3208] hover:bg-[#2C450F] text-white font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all"
            >
              Shop Artisan Catalog
            </Link>
            <Link
              to="/contact"
              className="px-9 sm:px-10 py-4 bg-white border border-natural-sand hover:border-[#1E3208] text-[#171815] font-bold rounded-full text-xs uppercase tracking-[0.2em] transition-all shadow-sm"
            >
              Partner With Arola
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
