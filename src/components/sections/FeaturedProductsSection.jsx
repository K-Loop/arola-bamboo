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
    { ...products[0], widthClass: 'w-[360px] sm:w-[440px] xl:w-[480px]' }, // Container
    { ...products[3], widthClass: 'w-[400px] sm:w-[500px] xl:w-[560px]' }, // Insulated Bottle
    { ...products[7], widthClass: 'w-[340px] sm:w-[420px] xl:w-[460px]' }, // Lampshade H
    { ...products[1], widthClass: 'w-[380px] sm:w-[460px] xl:w-[520px]' }, // Bamboo Mug
    { ...products[9], widthClass: 'w-[420px] sm:w-[520px] xl:w-[580px]' }, // Gifting Hamper
    { ...products[5], widthClass: 'w-[340px] sm:w-[400px] xl:w-[450px]' }, // Kids Toothbrush
    { ...products[6], widthClass: 'w-[380px] sm:w-[480px] xl:w-[540px]' }, // Flower Vase
  ];

  return (
    <div ref={containerRef} className="relative bg-[#F4EFE6] lg:h-[240vh] border-b border-[#D8CBB6]">
      
      {/* Sticky Viewport Container */}
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden py-20 lg:py-0">
        
        {/* Section Header */}
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.3em] text-[#4F722A] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              <span>Curated Essentials</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,5.5rem)] font-bold text-[#171815] leading-[1.05] tracking-tight">
              EVERYDAY,<br />
              <span className="italic font-normal text-[#2A5412]">REIMAGINED.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <span className="text-xs text-[#171815]/70 font-mono tracking-widest uppercase">
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
            className="flex gap-6 sm:gap-8 xl:gap-10 items-stretch w-max pb-6 pt-2"
          >
            {showcaseProducts.map((p, idx) => {
              const isLiked = isInWishlist(p.id);

              return (
                <div
                  key={p.id}
                  className={`${p.widthClass} shrink-0 group flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 xl:p-8 border-2 border-[#D8CBB6] shadow-[0_12px_36px_rgba(23,24,21,0.08)] hover:shadow-[0_20px_50px_rgba(30,50,8,0.18)] hover:border-forest/60 transition-all duration-500`}
                >
                  {/* Image Container with Zoom */}
                  <div className="relative aspect-[4/4.2] rounded-2xl overflow-hidden bg-[#FAF7F0] border border-[#E7E0D3] mb-5">
                    <Link to={`/product/${p.slug}`}>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </Link>

                    {/* Category pill */}
                    <span className="absolute top-4 left-4 bg-forest text-warm-bamboo text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md border border-warm-bamboo/30">
                      {p.categoryName}
                    </span>

                    {/* Quick action buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleWishlist(p)}
                        className={`p-2.5 rounded-full shadow-md border border-[#D8CBB6] transition-all ${
                          isLiked ? 'bg-red-50 text-red-600' : 'bg-white text-charcoal hover:text-red-600'
                        }`}
                        aria-label="Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => onQuickView && onQuickView(p)}
                        className="p-2.5 rounded-full bg-white text-charcoal hover:text-forest shadow-md border border-[#D8CBB6]"
                        aria-label="Quick view"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="w-full py-3 px-5 bg-forest hover:bg-forest-light text-sand-50 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                      >
                        <ShoppingBag className="w-4 h-4 text-warm-bamboo" />
                        <span>Add To Basket</span>
                      </button>
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#4F722A] uppercase tracking-widest font-bold">
                        Item 0{idx + 1}
                      </span>
                      <span className="text-xs text-[#171815]/70 font-semibold bg-[#FAF7F0] px-2.5 py-0.5 rounded-full border border-[#D8CBB6]">
                        {p.inStock ? 'In Stock' : 'Pre-order'}
                      </span>
                    </div>

                    <Link
                      to={`/product/${p.slug}`}
                      className="font-serif text-xl sm:text-2xl xl:text-3xl font-bold text-[#171815] group-hover:text-forest transition-colors block leading-snug line-clamp-1"
                    >
                      {p.name}
                    </Link>

                    <p className="text-xs text-[#171815]/70 line-clamp-1 font-normal">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#D8CBB6]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-forest">
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
