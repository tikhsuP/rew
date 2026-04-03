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
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#1a1410]"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(26, 20, 16, 0.95), rgba(26, 20, 16, 0.7), rgba(26, 20, 16, 0.3)), url(https://images.unsplash.com/photo-1703607888337-aae6d77b3d83?q=80&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)' }}></div>

      <div className="container mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Industrial Bakery Machinery
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl lg:text-3xl text-[#d4a574] mb-6 font-normal">
            Built for Performance & Scale
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
            Trusted by bakeries across India for reliable,<br />high-efficiency production systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#c9923f] hover:bg-[#b8822e] text-white font-semibold px-8 py-6 text-base rounded-md transition-all duration-300 shadow-lg"
            >
              Get Quote
            </Button>
            <Button
              onClick={() => scrollToSection('products')}
              variant="outline"
              className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-md transition-all duration-300"
            >
              View Products
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-5 py-3 rounded-md border border-white/20">
              <Flag className="text-[#c9923f]" size={20} />
              <span className="text-white text-sm font-medium">Made in India</span>
            </div>
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-5 py-3 rounded-md border border-white/20">
              <Award className="text-[#c9923f]" size={20} />
              <span className="text-white text-sm font-medium">100+ Installations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
