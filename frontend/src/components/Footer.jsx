import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Products', id: 'products' },
    { label: 'Clients', id: 'presence' },
    { label: 'Privacy Policy', id: null }
  ];

  const socialLinks = [
    { icon: Facebook, link: 'https://facebook.com' },
    { icon: Instagram, link: 'https://instagram.com' },
    { icon: Linkedin, link: 'https://linkedin.com' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black py-6 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left: Copyright */}
            <div className="text-white/60 text-sm">
              © REW Bakery Machines. All rights reserved.
            </div>

            {/* Center: Links */}
            <div className="flex flex-wrap gap-6 items-center">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/60 hover:text-[#c9923f] transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
              <span className="text-white/60 text-sm">GST: 09ACSPC3B991</span>
            </div>

            {/* Right: Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                  >
                    <Icon className="text-[#c9923f]" size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Logo Section */}
      <div className="bg-[#f5f5f5] py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="text-[#c9923f] text-5xl font-bold italic">REW</span>
            <div className="text-left">
              <span className="text-gray-800 text-xs tracking-[0.3em] block uppercase">BAKERY</span>
              <span className="text-gray-600 text-xs tracking-[0.2em] uppercase">MACHINES</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
