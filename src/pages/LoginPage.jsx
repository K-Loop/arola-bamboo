import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, User, ArrowRight, ShieldCheck, CheckCircle2, LogOut, Package, TreeDeciduous, Sparkles } from 'lucide-react';
import ArolaLogo from '../components/common/ArolaLogo';

export default function LoginPage() {
  const { user, login, register, logout } = useAuth();
  const navigate = useNavigate();

  const [isRegisterTab, setIsRegisterTab] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegisterTab) {
      register(name || 'Conscious Patron', email);
    } else {
      login(email, name || 'Conscious Patron');
    }
  };

  return (
    <div className="pt-28 pb-28 bg-[#FAF8F5] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] border border-natural-sand/80 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Brand Visual Side (5 cols) */}
        <div className="lg:col-span-5 bg-forest text-sand-50 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-forest-light/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-warm-bamboo/20 blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <Link to="/" className="inline-block">
              <ArolaLogo className="h-10 w-auto" />
            </Link>

            <div className="pt-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-warm-bamboo block mb-2">
                Conscious Circle
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-sand-50 leading-tight">
                Patron Portal & Orders
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-sand-100/75 leading-relaxed font-light">
              Track your handcrafted sustainable orders, download architectural project blueprints, access verified artisan certificates, and participate in direct rural livelihoods.
            </p>
          </div>

          <div className="pt-10 border-t border-forest-light/30 text-xs text-sand-100/80 space-y-3 relative z-10">
            <div className="flex items-center gap-2.5">
              <TreeDeciduous className="w-4 h-4 text-warm-bamboo shrink-0" />
              <span>1 Order = 1 Bamboo Rhizome Planted in Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-warm-bamboo shrink-0" />
              <span>100% Ethical & Fair Trade Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Right Form or User Dashboard (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          {user ? (
            <div className="space-y-8">
              <div className="flex items-center gap-5 border-b border-natural-sand/60 pb-8">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-forest shadow-md"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-warm-bamboo block mb-1">
                    Verified Patron
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                    {user.name}
                  </h3>
                  <p className="text-xs text-charcoal/60 font-light mt-0.5">{user.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-natural-sand/70">
                  <span className="text-xs text-charcoal/50 block mb-1 font-medium">Member Since</span>
                  <span className="font-serif font-bold text-xl text-forest">{user.memberSince}</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-natural-sand/70">
                  <span className="text-xs text-charcoal/50 block mb-1 font-medium">Impact Culms Funded</span>
                  <span className="font-serif font-bold text-xl text-forest">{user.treesPlanted} Culms</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => navigate('/shop')}
                  className="w-full py-4 bg-forest hover:bg-forest-light text-sand-50 font-bold rounded-2xl text-xs uppercase tracking-[0.2em] shadow-luxury transition-all"
                >
                  Continue Shopping Catalog →
                </button>
                <button
                  onClick={logout}
                  className="w-full py-3.5 border border-natural-sand hover:bg-red-50 text-charcoal/80 hover:text-red-700 font-bold rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out of Session</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Tab Switcher */}
              <div className="flex border-b border-natural-sand/60 gap-8 text-sm font-semibold">
                <button
                  onClick={() => setIsRegisterTab(false)}
                  className={`pb-4 transition-colors relative font-serif text-lg ${
                    !isRegisterTab ? 'text-forest font-bold' : 'text-charcoal/40'
                  }`}
                >
                  Sign In
                  {!isRegisterTab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />}
                </button>
                <button
                  onClick={() => setIsRegisterTab(true)}
                  className={`pb-4 transition-colors relative font-serif text-lg ${
                    isRegisterTab ? 'text-forest font-bold' : 'text-charcoal/40'
                  }`}
                >
                  Create Account
                  {isRegisterTab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />}
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                {isRegisterTab && (
                  <div>
                    <label className="block font-bold text-forest/80 mb-2 uppercase tracking-wider text-[11px]">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-warm-bamboo absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya Deshmukh"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-natural-sand bg-[#FAF8F5] focus:outline-none focus:border-forest focus:bg-white text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-bold text-forest/80 mb-2 uppercase tracking-wider text-[11px]">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-warm-bamboo absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-natural-sand bg-[#FAF8F5] focus:outline-none focus:border-forest focus:bg-white text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-bold text-forest/80 uppercase tracking-wider text-[11px]">Password</label>
                    {!isRegisterTab && (
                      <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link dispatched to " + (email || "your email")); }} className="text-[11px] text-forest font-semibold hover:underline">
                        Forgot Password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-warm-bamboo absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-natural-sand bg-[#FAF8F5] focus:outline-none focus:border-forest focus:bg-white text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 bg-forest hover:bg-forest-light text-sand-50 font-bold rounded-2xl text-xs uppercase tracking-[0.2em] shadow-luxury transition-all flex items-center justify-center gap-2.5 pt-2 mt-4"
                >
                  <span>{isRegisterTab ? 'Register Account' : 'Sign In to Portal'}</span>
                  <ArrowRight className="w-4 h-4 text-warm-bamboo" />
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
