import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import ArolaLogo from './ArolaLogo';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { addToast } = useToast();

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    addToast('Thank you for joining the Arola Sustainable Circle!');
    setNewsletterEmail('');
  };

  return (
    <footer className="w-full bg-[#132104] text-[#FAF8F5] relative overflow-hidden pt-24 pb-14 border-t border-white/10">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Top Newsletter Strip */}
        <div className="bg-white/[0.06] border border-white/15 rounded-[2rem] p-8 sm:p-12 xl:p-14 mb-16 xl:mb-20 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] uppercase font-bold tracking-[0.35em] text-[#D9B77A] block">
                The Sustainable Circle
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-snug">
                Receive artisan stories, green architecture insights & seasonal offers.
              </h3>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleNewsletter} className="flex gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#1E3208]/90 border border-white/25 text-white placeholder-white/50 px-6 py-4 rounded-full text-xs sm:text-sm focus:outline-none focus:border-[#D9B77A]"
                />
                <button
                  type="submit"
                  className="bg-[#D9B77A] hover:bg-[#C9A464] text-[#132104] font-bold px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-luxury"
                >
                  <span>Join</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Columns Grid across 12-cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <ArolaLogo className="h-11" />
            </Link>

            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-sm">
              Crafting sustainable, carbon-negative lifestyle products and structural architecture while creating meaningful livelihoods for 1,000+ rural women and artisans across Tamil Nadu.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-white/75 pt-2 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9B77A] shrink-0 mt-0.5" />
                <span>10-B, Jawahar 2nd St, SS Colony, Madurai - 625016, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D9B77A] shrink-0" />
                <a href="tel:+919486755447" className="hover:text-[#D9B77A] transition-colors font-mono">+91 94867 55447 / +91 95001 37477</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D9B77A] shrink-0" />
                <a href="mailto:arolaecoproducts@gmail.com" className="hover:text-[#D9B77A] transition-colors font-mono">arolaecoproducts@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs font-bold text-[#D9B77A] uppercase tracking-widest block">
              EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Products Catalog</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Impact & Artisans</Link></li>
              <li><Link to="/construction" className="hover:text-white transition-colors">Green Construction</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors">Skills Academy</Link></li>
              <li><Link to="/stories" className="hover:text-white transition-colors">Stories & Journal</Link></li>
            </ul>
          </div>

          {/* Shop Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs font-bold text-[#D9B77A] uppercase tracking-widest block">
              COLLECTIONS
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              <li><Link to="/shop/kitchen" className="hover:text-white transition-colors">Bamboo Kitchen</Link></li>
              <li><Link to="/shop/personal-care" className="hover:text-white transition-colors">Personal Care</Link></li>
              <li><Link to="/shop/home-decor" className="hover:text-white transition-colors">Home & Decor</Link></li>
              <li><Link to="/shop/gifting" className="hover:text-white transition-colors">Bespoke Hampers</Link></li>
              <li><Link to="/shop/jewellery" className="hover:text-white transition-colors">Artisan Jewellery</Link></li>
              <li><Link to="/shop/planters" className="hover:text-white transition-colors">Planters & Garden</Link></li>
            </ul>
          </div>

          {/* Support (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs font-bold text-[#D9B77A] uppercase tracking-widest block">
              SUPPORT & ESG
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              <li><Link to="/contact" className="hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Bulk Enquiries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs font-bold text-[#D9B77A] uppercase tracking-widest block">
              CONNECT
            </span>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-white/80 font-light">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B77A] transition-colors">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B77A] transition-colors">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B77A] transition-colors">LinkedIn</a>
              <a href="https://wa.me/919486755447" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9B77A] transition-colors text-[#D9B77A] font-semibold flex items-center gap-1.5 pt-1">
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <p>© 2026 Arola Bamboo Products Pvt Ltd. All rights reserved.</p>
          <p>Handcrafted with honor in Madurai, India • 100% Sustainable & Carbon-Negative</p>
        </div>

      </div>
    </footer>
  );
}
