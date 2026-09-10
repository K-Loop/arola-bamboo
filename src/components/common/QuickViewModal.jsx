import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const isLiked = isInWishlist(product.id);
  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-charcoal-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-sand-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-sand-300 max-w-4xl w-full overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-sand-200 text-charcoal-700 hover:text-charcoal-900 transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Gallery */}
              <div className="p-6 bg-white border-b md:border-b-0 md:border-r border-sand-200 flex flex-col justify-between">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-sand-100 mb-4 border border-sand-200">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 bg-warm-400 text-bamboo-950 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                          selectedImage === idx
                            ? 'border-bamboo-700 scale-105 shadow-sm'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-warm-700">
                      {product.categoryName}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-1">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating & Artisan */}
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center text-amber-500 font-bold gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span>{product.rating || 4.9}</span>
                    </div>
                    <span className="text-charcoal-500">
                      ({product.reviewsCount || 40} reviews)
                    </span>
                    {product.artisanName && (
                      <span className="text-bamboo-700 font-medium">
                        • {product.artisanName}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl font-bold text-bamboo-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base text-charcoal-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  {product.features && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-charcoal-500 block">
                        Highlights
                      </span>
                      {product.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-charcoal-800">
                          <Check className="w-3.5 h-3.5 text-bamboo-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-sand-200 space-y-4">
                  <div className="flex items-center gap-3">
                    {/* Quantity */}
                    <div className="flex items-center border border-sand-300 rounded-xl bg-white p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:bg-sand-100 rounded-lg"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-xs text-charcoal-900 font-mono">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:bg-sand-100 rounded-lg"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-3 px-6 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add To Basket • ₹{product.price * quantity}</span>
                    </button>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`p-3 rounded-xl border transition-all ${
                        isLiked
                          ? 'border-red-300 bg-red-50 text-red-600'
                          : 'border-sand-300 bg-white text-charcoal-600 hover:text-bamboo-700'
                      }`}
                      aria-label="Wishlist toggle"
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500' : ''}`} />
                    </button>
                  </div>

                  {/* View Full Details Link */}
                  <div className="text-center pt-1">
                    <Link
                      to={`/product/${product.slug}`}
                      onClick={onClose}
                      className="text-xs font-semibold text-bamboo-700 hover:text-bamboo-900 inline-flex items-center gap-1.5 hover:underline"
                    >
                      <span>View Full Specifications & Care Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
