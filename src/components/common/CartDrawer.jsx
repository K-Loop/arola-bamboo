import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function CartDrawer({ onOpenCheckout }) {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    grandTotal,
    freeShippingThreshold,
    totalItemsCount
  } = useCart();

  const navigate = useNavigate();
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountLeftForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 z-50 bg-charcoal-900/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-sand-50 shadow-2xl flex flex-col justify-between border-l border-sand-300"
          >
            {/* Header */}
            <div className="p-5 border-b border-sand-200 bg-white/80 backdrop-blur-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-bamboo-700" />
                <h3 className="font-serif text-lg font-bold text-charcoal-900">Your Bamboo Basket</h3>
                <span className="text-xs bg-bamboo-100 text-bamboo-800 font-semibold px-2 py-0.5 rounded-full">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 text-charcoal-500 hover:text-charcoal-900 rounded-full hover:bg-sand-200/60 transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-5 py-3 bg-bamboo-50/70 border-b border-bamboo-100 text-xs text-charcoal-800">
              {amountLeftForFreeShipping > 0 ? (
                <div>
                  <p className="font-medium text-bamboo-900">
                    Add <span className="font-bold text-bamboo-700">₹{amountLeftForFreeShipping}</span> more for <span className="font-bold text-bamboo-800">FREE delivery</span> across India!
                  </p>
                  <div className="w-full bg-sand-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-bamboo-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progressToFreeShipping}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-bamboo-800 font-semibold">
                  <Sparkles className="w-4 h-4 text-warm-500" />
                  <span>Congratulations! You've unlocked FREE Delivery across India.</span>
                </div>
              )}
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 divide-y divide-sand-200 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-16 h-16 rounded-full bg-bamboo-100 flex items-center justify-center text-bamboo-700 mb-4">
                    <ShoppingBag className="w-8 h-8 opacity-80" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-charcoal-900">Your bamboo basket is waiting.</h4>
                  <p className="text-xs text-charcoal-600 mt-1 max-w-xs leading-relaxed">
                    Discover hand-turned bamboo kitchenware, organic personal care, and sculptural lighting.
                  </p>
                  <button
                    onClick={() => {
                      setIsDrawerOpen(false);
                      navigate('/shop');
                    }}
                    className="mt-6 px-6 py-2.5 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Explore Shop
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl border border-sand-300 bg-sand-100 shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={() => setIsDrawerOpen(false)}
                            className="font-serif font-bold text-sm text-charcoal-900 hover:text-bamboo-700 transition-colors line-clamp-1"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-charcoal-400 hover:text-red-600 p-1 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-warm-700 font-medium block mt-0.5">
                          {item.categoryName || item.category}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-sand-300 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-charcoal-600 hover:bg-sand-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-charcoal-900 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-charcoal-600 hover:bg-sand-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-serif font-bold text-sm text-bamboo-900">
                            ₹{item.price * item.quantity}
                          </span>
                          {item.quantity > 1 && (
                            <span className="text-[10px] text-charcoal-500 block">
                              ₹{item.price} each
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="p-5 bg-white border-t border-sand-300 space-y-3.5 shadow-card">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-charcoal-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-charcoal-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-600">
                    <span>Estimated Shipping</span>
                    <span>{shippingFee === 0 ? <span className="text-bamboo-700 font-bold">FREE</span> : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-charcoal-900 pt-2 border-t border-sand-200">
                    <span className="font-serif text-base">Total</span>
                    <span className="font-serif text-lg text-bamboo-900">₹{grandTotal}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsDrawerOpen(false);
                      if (onOpenCheckout) {
                        onOpenCheckout();
                      } else {
                        navigate('/cart');
                      }
                    }}
                    className="w-full py-3 px-4 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/cart"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full py-2.5 px-4 text-center rounded-xl font-medium text-xs text-charcoal-700 hover:bg-sand-100 transition-colors"
                  >
                    View Full Cart & Apply Coupons
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-charcoal-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-bamboo-600" />
                  <span>100% Secure Checkout • Authentic Artisan Sourced</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
