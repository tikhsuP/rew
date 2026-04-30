import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Products', id: 'products' },
    { label: 'Clients', id: 'presence' },
    { label: 'Privacy Policy', id: null }
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
    <footer className="bg-[#0f0805] py-6 border-t border-[#c9923f]/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © {currentYear} Rahul Engineering Works. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="text-white/60 hover:text-[#d4a574] transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <span className="text-white/60 text-sm">GST: 09ACSPC3613R1Z1</span>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;