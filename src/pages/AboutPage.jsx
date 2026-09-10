import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/contentData';
import { Leaf, Users, HeartHandshake, Target, Eye, Compass, Award, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const milestones = [
    { year: '2020', title: 'The Spark in Madurai', desc: 'Suthagar & Dharshana Selvaraj initiate bamboo research to replace disposable plastics with local renewable biomass.' },
    { year: '2022', title: 'First Women SHG Cluster', desc: 'Trained 100+ rural women in precision lathe turning, establishing our primary community processing hub in Madurai.' },
    { year: '2023', title: 'Architectural Expansion', desc: 'Delivered landmark green construction projects including Madurai Kamaraj University and coastal resort gazebos.' },
    { year: '2024', title: '1,000 Artisans Milestone', desc: 'Recognized nationally across 6+ publications for pioneering sustainable bio-craft and equitable rural livelihood generation.' },
    { year: '2026', title: 'Pan-India Sustainable Flagship', desc: 'Launching full-spectrum consumer goods, corporate ESG gifting, and international green living standards.' }
  ];

  return (
    <div className="pt-24 pb-24 bg-[#FAF8F5] text-[#171815] min-h-screen">
      
      {/* 1. Hero */}
      <section className="w-full py-20 sm:py-28 xl:py-36 bg-[#F3EDE4] border-b border-natural-sand relative overflow-hidden">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-3">
            Rooted in Madurai, Tamil Nadu • Est. 2020
          </span>
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,6rem)] font-bold text-[#171815] leading-[1.04] max-w-5xl mx-auto">
            CRAFTING A REGENERATIVE TOMORROW WITH BAMBOO.
          </h1>
          <p className="text-base sm:text-xl xl:text-2xl text-[#171815]/75 mt-6 leading-relaxed font-light max-w-3xl mx-auto">
            Arola Bamboo Products Pvt Ltd exists to replace single-use plastic commodities through indigenous craftsmanship, carbon-negative architecture, and women-led rural empowerment.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Origin */}
      <section className="w-full py-24 sm:py-32 xl:py-40 bg-[#FAF8F5] border-b border-natural-sand">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="lg:col-span-6 space-y-7">
              <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#1E3208]">
                Our Genesis & Philosophy
              </span>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,4.5rem)] font-bold text-[#171815] leading-tight">
                Born from a reverence for nature and a commitment to rural dignity.
              </h2>
              <p className="text-base sm:text-lg text-[#171815]/80 leading-relaxed font-light">
                Founded by <b>Suthagar Selvaraj</b> and <b>Dharshana Selvaraj</b> in Madurai, Tamil Nadu, Arola began with a profound realization: <i>Why do we manufacture short-lived disposable products out of indestructible petroleum polymers, while our ancient lands grow fast-regenerating, super-strong bamboo?</i>
              </p>
              <p className="text-sm sm:text-base text-[#171815]/70 leading-relaxed font-light">
                We united traditional tribal artisans, women's self-help groups, and material scientists to develop non-toxic, food-safe bamboo containers, vacuum flasks, and structural joinery that rival the world's most refined luxury lifestyle standards.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-natural-sand aspect-[4/3.2] bg-sand-200">
                <img
                  src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80"
                  alt="Arola Founders and Artisans at Work in Madurai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values */}
      <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#132104] text-[#FAF8F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 xl:p-12 rounded-3xl bg-white/[0.05] border border-white/10 space-y-5 shadow-luxury">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#D9B77A] flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                To engineer accessible, exquisite, and biodegradable bamboo products and architectural structures that eliminate plastic pollution while generating sustainable livelihoods for 1,000+ rural artisans.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 xl:p-12 rounded-3xl bg-white/[0.05] border border-white/10 space-y-5 shadow-luxury">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#D9B77A] flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                To position Indian bamboo craft and sustainable architecture as world-leading benchmarks for circular economy, ecological harmony, and generational community dignity.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 sm:p-10 xl:p-12 rounded-3xl bg-white/[0.05] border border-white/10 space-y-5 shadow-luxury">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#D9B77A] flex items-center justify-center">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Our Values</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                Ecological Integrity • Artisan Dignity • Transparent Fair Trade • Zero Plastic Compromise • Traditional Knowledge Innovation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership & Artisan Leaders */}
      <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF8F5] border-b border-natural-sand">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-2">
              Guiding Custodians & Craft Leaders
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-[#171815] leading-tight">
              MEET OUR TEAM
            </h2>
            <p className="text-base sm:text-lg text-[#171815]/70 mt-3 font-light">
              Passionate founders, master craftspeople, and structural architects driving Arola forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 xl:gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl border border-natural-sand overflow-hidden shadow-subtle hover:shadow-luxury transition-all duration-300 p-6 xl:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/4.5] rounded-2xl overflow-hidden bg-sand-200 mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] uppercase font-bold text-[#1E3208] tracking-wider block">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#171815] mt-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#171815]/70 mt-3 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  {member.social && (
                    <div className="flex items-center gap-2.5 pt-4 mt-3 border-t border-natural-sand/60">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-full bg-sand-100 hover:bg-[#1E3208] text-[#1E3208] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-full bg-sand-100 hover:bg-[#1E3208] text-[#1E3208] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-full bg-sand-100 hover:bg-[#1E3208] text-[#1E3208] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                        >
                          Facebook
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Milestones Timeline */}
      <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#F3EDE4] border-b border-natural-sand">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-2">
              Our Track Record
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-[#171815] leading-tight">
              KEY MILESTONES
            </h2>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 xl:p-10 rounded-3xl bg-white border border-natural-sand shadow-subtle hover:shadow-luxury transition-all items-start"
              >
                <span className="font-mono text-3xl sm:text-4xl xl:text-5xl font-bold text-[#D9B77A] shrink-0 sm:w-32">
                  {m.year}
                </span>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#171815]">
                    {m.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#171815]/75 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="w-full py-24 sm:py-32 text-center bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171815]">
            Join us in cultivating a regenerative lifestyle.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/shop"
              className="px-9 sm:px-10 py-4 bg-[#1E3208] hover:bg-[#2C450F] text-white font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all"
            >
              Explore Product Catalog
            </Link>
            <Link
              to="/contact"
              className="px-9 sm:px-10 py-4 bg-white border border-natural-sand hover:border-[#1E3208] text-[#171815] font-bold rounded-full text-xs uppercase tracking-[0.2em] transition-all shadow-sm"
            >
              Contact Madurai HQ
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
