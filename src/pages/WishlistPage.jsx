import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import QuickViewModal from '../components/common/QuickViewModal';
import { Heart, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-charcoal min-h-screen">
      
      {/* 1. Header */}
      <section className="w-full py-16 lg:py-20 bg-[#F3EDE4] border-b border-natural-sand/60">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-warm-bamboo block mb-3">
            Saved Creations
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold text-forest leading-tight">
            Your Wishlist
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 mt-3 font-light">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'artisanal piece' : 'artisanal pieces'} saved for mindful living
          </p>
        </div>
      </section>

      {/* 2. Products Grid */}
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 lg:py-16">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-24 px-6 bg-white rounded-[2.5rem] border border-natural-sand/70 max-w-2xl mx-auto space-y-6 shadow-luxury">
            <div className="w-24 h-24 bg-forest/5 text-warm-bamboo rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-12 h-12" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-forest">
              Your wishlist is currently empty.
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 max-w-md mx-auto leading-relaxed font-light">
              Click the heart icon on any bamboo piece you admire to curate your personal collection of botanical creations.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="px-9 py-4.5 bg-forest hover:bg-forest-light text-sand-50 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-luxury transition-all inline-flex items-center gap-2.5"
              >
                <span>Browse All Products</span>
                <ArrowRight className="w-4 h-4 text-warm-bamboo" />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-forest">
                Curated Saved Items ({wishlistItems.length})
              </span>
              <Link to="/shop" className="text-xs font-bold uppercase tracking-wider text-forest hover:text-warm-bamboo">
                + Browse More Creations
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {wishlistItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
}
