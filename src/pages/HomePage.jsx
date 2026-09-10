import React, { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import BrandStatementSection from '../components/sections/BrandStatementSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import CategoryGridSection from '../components/sections/CategoryGridSection';
import WhyBambooSection from '../components/sections/WhyBambooSection';
import ArolaStorySection from '../components/sections/ArolaStorySection';
import ImpactStatsSection from '../components/sections/ImpactStatsSection';
import ProblemSection from '../components/sections/ProblemSection';
import ValuePropsSection from '../components/sections/ValuePropsSection';
import GreenConstructionSection from '../components/sections/GreenConstructionSection';
import CorporateGiftingSection from '../components/sections/CorporateGiftingSection';
import TrainingSection from '../components/sections/TrainingSection';
import NewArrivalsSection from '../components/sections/NewArrivalsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import StoriesSection from '../components/sections/StoriesSection';
import ClientsSection from '../components/sections/ClientsSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import ContactSection from '../components/sections/ContactSection';
import QuickViewModal from '../components/common/QuickViewModal';
import CustomGiftingModal from '../components/common/CustomGiftingModal';
import TrainingRegisterModal from '../components/common/TrainingRegisterModal';

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isGiftingModalOpen, setIsGiftingModalOpen] = useState(false);
  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Brand Statement */}
      <BrandStatementSection />

      {/* 03. Featured Products */}
      <FeaturedProductsSection onQuickView={setQuickViewProduct} />

      {/* 04. Categories Grid */}
      <CategoryGridSection />

      {/* 05. Why Bamboo */}
      <WhyBambooSection />

      {/* 06. Arola Story */}
      <ArolaStorySection />

      {/* 07. Impact Statistics */}
      <ImpactStatsSection />

      {/* 08. Problem We Solve */}
      <ProblemSection />

      {/* 09. Value Proposition */}
      <ValuePropsSection />

      {/* 10. Green Construction */}
      <GreenConstructionSection />

      {/* 11. Corporate Gifting */}
      <CorporateGiftingSection onOpenGiftingModal={() => setIsGiftingModalOpen(true)} />

      {/* 12. Training & Workshops */}
      <TrainingSection onOpenTrainingModal={() => setIsTrainingModalOpen(true)} />

      {/* 13. New Arrivals */}
      <NewArrivalsSection onQuickView={setQuickViewProduct} />

      {/* 14. Testimonials */}
      <TestimonialsSection />

      {/* 15. Stories & News */}
      <StoriesSection />

      {/* 16. Clients & Partners */}
      <ClientsSection />

      {/* 17. Final CTA */}
      <FinalCTASection />

      {/* 18. Contact */}
      <ContactSection />

      {/* Global Interactive Modals */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <CustomGiftingModal
        isOpen={isGiftingModalOpen}
        onClose={() => setIsGiftingModalOpen(false)}
      />

      <TrainingRegisterModal
        isOpen={isTrainingModalOpen}
        onClose={() => setIsTrainingModalOpen(false)}
      />

    </div>
  );
}
