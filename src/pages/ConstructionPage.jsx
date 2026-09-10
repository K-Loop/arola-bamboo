import React, { useState } from 'react';
import { constructionProjects } from '../data/contentData';
import { Building2, Layers, Check, ArrowRight, ShieldCheck, Compass, Sparkles, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function ConstructionPage() {
  const { addToast } = useToast();
  const [selectedProject, setSelectedProject] = useState(constructionProjects[0]);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectType: 'Resort Gazebos & Cottages',
    location: '',
    area: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Architectural inquiry submitted! Our structural design team will contact you.');
    setTimeout(() => {
      setSubmitted(false);
      setQuoteForm({
        name: '', organization: '', email: '', phone: '',
        projectType: 'Resort Gazebos & Cottages', location: '', area: '', message: ''
      });
    }, 3000);
  };

  const processSteps = [
    { num: '01', title: 'Sustainable Harvest', desc: 'Mature 4-year-old Bambusa balcooa and Dendrocalamus strictus culms selected at dawn in Tamil Nadu forests.' },
    { num: '02', title: 'Borax-Boric Preservation', desc: 'Non-toxic vacuum pressure impregnation to permanently prevent insect and fungal infestation for decades.' },
    { num: '03', title: 'Engineered Precision Joinery', desc: 'High-tensile stainless steel pin fittings and fish-mouth joinery engineered to withstand high cyclone wind loads.' },
    { num: '04', title: 'Prefabrication & Erection', desc: 'Modular components assembled on-site with zero-cement foundation pads in minimal construction time.' }
  ];

  const structuralTypes = [
    { title: 'Eco-Resort Villas & Cabanas', desc: 'Luxury oceanfront & hill station cottages with natural thatch canopy insulation and panoramic openings.' },
    { title: 'Institutional Pavilions', desc: 'Expansive open-air lecture halls, yoga shalas, dining atriums, and campus meditation geodesic domes.' },
    { title: 'Modular Bamboo Fencing', desc: 'Durable boundary perimeter fencing, decorative privacy screens, and garden landscaping dividers.' },
    { title: 'Acoustic Bamboo Panels', desc: 'Sound-dampening interior ceiling baffles, woven room partitions, and natural wall cladding.' }
  ];

  return (
    <div className="pt-24 pb-24 bg-[#FAF8F5] text-[#171815] min-h-screen">
      
      {/* 1. Hero */}
      <section className="w-full py-20 sm:py-28 xl:py-36 bg-[#132104] text-[#FAF8F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#D9B77A] block mb-3">
            Arola Green Architecture & Structural Studio
          </span>
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,6rem)] font-bold text-white leading-[1.04] max-w-5xl mx-auto">
            BUILDING GREEN. BUILDING RESILIENT.
          </h1>
          <p className="text-base sm:text-xl xl:text-2xl text-white/80 mt-6 leading-relaxed font-light max-w-3xl mx-auto">
            Pioneering carbon-negative structural bamboo architecture, eco-tourism luxury resorts, and sustainable community infrastructure across Southern India.
          </p>
        </div>
      </section>

      {/* 2. What We Build */}
      <section className="w-full py-24 sm:py-32 xl:py-40 max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-2">
            Architectural Typologies
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-[#171815] leading-tight">
            WHAT WE DESIGN & CONSTRUCT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {structuralTypes.map((t) => (
            <div
              key={t.title}
              className="p-8 xl:p-9 rounded-3xl bg-white border border-natural-sand shadow-subtle hover:shadow-luxury hover:border-[#1E3208] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-natural-sand text-[#1E3208] flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#171815]">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#171815]/70 mt-3 leading-relaxed font-light">
                  {t.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-natural-sand text-xs font-bold text-[#1E3208] uppercase tracking-wider flex items-center justify-between">
                <span>Custom Turnkey Build</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Projects Showcase & Gallery */}
      <section className="w-full py-28 sm:py-36 bg-[#F3EDE4] border-y border-natural-sand">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-2">
              Completed Landmark Portfolio
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-[#171815] leading-tight">
              FEATURED ARCHITECTURAL PROJECTS
            </h2>
          </div>

          {/* Project selector tabs */}
          <div className="flex justify-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {constructionProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  selectedProject.id === p.id
                    ? 'bg-[#1E3208] text-white shadow-luxury scale-105'
                    : 'bg-white text-[#171815]/80 border border-natural-sand hover:border-[#1E3208]'
                }`}
              >
                {p.client}
              </button>
            ))}
          </div>

          {/* Detailed Project Card */}
          <div className="bg-white rounded-3xl border border-natural-sand shadow-luxury p-8 sm:p-12 xl:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="aspect-[16/10] xl:aspect-[16/9.5] rounded-3xl overflow-hidden bg-sand-200 shadow-md">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    {selectedProject.images.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand-100 shadow-sm">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 space-y-6 lg:pl-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#D9B77A] bg-[#132104] px-3.5 py-1.5 rounded-full inline-block mb-3">
                    {selectedProject.client} • {selectedProject.location}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-[#171815] leading-tight">
                    {selectedProject.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-[#1E3208] font-semibold block mt-2">
                    Scope: {selectedProject.scope}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#171815]/80 leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-natural-sand">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#7D875E] block mb-2">
                    Structural Highlights:
                  </span>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#171815]/90">
                      <Check className="w-4 h-4 text-[#1E3208] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3208] hover:bg-[#2C450F] text-white font-bold rounded-full text-xs uppercase tracking-[0.2em] shadow-luxury transition-all"
                  >
                    <span>Request Similar Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-[#D9B77A]" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Process */}
      <section className="w-full py-28 sm:py-36 max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E] block mb-2">
            Precision Material Science & Assembly
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-[#171815] leading-tight">
            OUR 4-STAGE PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="p-8 xl:p-9 rounded-3xl bg-white border border-natural-sand shadow-subtle hover:shadow-luxury transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-4xl font-bold text-[#D9B77A] block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#171815] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#171815]/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Architectural Consultation & Quote Form */}
      <section id="quote" className="w-full py-28 sm:py-36 bg-[#FAF8F5] border-t border-natural-sand">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="bg-white rounded-3xl border border-natural-sand p-8 sm:p-12 xl:p-16 shadow-luxury max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#7D875E]">
                Direct Architectural Consultation
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-[#171815] mt-2">
                Consult on Your Green Build
              </h3>
              <p className="text-sm sm:text-base text-[#171815]/70 mt-3 font-light">
                Work directly with Arola's structural engineers and master bamboo builders in Madurai.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#1E3208] mx-auto" />
                <h4 className="font-serif text-3xl font-bold text-[#171815]">Blueprint Request Received!</h4>
                <p className="text-sm text-[#171815]/80 max-w-md mx-auto">Our chief structural architect will reach out with engineering diagrams within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-5 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Your Name / Title *</label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="e.g. Ar. Rajesh Menon"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Organization / Developer Name</label>
                    <input
                      type="text"
                      value={quoteForm.organization}
                      onChange={(e) => setQuoteForm({ ...quoteForm, organization: e.target.value })}
                      placeholder="e.g. Western Ghats Eco Resort"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="rajesh@resort.com"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Project Typology</label>
                    <select
                      value={quoteForm.projectType}
                      onChange={(e) => setQuoteForm({ ...quoteForm, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium shadow-sm cursor-pointer transition-all"
                    >
                      <option>Resort Gazebos & Cottages</option>
                      <option>Institutional Pavilion / Canopy</option>
                      <option>Pergolas & Exterior Fencing</option>
                      <option>Woven Acoustic Wall Panels</option>
                      <option>Master Plan Structural Consultancy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Site Location (City/State)</label>
                    <input
                      type="text"
                      value={quoteForm.location}
                      onChange={(e) => setQuoteForm({ ...quoteForm, location: e.target.value })}
                      placeholder="e.g. Kodaikanal / Rameswaram"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Approx. Area (sq.ft)</label>
                    <input
                      type="text"
                      value={quoteForm.area}
                      onChange={(e) => setQuoteForm({ ...quoteForm, area: e.target.value })}
                      placeholder="e.g. 3,500 sq.ft"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Project Details / Architectural Scope</label>
                  <textarea
                    rows={4}
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                    placeholder="Describe your design intentions, topography, timeline, or specific structural preferences..."
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-[#1E3208] focus:ring-4 focus:ring-forest/10 text-xs sm:text-sm text-[#171815] font-medium placeholder:text-[#171815]/45 resize-none shadow-sm transition-all"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 min-h-[54px] bg-[#1E3208] hover:bg-[#2C450F] text-white font-bold rounded-2xl text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-[#D9B77A] shrink-0" />
                    <span>Submit Architectural Consultation Request →</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
