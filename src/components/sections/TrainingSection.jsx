import React from 'react';
import { ArrowRight, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrainingSection({ onOpenTrainingModal }) {
  const trainingPoints = [
    'Precision Bamboo Lathe Turning & Ergonomic Joinery',
    'Intricate Basket & Architectural Lattice Split Weaving',
    'Non-Toxic Eco Borax Vacuum Treatment & Preservation',
    'Micro-Enterprise Governance & Leadership for Women SHGs'
  ];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] border-b border-[#E2D8C3] relative">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Workshop Imagery (6 cols) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3.5] xl:aspect-[4/3.3] bg-sand-light">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="Arola Bamboo Craft Training Workshop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-6 sm:right-10 bg-forest-dark text-sand-50 p-5 sm:p-6 rounded-3xl shadow-2xl border border-white/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-warm-bamboo text-forest-dark flex items-center justify-center font-bold font-serif text-xl shrink-0 shadow-md">
                100+
              </div>
              <div>
                <p className="text-xs sm:text-sm text-sand-100 font-bold leading-tight">
                  Artisans & Youth Certified Annually
                </p>
                <span className="text-[10px] text-warm-bamboo tracking-wider uppercase font-mono mt-0.5 block font-semibold">
                  Government & CSR Recognized
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-7 order-1 lg:order-2 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-[#4F722A] text-xs font-bold uppercase tracking-[0.35em]">
              <GraduationCap className="w-4 h-4 text-forest" />
              <span>Arola Skills Academy • Madurai Hub</span>
            </div>

            <h2 className="font-serif text-[clamp(2.5rem,5vw,6rem)] font-bold text-[#171815] leading-[1.04] tracking-tight">
              LEARN THE CRAFT.<br />
              <span className="italic font-normal text-[#2A5412]">EMPOWER A GENERATION.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#171815]/80 leading-relaxed font-light">
              Through structured residential fellowships and vocational village workshops, we train rural women, indigenous tribal youth, and architecture interns in high-precision sustainable bamboo craftsmanship.
            </p>

            <div className="space-y-3 pt-2">
              {trainingPoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border-2 border-[#D8CBB6] shadow-sm text-xs sm:text-sm text-[#171815] font-semibold hover:border-forest/50 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-forest shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenTrainingModal}
                className="px-9 sm:px-10 py-4 sm:py-4.5 bg-forest hover:bg-forest-light text-sand-50 font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Register for Workshop</span>
                <ArrowRight className="w-4 h-4 text-warm-bamboo group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/training"
                className="text-xs font-bold text-forest hover:text-bamboo-green uppercase tracking-[0.2em]"
              >
                View Full Curriculum & Calendar →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
