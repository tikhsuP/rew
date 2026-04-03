import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PresenceSection from '../components/PresenceSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PresenceSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
