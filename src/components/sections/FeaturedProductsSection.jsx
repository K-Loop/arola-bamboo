import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { products } from '../../data/products';
import { ArrowRight, Eye, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function FeaturedProductsSection({ onQuickView }) {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll into horizontal movement on desktop
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  const showcaseProducts = [
    { ...products[0], widthClass: 'w-[320px] sm:w-[380px] xl:w-[420px]' }, // Container
    { ...products[3], widthClass: 'w-[340px] sm:w-[400px] xl:w-[450px]' }, // Insulated Bottle
    { ...products[7], widthClass: 'w-[300px] sm:w-[360px] xl:w-[400px]' }, // Lampshade H
    { ...products[1], widthClass: 'w-[320px] sm:w-[380px] xl:w-[420px]' }, // Bamboo Mug
    { ...products[9], widthClass: 'w-[350px] sm:w-[420px] xl:w-[460px]' }, // Gifting Hamper
    { ...products[5], widthClass: 'w-[300px] sm:w-[360px] xl:w-[400px]' }, // Kids Toothbrush
    { ...products[6], widthClass: 'w-[320px] sm:w-[380px] xl:w-[420px]' }, // Flower Vase
  ];

  return (
    <div ref={containerRef} className="relative bg-[#F4EFE6] lg:h-[240vh] border-b border-[#D8CBB6]">
      
      {/* Sticky Viewport Container */}
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-6">
        
        {/* Section Header */}
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-5 sm:mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.3em] text-[#4F722A] mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              <span>Curated Essentials</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4.5rem)] font-bold text-[#171815] leading-[1.05] tracking-tight">
              EVERYDAY,<br />
              <span className="italic font-normal text-[#2A5412]">REIMAGINED.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
            <span className="text-[11px] text-[#171815]/70 font-mono tracking-widest uppercase">
              Horizontal Scroll Showcase
            </span>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-bamboo-green uppercase tracking-[0.2em] group"
            >
              <span>Explore All Products ({products.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Horizontal Track (Desktop: Scroll-linked; Mobile: Swipeable Overflow) */}
        <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar px-6 sm:px-10 lg:px-14 xl:px-16">
          <motion.div
            style={{ x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? x : '0%' }}
            className="flex gap-5 sm:gap-7 xl:gap-8 items-stretch w-max pb-4 pt-1"
          >
            {showcaseProducts.map((p, idx) => {
              const isLiked = isInWishlist(p.id);

              return (
                <div
                  key={p.id}
                  className={`${p.widthClass} shrink-0 group flex flex-col justify-between bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#D8CBB6] shadow-[0_10px_30px_rgba(23,24,21,0.08)] hover:shadow-[0_18px_45px_rgba(30,50,8,0.16)] hover:border-forest/60 transition-all duration-500`}
                >
                  {/* Image Container with Zoom */}
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#FAF7F0] border border-[#E7E0D3] mb-4">
                    <Link to={`/product/${p.slug}`}>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </Link>

                    {/* Category pill */}
                    <span className="absolute top-3 left-3 bg-forest text-warm-bamboo text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-warm-bamboo/30">
                      {p.categoryName}
                    </span>

                    {/* Quick action buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleWishlist(p)}
                        className={`p-2 rounded-full shadow-md border border-[#D8CBB6] transition-all ${
                          isLiked ? 'bg-red-50 text-red-600' : 'bg-white text-charcoal hover:text-red-600'
                        }`}
                        aria-label="Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => onQuickView && onQuickView(p)}
                        className="p-2 rounded-full bg-white text-charcoal hover:text-forest shadow-md border border-[#D8CBB6]"
                        aria-label="Quick view"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="w-full py-2.5 px-4 bg-forest hover:bg-forest-light text-sand-50 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-warm-bamboo" />
                        <span>Add To Basket</span>
                      </button>
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#4F722A] uppercase tracking-widest font-bold">
                        Item 0{idx + 1}
                      </span>
                      <span className="text-[11px] text-[#171815]/70 font-semibold bg-[#FAF7F0] px-2 py-0.5 rounded-full border border-[#D8CBB6]">
                        {p.inStock ? 'In Stock' : 'Pre-order'}
                      </span>
                    </div>

                    <Link
                      to={`/product/${p.slug}`}
                      className="font-serif text-lg sm:text-xl xl:text-2xl font-bold text-[#171815] group-hover:text-forest transition-colors block leading-snug line-clamp-1"
                    >
                      {p.name}
                    </Link>

                    <p className="text-xs text-[#171815]/70 line-clamp-1 font-normal">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 mt-1.5 border-t border-[#D8CBB6]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-lg sm:text-xl font-bold text-forest">
                          ₹{p.price}
                        </span>
                        {p.originalPrice && (
                          <span className="text-xs text-charcoal/40 line-through">
                            ₹{p.originalPrice}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/product/${p.slug}`}
                        className="text-xs font-bold text-forest group-hover:text-bamboo-green flex items-center gap-1 uppercase tracking-wider"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </div>
  );
}
