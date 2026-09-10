import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const isLiked = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-2xl border border-sand-200 hover:border-bamboo-600/50 shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col justify-between overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/4.2] overflow-hidden bg-sand-100/60">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.newArrival && (
            <span className="bg-bamboo-800 text-warm-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
              New
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-warm-400 text-bamboo-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
              Save ₹{product.originalPrice - product.price}
            </span>
          )}
        </div>

        {/* Floating Quick Action Buttons on Desktop Hover */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 z-10">
          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-full shadow-md transition-all ${
              isLiked
                ? 'bg-red-50 text-red-600 border border-red-200'
                : 'bg-white/95 text-charcoal-700 hover:text-red-600 hover:bg-white'
            }`}
            aria-label="Wishlist toggle"
            title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
          </button>

          {/* Quick View Button */}
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="p-2 rounded-full bg-white/95 text-charcoal-700 hover:text-bamboo-700 hover:bg-white shadow-md transition-all"
              aria-label="Quick preview"
              title="Quick view product"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Bottom Quick Add on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:block opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full py-2.5 px-4 bg-bamboo-700/95 hover:bg-bamboo-800 text-sand-50 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-premium backdrop-blur-sm transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-warm-400" />
            <span>Add to Basket</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="uppercase font-bold tracking-wider text-warm-700">
              {product.categoryName || product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-500" />
              <span>{product.rating || 4.9}</span>
            </div>
          </div>

          {/* Product Title */}
          <Link
            to={`/product/${product.slug}`}
            className="font-serif font-bold text-sm sm:text-base text-charcoal-900 group-hover:text-bamboo-700 transition-colors line-clamp-1"
          >
            {product.name}
          </Link>

          {/* Short tagline/description snippet */}
          <p className="text-xs text-charcoal-500 mt-1 line-clamp-1">
            {product.description}
          </p>
        </div>

        {/* Price and Mobile Add */}
        <div className="pt-3.5 mt-2 border-t border-sand-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-base sm:text-lg text-bamboo-900">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-charcoal-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Mobile Instant Add Button */}
          <button
            onClick={() => addToCart(product, 1)}
            className="sm:hidden p-2 rounded-xl bg-bamboo-700 text-sand-50 active:scale-95 transition-all shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4 text-warm-400" />
          </button>
        </div>

      </div>

    </div>
  );
}
