import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Send, CheckCircle, Sparkles } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function CustomGiftingModal({ isOpen, onClose }) {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    occasion: 'Corporate Conclave / Event',
    estimatedQuantity: '50 - 100 units',
    customEngraving: true,
    budgetRange: '₹300 - ₹600 per unit',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Your bespoke gifting inquiry has been received! Our team will contact you within 24 hours.');
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-charcoal-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-sand-50 rounded-3xl shadow-2xl border border-sand-300 max-w-xl w-full p-6 sm:p-8 relative overflow-hidden my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-sand-200 text-charcoal-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-bamboo-100 text-bamboo-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">Inquiry Received!</h3>
              <p className="text-sm text-charcoal-600 max-w-sm mx-auto">
                Thank you for choosing conscious gifting. We have received your requirement for <b>{formData.estimatedQuantity}</b> and will share a customized proposal shortly.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-bamboo-100 text-bamboo-800 rounded-xl">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-warm-700">Arola Gifting Studio</span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">Request Custom Gifting Proposal</h3>
                </div>
              </div>

              <p className="text-xs text-charcoal-600 mb-6">
                Personalized laser-engraved bamboo bottles, stationery sets, and artisan hampers for weddings, hotels, and corporate gifting.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Krishnan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Company / Event Name</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. EcoVenture Ltd"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Occasion / Type</label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    >
                      <option>Corporate Conclave / Event</option>
                      <option>Wedding Return Gifts</option>
                      <option>Hospitality & Hotel Amenity</option>
                      <option>Festive Employee Hamper</option>
                      <option>Conference Welcome Kit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Estimated Quantity</label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    >
                      <option>25 - 50 units</option>
                      <option>50 - 100 units</option>
                      <option>100 - 500 units</option>
                      <option>500 - 2,000+ units</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">Specific Requirements / Custom Logo Notes</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about desired products, delivery timeline, or custom logo engraving preferences..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Gifting Inquiry</span>
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
