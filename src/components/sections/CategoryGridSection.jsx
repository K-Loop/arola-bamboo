import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { categories } from '../../data/products';

export default function CategoryGridSection() {
  const categoryLayout = [
    {
      ...categories[0], // Kitchen
      gridSpan: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 min-h-[400px] sm:min-h-[480px] xl:min-h-[580px]',
      tag: '01 • Culinary Craft & Drinkware',
      highlight: true
    },
    {
      ...categories[2], // Home & Decor
      gridSpan: 'sm:col-span-1 lg:col-span-4 min-h-[260px] sm:min-h-[300px] xl:min-h-[275px]',
      tag: '02 • Lighting & Spaces'
    },
    {
      ...categories[4], // Jewellery
      gridSpan: 'sm:col-span-1 lg:col-span-4 min-h-[260px] sm:min-h-[300px] xl:min-h-[275px]',
      tag: '03 • Adornment & Tribal Arts'
    },
    {
      ...categories[1], // Personal Care
      gridSpan: 'sm:col-span-1 lg:col-span-4 min-h-[280px] sm:min-h-[340px] xl:min-h-[380px]',
      tag: '04 • Daily Wellness'
    },
    {
      ...categories[3], // Gifting
      gridSpan: 'sm:col-span-1 lg:col-span-4 min-h-[280px] sm:min-h-[340px] xl:min-h-[380px]',
      tag: '05 • Bespoke Hampers'
    },
    {
      ...categories[5], // Planters & Garden
      gridSpan: 'sm:col-span-2 lg:col-span-4 min-h-[280px] sm:min-h-[340px] xl:min-h-[380px]',
      tag: '06 • Botanical Living'
    },
  ];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] border-b border-[#E2D8C3] relative">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#E2D8C3]">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#4F722A] block mb-2">
              Artisan Craftsmanship By Domain
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,6rem)] font-bold text-[#171815] leading-[1.04] tracking-tight">
              SHOP BY<br />
              <span className="italic font-normal text-[#2A5412]">COLLECTION.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-[#171815]/80 max-w-md font-light leading-relaxed">
            Every collection transforms renewable biomass into functional everyday works of art, handcrafted by women Self Help Groups in Tamil Nadu.
          </p>
        </div>

        {/* Asymmetric Wide Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-8">
          {categoryLayout.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.slug}`}
              className={`${cat.gridSpan} group relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(23,24,21,0.1)] hover:shadow-[0_25px_60px_rgba(30,50,8,0.22)] border-2 border-[#D8CBB6]/80 hover:border-warm-bamboo transition-all duration-700 p-6 sm:p-8 xl:p-10 flex flex-col justify-between`}
            >
              {/* Image with subtle zoom */}
              <div className="absolute inset-0 z-0 bg-sand-light">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Natural dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/45 to-forest-dark/15 transition-opacity duration-300 group-hover:from-forest-dark" />
              </div>

              {/* Top Tag & Item Count */}
              <div className="relative z-10 flex items-center justify-between text-sand-100">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-forest-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  {cat.tag}
                </span>
                <span className="text-xs font-bold text-warm-bamboo bg-forest-dark/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-warm-bamboo/30 shadow-md">
                  {cat.itemCount} Creations
                </span>
              </div>

              {/* Bottom Title & Hover Action */}
              <div className="relative z-10 text-sand-50 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white group-hover:text-warm-bamboo transition-colors flex items-center justify-between">
                  <span>{cat.name.toUpperCase()}</span>
                  <ArrowUpRight className="w-6 h-6 text-warm-bamboo opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2" />
                </h3>
                <p className="text-xs sm:text-sm text-sand-100 font-light max-w-xl">
                  {cat.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-warm-bamboo uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Collection</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
