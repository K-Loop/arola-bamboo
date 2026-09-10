import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function TrainingRegisterModal({ isOpen, onClose }) {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    applicantType: 'Women SHG Member',
    program: '60-Day Bamboo Craft & Lathe Masterclass',
    location: 'Madurai Training Facility',
    motivation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Training application received! Our admissions coordinator will reach out.');
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
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">Application Submitted!</h3>
              <p className="text-sm text-charcoal-600 max-w-sm mx-auto">
                We are excited to welcome you to the craft. Our training team will review your details and confirm batch dates.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-bamboo-100 text-bamboo-800 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-warm-700">Arola Academy</span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">Apply for Bamboo Craft Training</h3>
                </div>
              </div>

              <p className="text-xs text-charcoal-600 mb-6">
                Certified hands-on training for women entrepreneurs, tribal youth, college interns, and artisans in Madurai.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sundaram"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94867 55447"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">Applicant Profile</label>
                    <select
                      value={formData.applicantType}
                      onChange={(e) => setFormData({ ...formData, applicantType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                    >
                      <option>Women SHG Member</option>
                      <option>Tribal Youth Artisan</option>
                      <option>College Student / Intern</option>
                      <option>Aspiring Eco-Entrepreneur</option>
                      <option>Architect / Designer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">Training Program</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs"
                  >
                    <option>60-Day Bamboo Craft & Lathe Masterclass (Full Certificate)</option>
                    <option>30-Day Woven Bamboo Home Decor Fellowship</option>
                    <option>15-Day Green Construction & Joinery Workshop</option>
                    <option>3-Day Weekend Immersion for Designers</option>
                    <option>Academic Summer Internship (4-8 Weeks)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">Why would you like to join?</label>
                  <textarea
                    rows={2}
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Briefly describe your interest or background..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 bg-white focus:outline-none focus:border-bamboo-600 text-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
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
