import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';

// Common Components
import Navbar from './components/common/Navbar';
import MobileMenu from './components/common/MobileMenu';
import CartDrawer from './components/common/CartDrawer';
import SearchOverlay from './components/common/SearchOverlay';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import CheckoutModal from './components/common/CheckoutModal';
import CustomCursor from './components/common/CustomCursor';
import SmoothScroll from './components/common/SmoothScroll';
import IntroScreen from './components/common/IntroScreen';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ImpactPage from './pages/ImpactPage';
import ConstructionPage from './pages/ConstructionPage';
import TrainingPage from './pages/TrainingPage';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-warm-white text-charcoal font-sans selection:bg-forest selection:text-white">
      {/* Cinematic Brand Intro Screen */}
      <IntroScreen />

      <ScrollToTop />
      <ScrollToTopButton />
      <CustomCursor />
      
      {/* Global Navbar */}
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

      {/* Full-Screen Animated Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* Global Search Modal Overlay */}
      <SearchOverlay />

      {/* Main Routed Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:slug" element={<StoryDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      {/* Global Direct Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Redesigned Dark Green Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <ToastProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <SearchProvider>
                  <AppContent />
                </SearchProvider>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ToastProvider>
      </SmoothScroll>
    </Router>
  );
}
