import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Lock, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export default function CheckoutModal({ isOpen, onClose }) {
  const { cartItems, grandTotal, subtotal, shippingFee, clearCart } = useCart();
  const { addToast } = useToast();

  const [step, setStep] = useState('details'); // details | success
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    paymentMethod: 'upi',
  });
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = 'ARL-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep('success');

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#365500', '#D8B27A', '#84cc16', '#c29657']
      });
    } catch {
      // fallback
    }

    addToast(`Order ${generatedId} placed successfully!`);
    clearCart();
  };

  const handleClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-50 bg-charcoal-900/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-sand-50 rounded-3xl shadow-2xl border border-sand-300 max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden my-8"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-sand-200 text-charcoal-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'success' ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-20 h-20 bg-bamboo-100 text-bamboo-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-bamboo-700">Thank You for Supporting Sustainable Livelihoods</span>
                <h3 className="font-serif text-3xl font-bold text-charcoal-900 mt-1">Order Confirmed!</h3>
                <p className="font-mono text-sm font-semibold text-warm-700 mt-1">Order Reference: {orderId}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-sand-300 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between font-medium text-charcoal-700">
                  <span>Recipient:</span>
                  <span className="font-semibold text-charcoal-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between font-medium text-charcoal-700">
                  <span>Shipping To:</span>
                  <span className="text-right font-semibold text-charcoal-900">{formData.city}, {formData.state} - {formData.pincode}</span>
                </div>
                <div className="flex justify-between font-medium text-charcoal-700">
                  <span>Payment Method:</span>
                  <span className="uppercase font-bold text-bamboo-800">{formData.paymentMethod}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-bamboo-900 pt-2 border-t border-sand-200">
                  <span>Total Amount Paid:</span>
                  <span className="font-serif text-base">₹{grandTotal}</span>
                </div>
              </div>

              <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
                A confirmation SMS & Email with live courier dispatch details will be sent to <b>{formData.phone || formData.email}</b>.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-bamboo-100 text-bamboo-800 rounded-xl">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-warm-700">Safe & Encrypted</span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">Secure Direct Checkout</h3>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ananya Deshmukh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Mobile Number (for tracking) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-charcoal-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600"
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">Street Address, Apartment, Landmark *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Flat 4B, Green Enclave, 12th Main"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Chennai / Madurai"
                      className="w-full px-3 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="600001"
                      className="w-full px-3 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 font-mono"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-2">
                  <label className="block font-semibold text-charcoal-700 mb-2">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'upi', label: 'UPI / GPay / PhonePe' },
                      { id: 'card', label: 'Debit / Credit Card' },
                      { id: 'cod', label: 'Cash on Delivery' },
                    ].map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          formData.paymentMethod === pm.id
                            ? 'border-bamboo-700 bg-bamboo-100/70 text-bamboo-950 font-bold'
                            : 'border-sand-300 bg-white text-charcoal-600 hover:border-sand-400'
                        }`}
                      >
                        {pm.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Row & Submit */}
                <div className="pt-4 border-t border-sand-300 flex items-center justify-between">
                  <div>
                    <span className="text-charcoal-500 text-[11px] block">Order Total:</span>
                    <span className="font-serif text-xl font-bold text-bamboo-900">₹{grandTotal}</span>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-warm-400" />
                    <span>Confirm & Pay ₹{grandTotal}</span>
                  </button>
                </div>

              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
