import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function ContactSection() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Message dispatched! Our Madurai HQ team will get in touch.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="w-full py-28 sm:py-36 xl:py-44 bg-[#FAF7F0] relative border-b border-[#E2D8C3]">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] block mb-2">
                Connect With Our Custodians
              </span>
              <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold tracking-tight text-[#171815] leading-[1.04]">
                LET'S BUILD<br />
                <span className="italic font-normal text-[#2A5412]">SOMETHING BETTER.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#171815]/80 mt-4 font-light leading-relaxed max-w-xl">
                Have an inquiry about bamboo products, architecture blueprints, skills workshops, or bespoke bulk corporate gifting? Send our Madurai headquarters a note.
              </p>
            </div>

            {submitted ? (
              <div className="p-10 rounded-3xl bg-white border-2 border-[#D8CBB6] text-center space-y-4 shadow-xl">
                <CheckCircle2 className="w-14 h-14 text-forest mx-auto" />
                <h4 className="font-serif text-3xl font-bold text-[#171815]">Thank You! Message Dispatched.</h4>
                <p className="text-sm text-[#171815]/80 max-w-md mx-auto">
                  We have received your message and will respond via email or phone from Madurai within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 xl:p-12 rounded-3xl border-2 border-[#D8CBB6] shadow-[0_16px_50px_rgba(23,24,21,0.08)] space-y-5 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meera Sundaram"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/10 text-[#171815] font-medium placeholder:text-[#171815]/45 text-xs sm:text-sm shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94867 55447"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/10 text-[#171815] font-medium placeholder:text-[#171815]/45 text-xs sm:text-sm shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="meera@example.com"
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/10 text-[#171815] font-medium placeholder:text-[#171815]/45 text-xs sm:text-sm shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#171815] mb-2 uppercase tracking-wider text-[11px]">Your Message or Requirement *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your product interest, architectural blueprint, or custom gifting requirement..."
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#D8CBB6] bg-[#FAF8F5] focus:bg-white hover:border-forest/50 focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/10 text-[#171815] font-medium placeholder:text-[#171815]/45 text-xs sm:text-sm resize-none shadow-sm transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-forest hover:bg-forest-light text-sand-50 font-bold rounded-2xl text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-warm-bamboo shrink-0" />
                    <span>Send Message Directly →</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#132104] text-white p-8 sm:p-10 xl:p-12 rounded-3xl border-2 border-white/15 shadow-2xl space-y-7">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-[0.3em] text-[#D9B77A] block">
                  Corporate Headquarters
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl xl:text-4xl font-bold text-white mt-1">
                  Arola Bamboo Products Pvt Ltd
                </h3>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/15 text-[#D9B77A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">Registered Office:</span>
                    <p className="mt-0.5 text-sand-100">10-B, Jawahar 2nd Street, Near MRP Mahal, SS Colony, Madurai - 625016, Tamil Nadu, India.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/15 text-[#D9B77A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">Direct Phone Helplines:</span>
                    <p className="mt-0.5 font-mono text-sand-100 font-semibold">+91 9486755447 / +91 9500137477</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/15 text-[#D9B77A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">Official Email:</span>
                    <a href="mailto:arolaecoproducts@gmail.com" className="text-[#D9B77A] hover:underline font-mono font-semibold">
                      arolaecoproducts@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 space-y-3">
                <a
                  href="https://web.whatsapp.com/send?phone=919486755447&text=Hello%20Arola%20Bamboo%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 bg-[#1E3208] hover:bg-[#2C450F] text-sand-50 border border-warm-bamboo/40 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-warm-bamboo" />
                  <span>Instant WhatsApp (+91 94867 55447)</span>
                </a>

                {/* Social Channels Strip */}
                <div className="flex items-center justify-center gap-4 pt-1 text-xs">
                  <a
                    href="https://www.instagram.com/eco_arola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D9B77A] hover:text-white transition-colors underline font-medium"
                  >
                    Instagram
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://www.facebook.com/dharshanabamboocraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D9B77A] hover:text-white transition-colors underline font-medium"
                  >
                    Facebook
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://www.linkedin.com/in/dharshana-suthagar-056995247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D9B77A] hover:text-white transition-colors underline font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
