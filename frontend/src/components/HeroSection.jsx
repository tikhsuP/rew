import React from 'react';
import { Button } from './ui/button';
import { Flag, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1703607888337-aae6d77b3d83?q=80&w=2400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Gradient Overlay - stronger on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            Industrial Bakery Machinery
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl lg:text-3xl text-[#c9923f] mb-6 font-normal">
            Built for Performance & Scale
          </h2>
          
          {/* Description */}
          <p className="text-base lg:text-lg text-white/80 mb-10 leading-relaxed">
            Trusted by bakeries across India for reliable,<br />
            high-efficiency production systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#c9923f] hover:bg-[#b8822e] text-white font-semibold px-8 py-6 text-base rounded transition-all"
            >
              Get Quote
            </Button>
            <Button
              onClick={() => scrollToSection('products')}
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded transition-all"
            >
              View Products
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded">
              <Flag className="text-[#c9923f]" size={18} />
              <span className="text-white text-sm">Made in India</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded">
              <Award className="text-[#c9923f]" size={18} />
              <span className="text-white text-sm">100+ Installations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;