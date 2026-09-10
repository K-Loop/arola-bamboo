import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Heart, Sparkles, Truck, RefreshCw } from 'lucide-react';
import CheckoutModal from '../components/common/CheckoutModal';
import { useToast } from '../context/ToastContext';

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    grandTotal,
    freeShippingThreshold,
    totalItemsCount
  } = useCart();
  const { toggleWishlist } = useWishlist();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'AROLA10') {
      const disc = Math.round(subtotal * 0.1);
      setDiscountAmount(disc);
      addToast('Coupon AROLA10 applied! 10% eco-discount unlocked.');
    } else if (promoCode.trim().toUpperCase() === 'GREENINDIA') {
      const disc = Math.round(subtotal * 0.15);
      setDiscountAmount(disc);
      addToast('Coupon GREENINDIA applied! 15% discount unlocked.');
    } else {
      addToast('Invalid coupon code. Try AROLA10 or GREENINDIA', 'error');
    }
  };

  const finalTotal = Math.max(0, grandTotal - discountAmount);

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-charcoal min-h-screen">
      
      {/* 1. Header */}
      <section className="w-full py-16 lg:py-20 bg-[#F3EDE4] border-b border-natural-sand/60">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-warm-bamboo block mb-3">
            Conscious Selection
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold text-forest leading-tight">
            Shopping Basket
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 mt-3 font-light">
            {totalItemsCount} {totalItemsCount === 1 ? 'handcrafted item' : 'handcrafted items'} reserved for direct dispatch from Madurai
          </p>
        </div>
      </section>

      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 lg:py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-24 px-6 bg-white rounded-[2.5rem] border border-natural-sand/70 max-w-2xl mx-auto space-y-6 shadow-luxury">
            <div className="w-24 h-24 bg-forest/5 text-forest rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-12 h-12" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-forest">
              Your basket is currently empty.
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 max-w-md mx-auto leading-relaxed font-light">
              Explore our authentic collections of botanical drinkware, organic canisters, handcrafted lampshades, and sustainable home essentials.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="px-9 py-4.5 bg-forest hover:bg-forest-light text-sand-50 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-luxury transition-all inline-flex items-center gap-2.5"
              >
                <span>Explore Botanical Catalog</span>
                <ArrowRight className="w-4 h-4 text-warm-bamboo" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Items Table (8 cols) */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-natural-sand/70 shadow-luxury space-y-8">
              <div className="flex items-center justify-between border-b border-natural-sand/60 pb-5">
                <h2 className="font-serif text-2xl font-bold text-forest">Cart Items ({totalItemsCount})</h2>
                <Link to="/shop" className="text-xs font-bold uppercase tracking-wider text-forest hover:text-warm-bamboo">
                  + Continue Shopping
                </Link>
              </div>

              <div className="divide-y divide-natural-sand/60">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-8 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                    
                    {/* Image & Title */}
                    <div className="flex gap-5 items-center flex-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover bg-sand-100 border border-natural-sand/60 shrink-0"
                      />
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-warm-bamboo block">
                          {item.categoryName || item.category}
                        </span>
                        <Link
                          to={`/product/${item.slug}`}
                          className="font-serif font-bold text-lg sm:text-xl text-forest hover:text-warm-bamboo transition-colors block"
                        >
                          {item.name}
                        </Link>
                        <span className="font-serif font-bold text-base text-forest/90 block">
                          ₹{item.price} <span className="text-xs font-sans text-charcoal/50 font-normal">/ unit</span>
                        </span>
                      </div>
                    </div>

                    {/* Quantity & Subtotal Controls */}
                    <div className="flex items-center justify-between w-full sm:w-auto gap-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-natural-sand/40">
                      <div className="flex items-center border border-natural-sand rounded-xl bg-[#FAF8F5] p-1.5 shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-charcoal/70 hover:bg-natural-sand/50 rounded-lg text-sm font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold text-sm text-forest font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-charcoal/70 hover:bg-natural-sand/50 rounded-lg text-sm font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right min-w-[90px]">
                        <span className="font-serif font-bold text-xl text-forest block">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2.5 text-charcoal/40 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Free shipping banner */}
              <div className="p-4.5 rounded-2xl bg-[#FAF8F5] border border-natural-sand/70 flex items-center gap-3 text-xs text-forest font-medium">
                <Truck className="w-5 h-5 text-warm-bamboo shrink-0" />
                <span>
                  {subtotal >= 999 
                    ? "✓ You have unlocked FREE pan-India carbon-neutral courier dispatch!" 
                    : `Add ₹${999 - subtotal} more of artisanal products to unlock Free Shipping.`}
                </span>
              </div>
            </div>

            {/* Right Summary & Checkout Box (4 cols) */}
            <div className="lg:col-span-4 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-natural-sand/80 shadow-luxury space-y-6">
              <h3 className="font-serif font-bold text-2xl text-forest border-b border-natural-sand/60 pb-4">
                Order Summary
              </h3>

              {/* Promo Code Box */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Coupon (AROLA10 / GREENINDIA)"
                  className="w-full px-4 py-3 rounded-xl border border-natural-sand text-xs uppercase font-mono focus:outline-none focus:border-forest"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-forest hover:bg-forest-light text-sand-50 font-bold rounded-xl text-xs uppercase tracking-wider shrink-0 transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Breakdown */}
              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal/70 pt-2 border-t border-natural-sand/60">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-bold text-forest">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Courier Shipping</span>
                  <span>{shippingFee === 0 ? <span className="text-forest font-bold">FREE</span> : `₹${shippingFee}`}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-forest font-bold">
                    <span>Eco Coupon Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-forest pt-4 border-t border-natural-sand/70">
                  <span className="font-serif text-xl">Grand Total</span>
                  <span className="font-serif text-3xl text-forest">₹{finalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full py-4.5 bg-forest hover:bg-forest-light text-sand-50 font-bold rounded-2xl text-xs sm:text-sm uppercase tracking-[0.2em] shadow-luxury flex items-center justify-center gap-2.5 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-warm-bamboo" />
              </button>

              <div className="pt-2 text-xs text-charcoal/60 space-y-2 text-center">
                <p className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest" />
                  <span>100% Encrypted & Safe Razorpay / UPI Payments</span>
                </p>
                <p className="text-[11px] font-light">Direct artisan dispatch with tamper-proof botanical honeycomb packaging.</p>
              </div>

            </div>

          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

    </div>
  );
}
