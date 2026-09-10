import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(true);
  const [isIntroActive, setIsIntroActive] = useState(() => {
    return typeof window !== 'undefined' && window.__AROLA_INTRO_ACTIVE === true;
  });

  // 1. Synchronize with Intro Screen to prevent 2 heavy 1080p videos running at the same time
  useEffect(() => {
    const handleIntroStatus = (e) => {
      const active = !!(e && e.detail && e.detail.active);
      setIsIntroActive(active);
    };

    window.addEventListener('arola_intro_status', handleIntroStatus);
    return () => window.removeEventListener('arola_intro_status', handleIntroStatus);
  }, []);

  // 2. IntersectionObserver: Automatically pause video when scrolled off-screen to save 100% GPU
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // 3. Play/Pause control based on visibility, tab focus & intro status
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('loop', '');

    const shouldPlay = isInView && !isIntroActive && !document.hidden;

    if (shouldPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (isInView && !isIntroActive) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isInView, isIntroActive]);

  // 4. Lightweight hardware-accelerated scroll transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] min-h-[720px] flex items-center overflow-hidden bg-[#132104] text-sand-50 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 will-change-transform transform-gpu"
    >
      {/* 1. HARDWARE ACCELERATED BAMBOO VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden transform-gpu">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          poster="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover transform-gpu scale-[1.02] translate-z-0 will-change-transform"
        >
          <source src="/Bamboo_forest_swaying_in_breeze_202609091651.mp4" type="video/mp4" />
        </video>

        {/* High-Contrast Luxury Cinematic Color Grading Overlays (Zero GPU overhead) */}
        <div className="absolute inset-0 bg-[#132104]/30 pointer-events-none" />
        <div className="absolute inset-0 subtle-left-gradient pointer-events-none" />
        <div className="absolute inset-0 hero-vignette opacity-85 pointer-events-none" />

        {/* Top and Bottom Feathering */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#132104]/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#132104] via-[#132104]/50 to-transparent pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT EDITORIAL COLUMN (7 cols) */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 will-change-transform"
          >
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill-dark text-warm-bamboo text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-warm-bamboo animate-pulse" />
              <span>Crafted by Nature • Made in Madurai</span>
            </div>

            {/* Large Responsive Headline */}
            <h1 className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] font-bold tracking-tight text-white leading-[1.02] drop-shadow-md">
              ROOTED<br />
              IN NATURE.{' '}
              <span className="italic font-normal text-gradient-gold block sm:inline">
                MADE FOR TOMORROW.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-sand-100/90 max-w-xl leading-relaxed font-light drop-shadow-sm">
              Thoughtfully handcrafted bamboo essentials, sustainable spaces and meaningful livelihoods for a better tomorrow.
            </p>

            {/* Architectural Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-warm-bamboo hover:bg-warm-gold text-forest-dark font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-luxury transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-forest-dark group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-sand-50 border border-sand-100/30 font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] backdrop-blur-md transition-all flex items-center justify-center"
              >
                Discover Our Story
              </Link>
            </div>
          </motion.div>

          {/* RIGHT ASYMMETRIC FLOATING CARD (5 cols) */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0 will-change-transform"
          >
            <div className="glass-pill-dark rounded-3xl p-6 sm:p-7 border border-white/20 shadow-luxury space-y-5 max-w-md mx-auto lg:ml-auto">
              {/* Product Spotlight Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-forest/80 border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80"
                  alt="Arola Bamboo Craft Studio"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-warm-bamboo bg-forest-dark/90 px-3 py-1 rounded-full border border-warm-bamboo/30">
                  Madurai Artisan Collective
                </span>
              </div>

              {/* Editorial Statement */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-warm-bamboo block">
                  Arola Craft
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  "From bamboo forests to everyday objects."
                </h3>
                <p className="text-xs text-sand-200/80 font-light leading-relaxed">
                  Precision-turned by rural women self-help collectives using local sustainable bamboo.
                </p>
              </div>

              {/* Supporting Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/15 text-center">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-serif text-xl font-bold text-warm-bamboo block">1000+</span>
                  <span className="text-[9px] uppercase tracking-wider text-sand-300">Women & Artisans</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-serif text-xl font-bold text-white block">0% Plastic</span>
                  <span className="text-[9px] uppercase tracking-wider text-sand-300">100% Biodegradable</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. SCROLL INDICATOR & SECTION COUNTER */}
      <div className="absolute bottom-6 inset-x-0 px-6 sm:px-12 flex items-end justify-between text-sand-300 text-xs z-20 pointer-events-none">
        {/* Left: Scroll to explore with animated vertical line */}
        <div className="flex items-center gap-3 font-semibold uppercase tracking-[0.2em] text-[10px] text-sand-200">
          <div className="w-[1.5px] h-8 bg-warm-bamboo/40 relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-warm-bamboo"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
          <span>Scroll to Explore</span>
        </div>

        {/* Right: Section Counter */}
        <div className="font-mono text-xs tracking-widest text-warm-bamboo font-bold">
          01 / 06
        </div>
      </div>
    </section>
  );
}

