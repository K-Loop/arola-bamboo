import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import ArolaLogo from './ArolaLogo';

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const { totalItemsCount, setIsDrawerOpen } = useCart();

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/shop' },
    { name: 'IMPACT', path: '/impact' },
    { name: 'PROJECTS', path: '/construction' },
    { name: 'STORIES', path: '/stories' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-forest-dark/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto p-6 text-sand-50"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Link to="/" onClick={onClose} className="focus:outline-none">
              <ArolaLogo className="h-9" />
            </Link>

            <button
              onClick={onClose}
              className="p-2.5 text-sand-200 hover:text-white rounded-full bg-white/10 border border-white/15 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Giant Typography Navigation */}
          <nav className="my-auto py-8 flex flex-col gap-2">
            {menuItems.map((item, idx) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path));

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-baseline justify-between py-2 group transition-colors ${
                      isActive ? 'text-warm-bamboo font-bold' : 'text-sand-100 hover:text-warm-bamboo'
                    }`}
                  >
                    <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-sand-300 opacity-40 group-hover:opacity-100 group-hover:text-warm-bamboo group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Actions & Contact */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsDrawerOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-warm-bamboo text-forest-dark font-bold text-xs uppercase tracking-wider hover:bg-warm-gold transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Bag ({totalItemsCount})</span>
              </button>

              <a
                href="https://wa.me/919486755447?text=Hello%20Arola%20Bamboo%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-white/10 text-sand-50 font-bold text-xs uppercase tracking-wider border border-white/15 hover:bg-white/20 transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('arola_replay_intro'));
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/5 text-[#D9B77A] font-semibold text-xs uppercase tracking-widest border border-[#D9B77A]/30 hover:bg-white/10 transition-colors"
            >
              <span>▶ Replay Brand Intro Video</span>
            </button>

            <div className="text-[11px] text-sand-300 flex flex-col gap-1 pt-1 opacity-80">
              <p>Madurai - 625016, Tamil Nadu, India • +91 9486755447</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
