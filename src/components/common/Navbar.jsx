import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useSearch } from '../../context/SearchContext';
import ArolaLogo from './ArolaLogo';

export default function Navbar({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItemsCount, setIsDrawerOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch } = useSearch();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/shop' },
    { name: 'IMPACT', path: '/impact' },
    { name: 'PROJECTS', path: '/construction' },
    { name: 'STORIES', path: '/stories' },
  ];

  const handleNavClick = (path, e) => {
    if (location.pathname === path) {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none"
    >
      <div
        className={`pointer-events-auto transition-all duration-500 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between gap-6 sm:gap-10 shadow-luxury max-w-6xl w-full border ${
          isScrolled || !isHome
            ? 'glass-pill-light text-charcoal border-[#D9B77A]/40'
            : 'glass-pill-dark text-sand-50 border-white/20'
        }`}
      >
        {/* LEFT: Official Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick('/', e)}
          className="flex items-center shrink-0 focus:outline-none cursor-pointer group"
        >
          <ArolaLogo className="h-8 sm:h-9 transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* CENTER: Clean Navigation with Animated Floating Pill & Hover Effect */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold tracking-[0.14em]">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== '/' && location.pathname.startsWith(link.path));

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? isScrolled || !isHome
                      ? 'text-forest font-bold'
                      : 'text-white font-bold'
                    : isScrolled || !isHome
                    ? 'text-charcoal/75 hover:text-forest hover:bg-black/5'
                    : 'text-sand-100/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {/* Active Animated Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-full shadow-sm -z-10 ${
                      isScrolled || !isHome
                        ? 'bg-forest/10 border border-forest/20'
                        : 'bg-warm-bamboo/25 border border-warm-bamboo/40'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Search, Wishlist, Cart & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Global Search */}
          <button
            onClick={openSearch}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isScrolled || !isHome
                ? 'hover:bg-natural-sand text-charcoal'
                : 'hover:bg-white/10 text-sand-50'
            }`}
            aria-label="Search"
            title="Search products & projects"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className={`p-2 rounded-full transition-colors relative hidden sm:block cursor-pointer ${
              isScrolled || !isHome
                ? 'hover:bg-natural-sand text-charcoal'
                : 'hover:bg-white/10 text-sand-50'
            }`}
            aria-label="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-warm-bamboo text-forest-dark text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Button with Count */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-forest text-warm-white hover:bg-forest-light text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-warm-bamboo" />
            <span className="hidden sm:inline">Bag</span>
            <span className="bg-warm-bamboo text-forest-dark text-[10px] font-bold px-1.5 py-0.2 rounded-full">
              {totalItemsCount}
            </span>
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={onOpenMobileMenu}
            className={`lg:hidden p-2 rounded-full transition-colors cursor-pointer ${
              isScrolled || !isHome
                ? 'hover:bg-natural-sand text-charcoal'
                : 'hover:bg-white/10 text-sand-50'
            }`}
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
