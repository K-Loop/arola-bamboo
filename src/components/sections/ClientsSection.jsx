import React from 'react';
import { clients } from '../../data/contentData';
import { Landmark, Trees, Building2, GraduationCap, Shield } from 'lucide-react';

export default function ClientsSection() {
  const clientIcons = [Landmark, Trees, Building2, GraduationCap, Shield, Building2];

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] border-b border-[#E2D8C3]">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] block mb-2">
            Institutional Trust & Enterprise Partnerships
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,6rem)] font-bold tracking-tight text-[#171815] leading-[1.04]">
            TRUSTED BY GOVERNMENTS,<br />
            <span className="italic font-normal text-[#2A5412]">INSTITUTIONS & RESORTS.</span>
          </h2>
        </div>

        {/* Minimal High-Contrast Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 xl:gap-8">
          {clients.map((c, i) => {
            const IconComp = clientIcons[i % clientIcons.length];
            return (
              <div
                key={c.name}
                className="p-8 xl:p-9 rounded-3xl bg-white border-2 border-[#D8CBB6] shadow-[0_8px_30px_rgba(23,24,21,0.06)] hover:shadow-[0_16px_45px_rgba(30,50,8,0.14)] hover:border-forest transition-all duration-300 text-center flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5EFE6] text-forest flex items-center justify-center group-hover:scale-110 group-hover:bg-forest group-hover:text-warm-bamboo transition-all duration-300 shadow-sm border border-[#D8CBB6]">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#171815] line-clamp-1 group-hover:text-forest transition-colors">
                    {c.name}
                  </h4>
                  <span className="text-[11px] text-[#4F722A] font-semibold block mt-1">
                    {c.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
