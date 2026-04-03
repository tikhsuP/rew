import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Products', 'Clients', 'About', 'Contact'];

  const scrollToSection = (item) => {
    setIsMobileMenuOpen(false);
    const sectionMap = {
      'Home': 'hero',
      'Products': 'products',
      'Clients': 'presence',
      'About': 'about',
      'Contact': 'contact'
    };
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl sm:text-3xl font-bold">
              <span className="text-[#c9923f] italic">REW</span>
              <span className="text-white text-xs sm:text-sm ml-2 font-light tracking-wider">BAKERY MACHINES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/90 hover:text-[#c9923f] transition-colors duration-300 text-sm font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9923f] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* GST & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-white/70 text-sm">GST: 09ACSPC3B991</span>
            <Button
              onClick={() => scrollToSection('Contact')}
              className="bg-gradient-to-r from-[#c9923f] to-[#d4a574] hover:from-[#b8822e] hover:to-[#c9923f] text-white font-semibold px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm py-4 space-y-4 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-[#c9923f] hover:bg-white/5 transition-all duration-300"
              >
                {item}
              </button>
            ))}
            <div className="px-4 py-2 text-white/70 text-sm">GST: 09ACSPC3B991</div>
            <div className="px-4">
              <Button
                onClick={() => scrollToSection('Contact')}
                className="w-full bg-gradient-to-r from-[#c9923f] to-[#d4a574] hover:from-[#b8822e] hover:to-[#c9923f] text-white font-semibold transition-all duration-300"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
