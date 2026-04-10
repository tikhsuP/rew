import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Get in Touch */}
          <div>
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
                    className="text-white/70 hover:text-[#c9923f] transition-colors"
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
                    className="text-white/70 hover:text-[#c9923f] transition-colors break-all"
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
                  <p className="text-white/70">
                    A-42, Industrial Area, Meerut, UP, India
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <div className="text-white font-semibold mb-4">Follow Us</div>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                  >
                    <Facebook className="text-[#c9923f]" size={18} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                  >
                    <Instagram className="text-[#c9923f]" size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                  >
                    <Linkedin className="text-[#c9923f]" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CTA Card (Replacing Inquiry Form) */}
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-[#c9923f] to-[#d4a574] rounded-lg p-12 w-full">
              <h3 className="text-3xl font-bold text-white mb-4">
                Request a Quote Today
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Our team of experts is ready to help you find the perfect machinery solution for your bakery. Contact us directly via phone, email, or social media.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918077558106"
                  className="bg-white text-[#c9923f] hover:bg-white/90 font-semibold px-8 py-4 rounded text-center transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="mailto:info@rewbakerymachines.com"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#c9923f] font-semibold px-8 py-4 rounded text-center transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Email Us
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
