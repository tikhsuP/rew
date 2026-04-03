import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80775 58106',
      link: 'tel:+918077558106'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@rewbakerymachines.com',
      link: 'mailto:info@rewbakerymachines.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'A-42, Industrial Area, Meerut, UP, India',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201, 146, 63, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#c9923f]">Touch</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to elevate your bakery production? Contact us today for personalized solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-[#c9923f]/20 hover:border-[#c9923f]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9923f]/20 hover:scale-105 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9923f]/10 rounded-full mb-4 group-hover:bg-[#c9923f]/20 transition-all duration-300">
                    <Icon className="text-[#c9923f]" size={28} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white/70 hover:text-[#c9923f] transition-colors duration-300 text-sm block break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm">{info.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#c9923f] via-[#d4a574] to-[#c9923f] p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Request a Quote Today
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you find the perfect machinery solution for your bakery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => window.open('tel:+918077558106', '_self')}
                  className="bg-white text-[#c9923f] hover:bg-white/90 font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
                <Button
                  onClick={() => window.open('mailto:info@rewbakerymachines.com', '_self')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#c9923f] font-semibold px-8 py-6 text-lg transition-all duration-300"
                >
                  <Mail className="mr-2" size={20} />
                  Email Us
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6">Follow us on social media</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-[#1a1a1a] rounded-full border border-[#c9923f]/20 hover:border-[#c9923f] hover:bg-[#c9923f]/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="text-[#c9923f]" size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
