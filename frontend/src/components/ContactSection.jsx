import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Get in Touch
          </h2>
          
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#c9923f]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Phone</div>
                <a 
                  href="tel:+918077558106" 
                  className="text-white/70 hover:text-[#c9923f] transition-colors text-lg"
                >
                  +91 80775 58106
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#c9923f]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Email</div>
                <a 
                  href="mailto:info@rewbakerymachines.com" 
                  className="text-white/70 hover:text-[#c9923f] transition-colors text-lg break-all"
                >
                  info@rewbakerymachines.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#c9923f]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Address</div>
                <p className="text-white/70 text-lg">
                  A-42, Industrial Area, Meerut, UP, India
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <div className="text-white font-semibold mb-4 text-lg">Follow Us</div>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                >
                  <Facebook className="text-[#c9923f]" size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                >
                  <Instagram className="text-[#c9923f]" size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                >
                  <Linkedin className="text-[#c9923f]" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
