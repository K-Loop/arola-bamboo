import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-charcoal min-h-screen">
      
      {/* 1. Full-Width Editorial Hero */}
      <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-[#F2ECE4] via-[#F7F3EE] to-[#FAF8F5] border-b border-natural-sand/60">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-4xl">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-warm-bamboo block mb-3">
              Direct Inquiries & Collaboration
            </span>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,6.5rem)] font-bold text-forest leading-[1.05] tracking-tight">
              Connect With<br />
              <span className="italic font-light text-warm-bamboo">Arola Bamboo.</span>
            </h1>
            <p className="text-base sm:text-xl text-charcoal/80 mt-6 leading-relaxed font-light max-w-3xl">
              Based in the historic cultural capital of Madurai, Tamil Nadu. Reach out for retail inquiries, bespoke corporate hampers, biophilic architectural engineering, or vocational artisan admissions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Wide Contact Section */}
      <ContactSection />

      {/* 3. Wide Communication Channels Grid */}
      <section className="w-full py-16 lg:py-20 border-t border-natural-sand/60 bg-[#F3EDE4]">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 lg:p-10 rounded-[2.25rem] bg-white border border-natural-sand/70 shadow-luxury text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-forest text-warm-bamboo flex items-center justify-center mx-auto shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-forest">Direct Helpline</h4>
              <p className="text-sm text-charcoal/80 font-medium">+91 94867 55447 / +91 95001 37477</p>
              <span className="text-xs text-warm-bamboo font-bold tracking-wider block">Mon - Sat: 9:30 AM - 6:30 PM IST</span>
            </div>

            <div className="p-8 lg:p-10 rounded-[2.25rem] bg-white border border-natural-sand/70 shadow-luxury text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-forest text-warm-bamboo flex items-center justify-center mx-auto shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-forest">Official Email</h4>
              <a href="mailto:arolaecoproducts@gmail.com" className="text-sm text-forest font-bold hover:underline block">
                arolaecoproducts@gmail.com
              </a>
              <span className="text-xs text-charcoal/60 font-light block">Verified response within 24 business hours</span>
            </div>

            <div className="p-8 lg:p-10 rounded-[2.25rem] bg-white border border-natural-sand/70 shadow-luxury text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-forest text-warm-bamboo flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-forest">Madurai Headquarters</h4>
              <p className="text-sm text-charcoal/80 font-medium">10-B Jawahar 2nd St, SS Colony</p>
              <span className="text-xs text-charcoal/60 block">Madurai - 625016, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
