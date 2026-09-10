import React from 'react';
import { ArrowRight, Gift, ShieldCheck, Sparkles } from 'lucide-react';

export default function CorporateGiftingSection({ onOpenGiftingModal }) {
  const categories = [
    { title: 'Corporate Conclaves & ESG Summits', desc: 'Laser-engraved bamboo tumblers, diary sets, pens, and customized zero-waste conference kits.' },
    { title: 'Wedding & Return Hampers', desc: 'Intricately handwoven bamboo baskets filled with organic wellness teas, scented brass, and dry fruits.' },
    { title: 'Hotel & Luxury Resort Amenities', desc: 'Custom bamboo bathroom amenity trays, toothbrush caddies, dispensers, and wooden keycards.' },
    { title: 'Festive & Custom Bulk Orders', desc: 'Tailored luxury gift packaging celebrating traditional Indian rural mastercraft with pan-India delivery.' },
  ];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-warm-bamboo text-forest-dark relative overflow-hidden">
      
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-forest/80 block">
              Bespoke & Institutional Collaborations
            </span>

            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-forest-dark leading-[1.04]">
              GIFTS WITH<br />
              <span className="italic font-normal text-forest">ENDURING PURPOSE.</span>
            </h2>

            <p className="text-base sm:text-xl text-forest-dark/85 font-light max-w-2xl leading-relaxed">
              Move beyond generic plastic merchandise. Offer your clients, guests, and teams artisanal bamboo creations that celebrate Indian craftsmanship, circular economics, and mindful sustainability.
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5 pt-2">
              {categories.map((c) => (
                <div key={c.title} className="p-6 rounded-3xl bg-white/95 border border-forest/20 shadow-md space-y-1.5 hover:shadow-lg transition-all">
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-forest-dark">
                    {c.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenGiftingModal}
                className="px-9 sm:px-10 py-4 sm:py-4.5 bg-forest-dark hover:bg-forest text-sand-50 font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Create a Custom Order</span>
                <ArrowRight className="w-4 h-4 text-warm-bamboo group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs sm:text-sm text-forest-dark font-bold">
                Custom Laser Engraving • Pan-India Delivery • Low MOQs
              </span>
            </div>
          </div>

          {/* Right Hamper Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-white/70 aspect-[4/4.2] xl:aspect-[4/4.4] bg-forest-dark">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80"
                alt="Arola Luxury Handcrafted Bamboo Gift Box"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white text-forest-dark p-6 rounded-3xl shadow-luxury border border-natural-sand max-w-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-muted-olive block">
                Featured Artisan Hamper
              </span>
              <p className="font-serif font-bold text-base sm:text-lg mt-1">
                The Executive Bamboo Ensemble
              </p>
              <p className="text-xs text-charcoal/60 mt-1">
                Handcrafted flask, journal, plantable pen & tea tin in a luxury woven box.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
