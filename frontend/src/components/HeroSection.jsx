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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1703607888337-aae6d77b3d83?q=80&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
            Industrial Bakery Machinery
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#c9923f] mb-6 sm:mb-8 font-light tracking-wide">
            Built for Performance & Scale
          </p>
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
            Trusted by bakeries across India for reliable, high-efficiency production systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#c9923f] to-[#d4a574] hover:from-[#b8822e] hover:to-[#c9923f] text-white font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-2xl hover:shadow-[#c9923f]/50 hover:scale-105"
            >
              Get Quote
            </Button>
            <Button
              onClick={() => scrollToSection('products')}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#c9923f] font-semibold px-8 py-6 text-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Products
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:border-[#c9923f]/50 transition-all duration-300">
              <Flag className="text-[#c9923f]" size={24} />
              <span className="text-white font-medium">Made in India</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:border-[#c9923f]/50 transition-all duration-300">
              <Award className="text-[#c9923f]" size={24} />
              <span className="text-white font-medium">100+ Installations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#c9923f] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
