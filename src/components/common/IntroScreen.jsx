import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, Play, Sparkles } from 'lucide-react';
import ArolaLogo from './ArolaLogo';

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasSeenIntro = sessionStorage.getItem('arola_intro_viewed');
    return hasSeenIntro !== 'true';
  });

  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Synchronize global intro active status so other heavy background processes wait
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__AROLA_INTRO_ACTIVE = isVisible;
      window.dispatchEvent(new CustomEvent('arola_intro_status', { detail: { active: isVisible } }));
    }

    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  // Support replay intro from footer/nav
  useEffect(() => {
    const handleReplay = () => {
      setIsVisible(true);
      setProgress(0);
      setIsVideoLoaded(false);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }, 100);
    };

    window.addEventListener('arola_replay_intro', handleReplay);
    return () => window.removeEventListener('arola_replay_intro', handleReplay);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleComplete = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('arola_intro_viewed', 'true');
      window.__AROLA_INTRO_ACTIVE = false;
      window.dispatchEvent(new CustomEvent('arola_intro_status', { detail: { active: false } }));
    }
    setIsVisible(false);
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="brand-intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#132104] flex flex-col items-center justify-center overflow-hidden select-none will-change-transform transform-gpu"
        >
          {/* Main Cinematic Video Player */}
          <div className="absolute inset-0 w-full h-full transform-gpu overflow-hidden">
            <video
              ref={videoRef}
              src="/AROLA_brand_intro_animation-clip-1_20260910194927.mp4"
              autoPlay
              playsInline
              muted={isMuted}
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onLoadedData={() => {
                setIsVideoLoaded(true);
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {});
                }
              }}
              onEnded={handleComplete}
              className="w-full h-full object-cover transform-gpu"
            />

            {/* Subtle feathering overlays */}
            <div className="absolute inset-0 bg-[#132104]/20 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#132104]/80 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#132104]/90 via-[#132104]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#132104] via-[#132104]/60 to-transparent pointer-events-none" />
          </div>

          {/* Top Bar: Official Logo & Audio / Skip Controls */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute top-4 sm:top-8 inset-x-4 sm:inset-x-12 flex items-center justify-between z-20"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <ArolaLogo className="h-7 sm:h-10 text-white drop-shadow-md" />
              <span className="hidden md:inline-block text-[10px] uppercase font-bold tracking-[0.3em] text-[#D9B77A] border-l border-white/20 pl-3">
                Madurai • Tamil Nadu
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleSound}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all shadow-lg cursor-pointer active:scale-95"
                aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                title={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9B77A]" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9B77A]" />}
              </button>

              {/* Skip / Enter Site Button */}
              <button
                type="button"
                onClick={handleComplete}
                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#D9B77A] hover:bg-[#C9A464] text-[#132104] font-bold text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] shadow-luxury transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95"
              >
                <span>Enter Site</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Bottom Bar: Progress Line & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-4 sm:bottom-8 inset-x-4 sm:inset-x-12 z-20 flex flex-col gap-2 sm:gap-3"
          >
            <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/80 font-light">
              <span className="font-mono text-[9px] sm:text-[11px] tracking-wider uppercase text-[#D9B77A]">
                Handcrafted by Nature • Made in Madurai
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-white/70 font-bold">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Video Playback Progress Bar */}
            <div className="w-full h-[3px] bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-[#D9B77A] via-[#EAD3A8] to-[#D9B77A] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

