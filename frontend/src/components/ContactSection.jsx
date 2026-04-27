import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Information */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#c9923f]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Phone</div>
                <a 
                  href="tel:+918077558106" 
                  className="text-white/70 hover:text-[#c9923f] transition-colors text-lg block mb-1"
                >
                  +91 8077558106
                </a>
                <a 
                  href="tel:+919415161097" 
                  className="text-white/70 hover:text-[#c9923f] transition-colors text-lg block"
                >
                  +91 9415161097
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#c9923f]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Email</div>
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
                <div className="text-white font-semibold mb-2">Address</div>
                <p className="text-white/70 text-lg">
                  Udyog Nagar, Panki, Kanpur
                </p>
              </div>
            </div>

            {/* GST */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9923f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-[#c9923f]" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">GST Number</div>
                <p className="text-white/70 text-lg">
                  09ACSPC3613R1Z1
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <div className="text-white font-semibold mb-4 text-lg">Follow Us</div>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/rew_bakerymachines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1410] rounded-full flex items-center justify-center border border-[#c9923f]/20 hover:border-[#c9923f] transition-all hover:scale-110"
                >
                  <Instagram className="text-[#c9923f]" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Google Map */}
          <div className="h-[500px] rounded-xl overflow-hidden border border-[#c9923f]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2376742897846!2d80.3126!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzU5LjYiTiA4MMKwMTgnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
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