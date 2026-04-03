import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] relative">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          Get in <span className="text-[#c9923f]">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-xl p-8 border border-[#c9923f]/20 hover:border-[#c9923f]/50 transition-all text-center">
            <div className="w-16 h-16 bg-[#c9923f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-[#c9923f]" size={28} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Phone</h3>
            <a href="tel:+918077558106" className="text-white/70 hover:text-[#c9923f] transition-colors text-sm">
              +91 80775 58106
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-xl p-8 border border-[#c9923f]/20 hover:border-[#c9923f]/50 transition-all text-center">
            <div className="w-16 h-16 bg-[#c9923f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-[#c9923f]" size={28} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Email</h3>
            <a href="mailto:info@rewbakerymachines.com" className="text-white/70 hover:text-[#c9923f] transition-colors text-sm">
              info@rewbakerymachines.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-xl p-8 border border-[#c9923f]/20 hover:border-[#c9923f]/50 transition-all text-center">
            <div className="w-16 h-16 bg-[#c9923f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-[#c9923f]" size={28} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Address</h3>
            <p className="text-white/70 text-sm">
              A-42, Industrial Area, Meerut, UP, India
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#c9923f] to-[#d4a574] rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Request a Quote Today
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you find the perfect machinery solution for your bakery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('tel:+918077558106', '_self')}
                  className="bg-white text-[#c9923f] hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-md shadow-xl hover:scale-105 transition-all"
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
                <Button
                  onClick={() => window.open('mailto:info@rewbakerymachines.com', '_self')}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#c9923f] font-semibold px-8 py-6 text-lg rounded-md transition-all"
                >
                  <Mail className="mr-2" size={20} />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
