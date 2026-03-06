import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AIIntelligenceSection from '../components/home/AIIntelligenceSection';
import CuratedListingsSection from '../components/home/CuratedListingsSection';
import ProcessSection from '../components/home/ProcessSection';
import TrustSignalsSection from '../components/home/TrustSignalsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import KeyPeopleSection from '../components/home/KeyPeopleSection';
import WhyTanzaniaSection from '../components/home/WhyTanzaniaSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  useSEO({
    title: 'Crespo Real Estate Ltd | Premium Tanzanian Property Platform',
    description: 'Crespo Real Estate Ltd offers professional property search, location trends analysis, and investment insights to find your perfect property in Tanzania.',
  });

  return (
    <div className="bg-[#F8F6F6] min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* AI Intelligence Section */}
      <AIIntelligenceSection />

      {/* The Path to Your New Beginning Section (How It Works) */}
      <ProcessSection />

      {/* Our Values Section */}
      <TrustSignalsSection />

      {/* Why Invest in Tanzania Section */}
      <WhyTanzaniaSection />

      {/* Our Key People Section */}
      <KeyPeopleSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Hot Deals 🔥 Section */}
      <CuratedListingsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
