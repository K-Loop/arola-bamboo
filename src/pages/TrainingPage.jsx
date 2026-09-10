import React, { useState } from 'react';
import { GraduationCap, Users, BookOpen, Award, CheckCircle, ArrowRight, Sparkles, Calendar, MapPin, Download, ShieldCheck, HeartHandshake, Hammer } from 'lucide-react';
import TrainingRegisterModal from '../components/common/TrainingRegisterModal';

export default function TrainingPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const stats = [
    { value: "4,500+", label: "Certified Artisans Trained", sub: "Over 8 years of dedicated vocational craft cohorts" },
    { value: "85%", label: "Women Empowerment Ratio", sub: "Transforming rural self-help groups into self-sustaining entrepreneurs" },
    { value: "₹24,000", label: "Avg. Monthly Income Post-Grad", sub: "3.2x increase over traditional unorganized wage labor" },
    { value: "100%", label: "Placement & Cluster Tie-Up", sub: "Direct buyback guarantees & institutional supplier integration" }
  ];

  const programs = [
    {
      badge: "Flagship Residential Track",
      title: '60-Day Master Artisan Fellowship',
      audience: 'Women SHG Members, Rural Youth & Crafts Community',
      duration: '60 Days (Full-time Residential)',
      stipend: 'Stipend + Full Lodging, Health Coverage & Meals',
      desc: 'Complete end-to-end mastery of botanical bamboo seasoning, high-speed computer-calibrated lathe turning, zero-waste joinery, food-safe herbal wax polishing, and decentralized cooperative management.',
      modules: ['Raw Culm Selection & Grading', 'Non-Toxic Vacuum Impregnation', 'Lathe Turning & Precision Joinery', 'Herbal Buffing & Quality Control', 'Cooperative Accounting & Digital Sales'],
      highlights: ['State & NSDC-Aligned Skill Diploma', 'Dedicated Tool Kit & Lathe Accessories Given', 'Direct Placement in Arola Production Clusters']
    },
    {
      badge: "Artisanal Weave Track",
      title: '30-Day Woven Decor & Lighting Workshop',
      audience: 'Tribal Weavers, Traditional Weavers & Artisans',
      duration: '30 Days (Practical Intensive)',
      stipend: 'Daily Training Allowance + Material Kit',
      desc: 'Advanced micro-split weaving techniques, parametric pendant lampshade framework, CE-compliant brass electrical fitting integration, and all-weather organic insect-resistant herbal treatments.',
      modules: ['Micro-Strip Slicing by Hand & Jigs', 'Bespoke Hexagonal & Twill Weaves', 'Structural Ring Framing & Tensioning', 'Electrical Assembly & Safety Specs', 'Direct Supply Packaging Standards'],
      highlights: ['Master weaver 1-on-1 mentorship', 'Direct supply contract with Arola Lighting Studio', 'Portfolio catalogue featured on marketplace']
    },
    {
      badge: "Design & Architecture",
      title: 'Academic Bio-Architecture Fellowship',
      audience: 'Architecture & Industrial Design Graduates',
      duration: '4 to 8 Weeks (Modular Hands-On)',
      stipend: 'Academic Fellowship & Design Grant',
      desc: 'Hands-on experiential training in structural bamboo joinery (fish-mouth, pin & dowel, gusset plates), CAD/CAM digital prototyping, vacuum pressure borax impregnation, and live eco-pavilion construction.',
      modules: ['Structural Material Science & Testing', 'Advanced Biophilic Joint Engineering', 'Rhino / Grasshopper Parametric Modeling', 'On-Site Erection & Scaffolding Systems', 'Life Cycle Carbon & LCA Calculations'],
      highlights: ['Co-authored published case study', 'Live pavilion structure built in your portfolio', 'Network with leading green architects']
    }
  ];

  const whoCanJoin = [
    { 
      num: "01",
      title: 'Women Self Help Groups', 
      desc: 'Transforming community energy into financially resilient artisanal micro-enterprises with reliable buyback contracts.',
      tags: ['Financial Independence', 'Skill Upgradation', 'Micro-Finance']
    },
    { 
      num: "02",
      title: 'Tribal Artisans & Weavers', 
      desc: 'Refining ancestral knowledge with high-precision engineering tools, ergonomic workstations, and safety standards.',
      tags: ['Ancestral Tech', 'Design Modernization', 'Fair Trade']
    },
    { 
      num: "03",
      title: 'Rural Youth & Dropouts', 
      desc: 'Gainful technical vocational career pathways in green biomass engineering, machinery operations, and quality inspection.',
      tags: ['Vocational Dignity', 'Decent Living Wages', 'High Demand']
    },
    { 
      num: "04",
      title: 'Architects & Designers', 
      desc: 'Mastering regenerative material physics, bio-mimetic joinery, and carbon-negative building systems directly on construction sites.',
      tags: ['Bio-Architecture', 'Parametric Bamboo', 'LCA Mastery']
    }
  ];

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#171815]">
      
      {/* 1. Hero Section */}
      <section className="w-full py-20 lg:py-28 bg-[#F3EDE4] border-b border-natural-sand/60 relative overflow-hidden">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1E3208]/10 text-[#1E3208] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">
              <GraduationCap className="w-4 h-4 text-[#1E3208]" />
              <span>Arola Craft & Bio-Engineering Academy • Madurai</span>
            </div>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,6.5rem)] font-bold text-[#1E3208] leading-[1.05] tracking-tight">
              Master the Craft.<br />
              <span className="italic font-light text-[#D9B77A]">Transform Livelihoods.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#171815]/80 mt-6 leading-relaxed font-light max-w-3xl">
              Government-recognized, certified residential fellowships empowering rural women entrepreneurs, generational artisans, and biophilic architects with high-precision sustainable engineering.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="px-9 py-4.5 bg-[#1E3208] hover:bg-[#2C450F] text-white font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all flex items-center gap-3"
              >
                <span>Apply for Next Cohort (Batch 2026-B)</span>
                <ArrowRight className="w-4 h-4 text-[#D9B77A]" />
              </button>
              <a
                href="#programs"
                className="px-8 py-4.5 rounded-full border border-[#1E3208]/20 text-[#1E3208] font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#1E3208]/5 transition-all"
              >
                Explore Syllabus & Tracks ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Metric Strip */}
      <section className="w-full py-16 bg-[#132104] text-white border-b border-white/10">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
            {stats.map((st, idx) => (
              <div key={idx} className="border-l-2 border-[#D9B77A]/50 pl-6 space-y-2">
                <div className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-white leading-none">
                  {st.value}
                </div>
                <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D9B77A]">
                  {st.label}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {st.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who Can Join Grid */}
      <section className="w-full py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#7D875E] block mb-3">
                Inclusive Vocational Opportunity
              </span>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] font-bold text-[#1E3208] leading-tight">
                Who We Train & Empower
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#171815]/70 max-w-lg font-light leading-relaxed">
              Our cohorts are designed without academic barriers. We provide free multilingual instruction in Tamil, Hindi, and English alongside comprehensive tool mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {whoCanJoin.map((w) => (
              <div
                key={w.title}
                className="p-8 lg:p-10 rounded-[2.25rem] bg-white border border-natural-sand/70 shadow-luxury flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="font-mono text-xs font-bold tracking-widest text-[#D9B77A] bg-[#FAF8F5] border border-natural-sand/60 px-3.5 py-1.5 rounded-full inline-block mb-6">
                    COHORT // {w.num}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E3208] mb-4 leading-snug">
                    {w.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#171815]/75 leading-relaxed font-light mb-6">
                    {w.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-natural-sand/50">
                  {w.tags.map((tg, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-sand-100 text-[#1E3208]">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Training Programs & Fellowships */}
      <section id="programs" className="w-full py-24 lg:py-32 bg-[#F3EDE4] border-y border-natural-sand/60">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#7D875E] block mb-3">
              Certified Curricula
            </span>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] font-bold text-[#1E3208] leading-tight">
              Arola Certified Fellowships
            </h2>
            <p className="text-sm sm:text-base text-[#171815]/70 mt-4 font-light">
              Structured modules combining traditional artisanal wisdom with high-precision engineering and safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
            {programs.map((prog, idx) => (
              <div
                key={prog.title}
                className="bg-white rounded-[2.5rem] border border-natural-sand/80 p-8 sm:p-10 shadow-luxury hover:shadow-2xl flex flex-col justify-between transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E3208] bg-[#D9B77A]/20 border border-[#D9B77A]/40 px-3.5 py-1.5 rounded-full">
                      {prog.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#D9B77A] uppercase tracking-wider">
                      {prog.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3208] leading-snug group-hover:text-[#D9B77A] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[#171815]/60 font-medium mt-2">
                      Eligibility: {prog.audience}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#171815]/80 leading-relaxed font-light">
                    {prog.desc}
                  </p>

                  {/* Modules list */}
                  <div className="space-y-3 pt-4 border-t border-natural-sand/60">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#1E3208]/80 block">
                      Core Syllabus Modules:
                    </span>
                    <div className="space-y-2">
                      {prog.modules.map((m, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#171815]/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D9B77A]" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fellowship perks */}
                  <div className="space-y-2.5 pt-4 border-t border-natural-sand/60 bg-[#FAF8F5] p-4.5 rounded-2xl">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#1E3208] block">
                      Fellowship Benefits:
                    </span>
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#171815]/80">
                        <CheckCircle className="w-4 h-4 text-[#1E3208] shrink-0 mt-0.5" />
                        <span className="font-light">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-natural-sand/50">
                  <button
                    onClick={() => setIsRegisterModalOpen(true)}
                    className="w-full py-4 bg-[#1E3208] hover:bg-[#2C450F] text-white font-bold rounded-2xl text-xs uppercase tracking-[0.2em] shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply for Fellowship</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9B77A]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Inside The Workshop - Visual Strip */}
      <section className="w-full py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#7D875E] block mb-3">
                Live Workshop Immersions
              </span>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] font-bold text-[#1E3208] leading-tight">
                Inside the Craft Facility
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#171815]/70 max-w-lg font-light leading-relaxed">
              Our 12,000 sq.ft facility in Madurai features specialized treatment tanks, precision machinery, hand-loom weaving stations, and live architectural assembly yards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-[2.5rem] overflow-hidden shadow-luxury relative aspect-[4/3] bg-natural-sand/20">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="Artisans Learning Bamboo Lathe Turning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132104]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-[#D9B77A] font-bold">Studio A</span>
                <h4 className="font-serif text-xl font-bold text-white">Precision Wood & Bamboo Lathes</h4>
              </div>
            </div>

            <div className="group rounded-[2.5rem] overflow-hidden shadow-luxury relative aspect-[4/3] bg-natural-sand/20">
              <img
                src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80"
                alt="Women Weaving Bamboo Lattice Lamps"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132104]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-[#D9B77A] font-bold">Studio B</span>
                <h4 className="font-serif text-xl font-bold text-white">Micro-Weave Lighting Atelier</h4>
              </div>
            </div>

            <div className="group rounded-[2.5rem] overflow-hidden shadow-luxury relative aspect-[4/3] bg-natural-sand/20">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
                alt="Finished Handcrafted Bamboo Containers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132104]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-[#D9B77A] font-bold">Studio C</span>
                <h4 className="font-serif text-xl font-bold text-white">Bio-Treatment & Polishing Yard</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="w-full py-20 bg-[#132104] text-white relative overflow-hidden">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9B77A] block mb-3">
            Admissions Open
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight">
            Begin Your Artisanal Career
          </h2>
          <p className="text-base sm:text-lg text-white/80 mt-6 font-light leading-relaxed">
            Apply online today. Shortlisted candidates receive fully funded admission, accommodation details, and onboarding guidance from our training faculty.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="px-10 py-5 bg-[#D9B77A] hover:bg-[#C9A464] text-[#132104] font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all"
            >
              Submit Application Form →
            </button>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <TrainingRegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

    </div>
  );
}
