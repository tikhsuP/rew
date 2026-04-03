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
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} REW Bakery Machines. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
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

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1a1410] rounded-full border border-[#c9923f]/20 hover:border-[#c9923f] flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="text-[#c9923f]" size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
