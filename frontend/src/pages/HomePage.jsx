import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PresenceSection from '../components/PresenceSection';
import ProductsSection from '../components/ProductsSection';
import RecognitionsSection from '../components/RecognitionsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#1a0f08]">
      <Header />
      <HeroSection />
      <AboutSection />
      <PresenceSection />
      <ProductsSection />
      <RecognitionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;