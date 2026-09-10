import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { products } from '../../data/products';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShoppingBag, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function NewArrivalsSection({ onQuickView }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const newItems = products.filter(p => p.newArrival || p.featured);

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#F4EFE6] border-b border-[#D8CBB6] overflow-hidden">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#D8CBB6]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              <span>Fresh From The Workshop</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,6rem)] font-bold text-[#171815] leading-[1.04] tracking-tight">
              NEW ARRIVALS &<br />
              <span className="italic font-normal text-[#2A5412]">LIMITED EDITIONS.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full bg-white border-2 border-[#D8CBB6] hover:bg-[#FAF7F0] text-charcoal shadow-sm transition-all hover:scale-105 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full bg-white border-2 border-[#D8CBB6] hover:bg-[#FAF7F0] text-charcoal shadow-sm transition-all hover:scale-105 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 xl:gap-8">
            {newItems.map((product) => {
              const isLiked = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_46%] lg:flex-[0_0_31%] xl:flex-[0_0_23.4%] min-w-0 group bg-white rounded-3xl p-6 xl:p-7 border-2 border-[#D8CBB6] shadow-[0_10px_30px_rgba(23,24,21,0.08)] hover:shadow-[0_20px_50px_rgba(30,50,8,0.18)] hover:border-forest/50 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/4.3] rounded-2xl overflow-hidden bg-[#FAF7F0] border border-[#E7E0D3] mb-5">
                    <Link to={`/product/${product.slug}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                    </Link>

                    {/* Badge */}
                    <span className="absolute top-3.5 left-3.5 bg-forest text-warm-bamboo text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-warm-bamboo/30">
                      New Release
                    </span>

                    {/* Action buttons */}
                    <div className="absolute top-3.5 right-3.5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`p-2.5 rounded-full shadow-sm border border-[#D8CBB6] transition-all cursor-pointer ${
                          isLiked ? 'bg-red-50 text-red-600' : 'bg-white text-charcoal hover:text-red-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => onQuickView && onQuickView(product)}
                        className="p-2.5 rounded-full bg-white text-charcoal hover:text-forest shadow-sm border border-[#D8CBB6] cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-full py-3 bg-forest hover:bg-forest-light text-sand-50 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4 text-warm-bamboo" />
                        <span>Add To Basket</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-[#4F722A] tracking-widest block">
                      {product.categoryName}
                    </span>
                    <Link
                      to={`/product/${product.slug}`}
                      className="font-serif text-lg sm:text-xl font-bold text-[#171815] group-hover:text-forest transition-colors line-clamp-1 leading-snug"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-[#171815]/70 line-clamp-1 font-normal">
                      {product.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-[#D8CBB6] flex justify-between items-center">
                      <span className="font-serif text-lg font-bold text-forest">
                        ₹{product.price}
                      </span>
                      <Link to={`/product/${product.slug}`} className="text-xs font-bold text-forest uppercase tracking-wider flex items-center gap-1 group-hover:text-bamboo-green">
                        <span>Shop</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
