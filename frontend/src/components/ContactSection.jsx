import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#1a0f08]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#d4a574]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Phone</div>
                <a 
                  href="tel:+918077558106" 
                  className="text-white/70 hover:text-[#d4a574] transition-colors text-lg block mb-1"
                >
                  +91 8077558106
                </a>
                <a 
                  href="tel:+919415161097" 
                  className="text-white/70 hover:text-[#d4a574] transition-colors text-lg block"
                >
                  +91 9415161097
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/whatsapp.svg" width={20} height={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">WhatsApp</div>
                <a 
                  href="https://wa.me/918077558106?text=Hi REW, I am interested in your product(s). Let's connect."
                  target="_blank"
                  className="text-white/70 hover:text-[#d4a574] transition-colors text-lg block mb-1"
                >
                  +91 8077558106
                </a>
                <a 
                  href="https://wa.me/919415161097?text=Hi REW, I am interested in your product(s). Let's connect."
                  target="_blank"
                  className="text-white/70 hover:text-[#d4a574] transition-colors text-lg block"
                >
                  +91 9415161097
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/instagram.svg" width={20} height={20} />
              </div>
              <div className="text-white font-semibold mb-2">
                <div className="text-white font-semibold mb-2">Instagram</div>
              <a 
                  href="https://www.instagram.com/rew_bakerymachines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#d4a574] transition-colors text-lg break-all"
                >
                  rew_bakerymachines
              </a>
                </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#d4a574]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Email</div>
                <a 
                  href="mailto:rahulengineering3@gmail.com" 
                  className="text-white/70 hover:text-[#d4a574] transition-colors text-lg break-all"
                >
                  rahulengineering3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#d4a574]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Address</div>
                <p className="text-white/70 text-lg">
                  F-29, Site-5, Road No. 6,<br />
                  Udyog Kunj, Panki, Kanpur,<br />
                  Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-[#d4a574]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">GST Number</div>
                <p className="text-white/70 text-lg">
                  09ACSPC3613R1Z1
                </p>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-xl overflow-hidden border border-[#c9923f]/20">
            <iframe
              src="https://maps.google.com/maps?q=26.449514,80.271431&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="REW Bakery Machines Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;