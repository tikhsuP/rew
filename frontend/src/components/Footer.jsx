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
    <footer className="bg-black border-t border-white/10 py-8 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#c9923f]/5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-[#c9923f] italic">REW</span>
                <span className="text-white text-xs ml-2 font-light tracking-wider">BAKERY MACHINES</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Leading manufacturer of industrial bakery machinery in India. Built for performance, designed for scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#c9923f] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Phone: +91 80775 58106</li>
              <li>Email: info@rewbakerymachines.com</li>
              <li className="text-xs pt-2">GST: 09ACSPC3B991</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-white/60 text-sm text-center sm:text-left">
            © {currentYear} REW Bakery Machines. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1a1a1a] rounded-full border border-[#c9923f]/20 hover:border-[#c9923f] hover:bg-[#c9923f]/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
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
